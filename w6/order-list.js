export function renderOrders(orders) {
    const tbody = document.getElementById('order-table-body');
    
    
    tbody.innerHTML = '';

   
    orders.forEach((order) => {
        const row = document.createElement('tr');

        const date = order.date || new Date().toLocaleDateString();
        const qty = order.qty ?? order.quantity ?? 1;
        const size = order.size || 'N/A';
        const total = typeof order.total === 'number' ? `$${order.total.toFixed(2)}` : (order.total || '$0.00');

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