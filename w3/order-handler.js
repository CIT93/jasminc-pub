// Reference to the main order form element.
const orderForm = document.getElementById('order-form');

// References to the inputs within the form using querySelector.
const qtyInput = orderForm.querySelector('#qty');
const giftWrapInput = orderForm.querySelector('#gift-wrap');
const sizeRadios = orderForm.querySelectorAll('input[name="size"]');

// Helper function to get the checked radio button.
const getSelectedRadioValue = function (radioButtons) {
   for (const radio of radioButtons) {
      if (radio.checked) {
         return radio.value;
      }
   }
};

// Main function to collect form inputs and return them as an object literal.
export const getOrderInputs = function () {
   return {
      qty: parseInt(qtyInput.value) || 1,
      size: getSelectedRadioValue(sizeRadios),
      giftWrap: giftWrapInput.checked
   };
};

