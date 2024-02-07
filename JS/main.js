'use strict';
const elModal = document.querySelector('.os-modal');
const elButoon = document.querySelector('.order-summary_buttton');
if (elButoon) {
    elButoon.addEventListener('click', function () {
         elModal.classList.add('os-modal--open')
    })
    function escRemove() {
        if (elModal.classList.contains('os-modal--open')) {
            elModal.classList.remove('os-modal--open')
        }
    };
    document.addEventListener('keydown', function (event) {
        // Check if the pressed key is 'Escape'
        if (event.key === 'Escape') {
            escRemove();
        }
    });
 }