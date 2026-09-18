const tbody = document.getElementById('order-table-body');



const formatDateForDisplay = function(timestamp) {
    const date = new Date(timestamp);

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};


const createTableRow = function(order) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${formatDateForDisplay(order.timestamp)}</td>
        <td>${order.qty}</td>
        <td>${order.size}</td>
        <td>$${order.totalPrice}</td>
    `;

    return row;
};



export const renderOrders = function(orders) {

  
    tbody.innerHTML = '';

    
    for (const order of orders) {
        const rowElement = createTableRow(order);
        tbody.appendChild(rowElement);
    }
};