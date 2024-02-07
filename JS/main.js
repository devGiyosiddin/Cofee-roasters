'use strict';
const elModal = document.querySelector('.os-modal');
const elButoon = document.querySelector('.order-summary_buttton');
if (elButoon) {
    elButoon.addEventListener('click', function () {
         elModal.classList.add('os-modal--open')
     })
 }