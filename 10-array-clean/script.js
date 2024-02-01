'use strict'

const arrayAges = [98, 2, 56, -7, 10, 0, 12];

function arraySelection(array, actionOnElement){
    const newArray = [];
    for(let element of array){
       if (!actionOnElement(element)) {
        newArray.push(element);
       }
    }
    return newArray;
}

let removeElement = num => !(num >= 10);

const result = arraySelection(arrayAges, removeElement);
console.log(result);