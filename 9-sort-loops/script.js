'use strict'

const arr = [1, 40, -5, 10, 0];

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[i]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}

console.log(arr);