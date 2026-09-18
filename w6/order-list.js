export function renderOrders(orders) {
    const tbody = document.getElementById('order-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    orders.forEach((order) => {
        const row = document.createElement('tr');

        const date = order.date || new Date().toLocaleDateString();
        const qty = order.qty ?? order.quantity ?? 1;
        const size = order.size || 'N/A';
        
        const rawTotal = order.totalPrice ?? order.total ?? 0;
        const total = typeof rawTotal === 'number' ? `$${rawTotal.toFixed(2)}` : rawTotal;

        row.innerHTML = `
            <td>${date}</td>
            <td>${qty}</td>
            <td>${size}</td>
            <td>${total}</td>
            <td>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}