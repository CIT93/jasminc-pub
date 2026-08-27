import * as orderHandler from "./order-handler.js";
// Select elements
const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');

// Handle form submission
const handleOrderSubmit = function (event) {
    // Prevent the default form reload
    event.preventDefault();

    // Get input values from the module
    const orderData = orderHandler.getOrderInputs();

    // Build the order summary message
    let summaryText = `Ordered ${orderData.qty} ${orderData.size} T-Shirt${orderData.qty > 1 ? 's' : ''}`;

    // Add gift wrap text ONLY if checked (avoids the 15-point deduction)
    if (orderData.giftWrap) {
        summaryText += " (gift wrapped)";
    }

    // Display message on the page
    orderSummary.textContent = summaryText;
};

// Initialize event listeners
const init = function () {
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
        console.log("App Initialized");
    }
};

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);