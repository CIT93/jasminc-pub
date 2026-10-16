import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as orderStorage from "./order-storage.js";
import * as orderList from "./order-list.js";

const orderForm = document.getElementById("order-form");
const clearBtn = document.getElementById("clear-btn");

const orders = [];

const handleOrderSubmit = function (event) {
    event.preventDefault();

     const orderData = orderHandler.getOrderInputs();
    const calculatedPrice = priceCalculator.calculateTotal(orderData);

    const orderId = document.getElementById('order-id').value;

    if (orderId) {
        const index = orders.findIndex(function(order) {
            return order.id === orderId;
        });

        if (index !== -1) {
            orders[index] = {
                ...orders[index],
                ...orderData,
                ...calculatedPrice
            };
        }
    } else {
        const newOrder = {
            id: Date.now().toString(),
            ...orderData,
            ...calculatedPrice,
            timestamp: new Date().toISOString()
        };

        orders.push(newOrder);
    }

    orderStorage.saveOrders(orders);

    orderList.renderOrders(orders, {
        onDelete: handleDelete,
        onEdit: handleEdit
    });

    document.getElementById('order-id').value = '';
    orderForm.reset();
};

// app.js

const handleDelete = function(id) {
    console.log("App.js: Requesting delete for order", id);

    const index = orders.findIndex(function(order){
        return order.id === id;
    });
    if (index !== -1) {
        orders.splice(index, 1);

        orderStorage.saveOrders(orders);

        orderList.renderOrders(orders, {
            onDelete: handleDelete,
            onEdit: handleEdit
        });
    }
};

const handleEdit = function(id) {
    console.log("App.js: Requesting edit for order", id);
     const order = orders.find(function(order) {
        return order.id === id;
    });

    if (order) {
        document.getElementById('qty').value = order.qty;
        document.querySelector('input[name="size"][value="' + order.size + '"]').checked = true;
        document.getElementById('gift-wrap').checked = order.giftWrap;
        document.getElementById('order-id').value = order.id;
    }
};



const handleClearOrders = function () {
    orders.length = 0;

    orderStorage.saveOrders(orders);

    orderList.renderOrders(orders, {
    onDelete: handleDelete,
    onEdit: handleEdit
});
};


const init = function () {
    const loadedOrders = orderStorage.loadOrders();

    if (loadedOrders.length > 0) {
        orders.push(...loadedOrders);
        console.log("Orders loaded");

        orderList.renderOrders(orders, {
    onDelete: handleDelete,
    onEdit: handleEdit
});
    }

    if (orderForm) {
        orderForm.addEventListener("submit", handleOrderSubmit);
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", handleClearOrders);
    }
};

document.addEventListener("DOMContentLoaded", init);