let cart = JSON.parse(localStorage.getItem('feasbake_cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    alert(`${product.name} berhasil ditambahkan!`);
}

function updateCart() {
    localStorage.setItem('feasbake_cart', JSON.stringify(cart));
    calculateTotal();
}

function calculateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log("Total Belanja:", formatRupiah(total));
    return total;
}

function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

function renderCartItems() {
    const cartContainer = document.querySelector('.cart-items-container'); // Pastikan ID/Class ini ada di HTML sidebar-mu
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Keranjang kosong</p>';
        return;
    }

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <p>${item.name} (x${item.quantity})</p>
            <p>${formatRupiah(item.price * item.quantity)}</p>
        </div>
    `).join('');
}
