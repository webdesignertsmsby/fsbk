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
    const cartFooter = document.querySelector('.cart-footer');

    if (!cartContainer) return;

    cartContainer.innerHTML = ''; 
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div style="text-align:center; padding:40px 20px; color:#666;">
                <p>Keranjang masih kosong.</p>
            </div>`;
        
        // Di HTML kamu, footer mungkin hanya berisi total. 
        // Kita kosongkan saja isinya jika keranjang kosong.
        if (cartFooter) cartFooter.innerHTML = '<div class="flex-between"><span>Total</span><h6 id="cartTotalPrice">Rp0</h6></div>';
    } else {
        cart.forEach(item => {
            totalPrice += item.price * item.qty;

            cartContainer.innerHTML += `
                <div class="cart-item" style="display:flex; gap:12px; margin-bottom:16px; padding:10px; border-bottom:1px solid #eee;">
                    <img src="${item.image}" alt="${item.name}" style="width:80px; height:80px; object-fit:cover; border-radius:8px;">
                    
                    <div style="flex:1;">
                        <h4 style="font-size:18px; margin-bottom:4px; font-weight:600;">${item.name}</h4>
                        <div style="color:var(--brand-600); font-weight:700; font-size:16px; margin-bottom:8px;">
                            ${formatRupiah(item.price)}
                        </div>
                        
                        <div style="display:flex; align-items:center; gap:8px;">
                            <button onclick="updateCartQty(${item.id}, -1)" style="width:16px; height:16px; border:1px solid #ddd; background:#fff; font-size: 10px; cursor:pointer;">-</button>
                            <span style="font-weight:600; font-size: 12px;">${item.qty}</span>
                            <button onclick="updateCartQty(${item.id}, 1)" style="width:20px; height:20px; border:1px solid #ddd; background:#fff; font-size: 10px; cursor:pointer;">+</button>
                        </div>
                    </div>

                    <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:#ff4d4d; font-size:18px; cursor:pointer;">&times;</button>
                </div>
            `;
        });

        // UPDATE FOOTER DENGAN TOMBOL CHECKOUT
        if (cartFooter) {
            cartFooter.innerHTML = `
                <div class="flex-between" style="margin-bottom:16px;">
                    <span style="font-family: var(--font-sans); font-weight: 500;">Total</span>
                    <h6 id="cartTotalPrice" style="font-size:18px; font-weight:700; margin:0;">${formatRupiah(totalPrice)}</h6>
                </div>
                
                <a href="checkout.html" style="text-decoration: none; display: block; width: 100%;">
                    <button class="btn-primary" style="width: 100%;">
                        BELANJA SEKARANG
                    </button>
                </a>
            `;
        }
    }
}

// Tambahkan fungsi checkout sederhana biar keren
function checkoutWhatsApp() {
    let message = "Halo Feasbake, saya ingin memesan:\n\n";
    cart.forEach(item => {
        message += `- ${item.name} (x${item.qty})\n`;
    });
    const total = document.getElementById('cartTotalPrice').innerText;
    message += `\nTotal: ${total}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628123456789?text=${encodedMessage}`, '_blank'); // Ganti nomor WA kamu
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
