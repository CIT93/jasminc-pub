
const orderForm = document.getElementById('order-form');




const qtyInput = orderForm.querySelector('#qty');
const giftWrapInput = orderForm.querySelector('#gift-wrap');
const sizeRadios = orderForm.querySelectorAll('input[name="size"]');




const getSelectedRadioValue = function (radioButtons) {
   for (const radio of radioButtons) {
      if (radio.checked) {
         return radio.value;
      }
   }
};




export const getOrderInputs = function () {
   return {
      qty: parseInt(qtyInput.value) || 1,
      size: getSelectedRadioValue(sizeRadios),
      giftWrap: giftWrapInput.checked
   };
};

