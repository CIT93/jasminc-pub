export function renderResults(order) {
    const summaryDiv = document.getElementById('order-summary');

    document.getElementById('display-total').textContent = order.totalPrice;
    document.getElementById('display-qty').textContent = order.qty;
    document.getElementById('display-size').textContent = order.size;
    document.getElementById('display-gift').textContent = order.giftWrap ? 'Yes' : 'No';

    summaryDiv.style.display = 'block';
}