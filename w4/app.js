import * as orderHandler from "./order-handler.js";


const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');



const handleOrderSubmit = function (event) {

    event.preventDefault();


        const orderData = orderHandler.getOrderInputs();

        
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
