
const orderTableBody = document.getElementById('order-table-body');


export const renderOrders = function (orders) {

    orderTableBody.innerHTML = '';


    for (const order of orders) {

        const row = document.createElement('tr');


        row.innerHTML = `
            <td>${order.date}</td>
            <td>${order.qty}</td>
            <td>${order.size}</td>
            <td>${order.total}</td>
        `;


        orderTableBody.appendChild(row);
    }
};