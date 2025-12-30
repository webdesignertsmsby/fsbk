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
