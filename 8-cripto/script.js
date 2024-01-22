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
        return slicedArr.flat(Infinity).join('');

   } else {
        arr.reverse();
        return arr.join('');
   }
}

const testCipher1 = crypto(testString1);
const testCipher2 = crypto(testString2);

console.log(`${testCipher1} \n ${testCipher2}` );



function check(cipher, originalPassword) {
    const arr = cipher.split('');

    if(arr.length % 2 == 0) {
        const arrSize = 2;
        const slicedArr = [];

        for(let i = 0; i < arr.length; i +=arrSize) {
            slicedArr.push(arr.slice(i, i + arrSize));
        }
        slicedArr.reverse();
        return (slicedArr.flat(Infinity).join('')) === originalPassword;

    } else {
        arr.reverse();
        return (arr.join('')) === originalPassword;
    }
}

const result1 = check(testCipher1, testString1);
const result2 = check(testCipher2, testString2);

console.log(`${result1} \n ${result2}` );

