import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as resultsDisplay from "./results-display.js";
import * as orderStorage from './order-storage.js';

const orderForm = document.getElementById('order-form');

const orders = [];

const handleOrderSubmit = function (event) {

    event.preventDefault();


    const orderData = orderHandler.getOrderInputs();
    const calculatedPrice = priceCalculator.calculateTotal(orderData);

    const newOrder = {
        ...orderData,
        ...calculatedPrice,
        timestamp: new Date().toISOString()
    };

    orders.push(newOrder);
    resultsDisplay.renderResults(newOrder);
    
};

const init = function () {
    if (orderForm) {
        const loadedOrders = orderStorage.loadOrders();
    if (loadedOrders.length > 0) {
        orders.push(...loadedOrders);
        console.log("Orders loaded");
    }

    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
    }
}
};




document.addEventListener('DOMContentLoaded', init);
