const orderTableBody = document.getElementById('order-table-body');

const formatDate = function(timestamp) {
    if (!timestamp) return new Date().toLocaleDateString('en-US');
    return new Date(timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const createOrderRow = function(order) {
    const tr = document.createElement('tr');
    
    if (order.id) tr.dataset.id = order.id;

    tr.innerHTML = `
        <td>${formatDate(order.date || order.timestamp)}</td>
        <td>${order.qty}</td>
        <td>${order.size}</td>
        <td>$${Number(order.total).toFixed(2)}</td>
        <td class="action-cell">
        </td>
    `;
    
    return tr;
};

export const renderOrders = function(orders) {
    orderTableBody.innerHTML = '';

    for (const order of orders) {
        const rowElement = createOrderRow(order);
        orderTableBody.appendChild(rowElement);
    }
};