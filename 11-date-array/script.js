'use strict'

const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function selectDates(array){
    return array
        .filter(el => { return Date.parse(el)})
        .map(el => {
            if(el.includes('/')){
                let splitted = el.split('/');
                let tmp = [];
                tmp.push(splitted[1]);
                tmp.push(splitted[0]);
                tmp.push(splitted[2]);
                return tmp.join('-');
            } else {
                return el;
            }
    })
}

console.log(selectDates(arr));




