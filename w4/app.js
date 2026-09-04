import * as orderHandler from "./order-handler.js";
import * as priceCalculator from './price-calculator.js';



const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');
const orders = []

const handleOrderSubmit = function (event) {
    
    event.preventDefault();


        const orderData = orderHandler.getOrderInputs();
        const calculatedPrice = priceCalculator.calculateTotal(orderData)
        const newOrder = {
            ...orderData,
            ...calculatedPrice,
            timestamp: new Date().toISOString()
        }

        orders.push(newOrder)
       console.log("Order History:", orders);
       
  
    let summaryText = `Ordered ${orderData.qty} ${orderData.size} T-Shirt${orderData.qty > 1 ? 's' : ''}`;


        if (orderData.giftWrap) {
        summaryText += " (gift wrapped)";
    }


   
    orderSummary.textContent = summaryText;
};




const init = function () {
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
        console.log("App Initialized");
    }
};




document.addEventListener('DOMContentLoaded', init);
