const tbody = document.getElementById('order-table-body');
tbody.addEventListener('click', function(event) {
    const target = event.target;
    
    // 1. Get the ID from the button that was clicked
    const id = target.dataset.id;

    // 2. Guard Clause: If they clicked a row (white space) but NOT a button, 
    // there will be no ID. So we stop the function immediately.
    if (!id) return;

    // 3. Temporary Test: Log the ID to prove it works!
    console.log("Clicked button with ID:", id); 
});


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
        <td>
        <button class="edit-btn" data-id="${order.id}">Edit</button>
        <button class="delete-btn" data-id="${order.id}">Delete</button>
    </td>
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