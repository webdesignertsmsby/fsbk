// --- 1. INISIALISASI CART ---
// Kita ambil data dari LocalStorage saat halaman dimuat
let cart = JSON.parse(localStorage.getItem('feasbakeCart')) || [];

// Render ulang cart saat halaman pertama kali dibuka (supaya angka badge & isi cart muncul)
document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
    updateCartCount();
});

// --- 2. FUNGSI MENAMBAH KE CART ---
function addToCart(productId, quantity = 1) {
    // Pastikan data 'products' dari productData.js terbaca
    if (typeof products === 'undefined') {
        console.error("Data produk tidak ditemukan.");
        return;
    }

    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error("Produk ID tidak ditemukan:", productId);
        return;
    }

    // Cek apakah item sudah ada di cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        // Jika ada, tambahkan quantity-nya
        existingItem.qty += quantity;
    } else {
        // Jika belum, masukkan item baru
        // Handle gambar: ambil gambar pertama jika bentuknya array
        const imageSrc = Array.isArray(product.images) ? product.images[0] : (Array.isArray(product.image) ? product.image[0] : product.image);

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: imageSrc,
            qty: quantity
        });
    }

    saveCart();       // Simpan ke memori browser
    renderCartItems(); // Update tampilan sidebar
    updateCartCount(); // Update angka di navbar
    
    // Opsional: Log ke console untuk debugging
    console.log("Cart updated:", cart);
}

// --- 3. FUNGSI MENGHAPUS ITEM ---
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartItems();
    updateCartCount();
}

// --- 4. FUNGSI UBAH QTY DI SIDEBAR (+ / -) ---
function updateCartQty(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.qty += change;
        // Jika qty kurang dari 1, tetap 1 (atau bisa diubah jadi hapus)
        if (item.qty < 1) item.qty = 1; 
        saveCart();
        renderCartItems();
        updateCartCount();
    }
}

// --- 5. SIMPAN KE LOCALSTORAGE ---
function saveCart() {
    localStorage.setItem('feasbakeCart', JSON.stringify(cart));
}

// --- 6. RENDER TAMPILAN (HTML) ---
function renderCartItems() {
    const cartContainer = document.getElementById('cartItemsContainer'); 
    const totalPriceEl = document.getElementById('cartTotalPrice');
    const cartFooter = document.querySelector('.cart-footer'); // Ambil bagian footer

    if (!cartContainer) return;

    cartContainer.innerHTML = ''; 
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div style="text-align:center; padding:40px 20px; color:var(--text-secondary);">
                <i class="fas fa-shopping-cart" style="font-size: 48px; display:block; margin-bottom:16px; opacity:0.3;"></i>
                <p>Keranjang Anda masih kosong.</p>
            </div>`;
        
        // Sembunyikan footer jika kosong (biar rapi)
        if (cartFooter) cartFooter.style.display = 'none';
    } else {
        // Tampilkan footer jika ada barang
        if (cartFooter) cartFooter.style.display = 'block';

        cart.forEach(item => {
            totalPrice += item.price * item.qty;

            cartContainer.innerHTML += `
                <div class="cart-item" style="display:flex; gap:12px; margin-bottom:20px; padding:10px; background:#f9f9f9; border-radius:12px;">
                    <img src="${item.image}" alt="${item.name}" style="width:70px; height:70px; object-fit:cover; border-radius:8px;">
                    
                    <div style="flex:1;">
                        <h4 style="font-size:14px; margin-bottom:4px; color:var(--brand-900);">${item.name}</h4>
                        <div style="color:var(--brand-500); font-weight:bold; font-size:14px; margin-bottom:8px;">
                            ${formatRupiah(item.price)}
                        </div>
                        
                        <div style="display:flex; align-items:center; gap:12px;">
                            <div style="display:flex; align-items:center; border:1px solid #ddd; border-radius:4px; overflow:hidden;">
                                <button onclick="updateCartQty(${item.id}, -1)" style="padding:2px 8px; border:none; background:#eee; cursor:pointer;">-</button>
                                <span style="padding:0 10px; font-size:13px; font-weight:600;">${item.qty}</span>
                                <button onclick="updateCartQty(${item.id}, 1)" style="padding:2px 8px; border:none; background:#eee; cursor:pointer;">+</button>
                            </div>
                        </div>
                    </div>

                    <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:#ff4d4d; font-size:20px; cursor:pointer; align-self:flex-start;">&times;</button>
                </div>
            `;
        });
    }

    if (totalPriceEl) {
        totalPriceEl.innerText = formatRupiah(totalPrice);
    }
}
// --- 7. UPDATE BADGE DI NAVBAR ---
function updateCartCount() {
    const badge = document.getElementById('cartCount');
    if (badge) {
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        badge.innerText = totalQty;
        // Sembunyikan badge jika 0
        badge.style.display = totalQty > 0 ? 'flex' : 'none'; 
    }
}

// --- HELPER: FORMAT RUPIAH ---
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR', 
        minimumFractionDigits: 0 
    }).format(number);
}
