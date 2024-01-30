'use strict'

const testString1 = 'world';
const testString2 = 'itIs2-test';

function crypto(password){
   const arr = password.split('');
   
   if(arr.length % 2 == 0) {
        const arrSize = 2;
        const slicedArr = [];

        for(let i = 0; i < arr.length; i +=arrSize) {
            slicedArr.push(arr.slice(i, i + arrSize));
        }
        slicedArr.reverse();
        return slicedArr.flat().join('');

   } else {
        const arrSize = 2;
        const slicedArr = [];

        for(let j = 0; j < arr.length; j +=arrSize) {
            slicedArr.push(arr.slice(j, j + arrSize));
        }
        slicedArr.reverse();
        return slicedArr.flat().join('');
   }
}

const testCipher1 = crypto(testString1);
const testCipher2 = crypto(testString2);


console.log(`Шифр первый: ${testCipher1}\nШифр второй: ${testCipher2}` );




function check(cipher, originalPassword) {
    const arr = cipher.split('');

    if(arr.length % 2 == 0) {
        const arrSize = 2;
        let slicedArr = [];

        for(let i = 0; i < arr.length; i +=arrSize) {
            slicedArr.push(arr.slice(i, i + arrSize));
        }
        
        slicedArr.reverse();
        return `Пароли совпадают: ${(slicedArr.flat().join('')) === originalPassword}`;

    } else {
        const arrSize = 2;
        const slicedArr = [];
        arr.unshift('A');
        
        for(let i = 0; i < arr.length; i +=arrSize) {
            slicedArr.push(arr.slice(i, i + arrSize));
        }
        
        slicedArr.reverse();
        let newSlicedArr = slicedArr.flat();
        newSlicedArr.splice(-2, 1);
        
        return `Пароли совпадают: ${newSlicedArr.join('') === originalPassword}`;
    }
}

const result1 = check(testCipher1, testString1);
const result2 = check(testCipher2, testString2);

console.log(`${result1}\n ${result2}` );