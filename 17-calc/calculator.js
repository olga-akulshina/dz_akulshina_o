'use strict'

const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let clickedBtn = e.target;
        let num1 = +document.querySelector('.num1').value;
        let num2 = +document.querySelector('.num2').value;
        let res = document.querySelector('.result');
        console.log(res);

        if (clickedBtn.innerText === '+') {
            res.innerHTML = num1 + num2;
        }
        if (clickedBtn.innerText === '-') {
            res.innerHTML = num1 - num2;
        }
        if (clickedBtn.innerText === '*') {
            res.innerHTML = num1 * num2;
        }
        if (clickedBtn.innerText === '/') {
            res.innerHTML = num1 / num2;
        }
    })
})
