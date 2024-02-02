'use strict'

const card = '4561-2612-1234-5464';
const card2 = '4564-2612-1234-5464';

function cardCheck(card){
    const cardResult = card.trim().replaceAll('-', '');
    let sumTotal = 0;
    for(let i = 0; i < cardResult.length; i++){
        let number = Number(cardResult[i]);
        if(i % 2 === 0) {
            number *=2;
        }
        if(number > 9) {
            number -=9;
        }
        sumTotal += number;
    }
    return Number(sumTotal % 10) === 0;
}

console.log(cardCheck(card));
console.log(cardCheck(card2));