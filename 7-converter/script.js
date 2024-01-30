'use strict'

const curs = {
        'EUR' : 95.67,
        'USD' : 87.96,
        'RUB' : 1,
        'JPY' : 0.6
    }


function converter(summa, currencyInput,  currencyOutput) {

    const eurInUSD = curs.EUR / curs.USD,
          eurInRUB = curs.EUR / curs.RUB,
          eurInJPY = curs.EUR / curs.JPY,
          usdInEUR = curs.USD / curs.EUR,
          usdInRUB = curs.USD / curs.RUB,
          usdInJPY = curs.USD / curs.JPY,
          rubInEUR = curs.RUB / curs.EUR,
          rubInUSD = curs.RUB / curs.USD,
          rubInJPY = curs.RUB / curs.JPY,
          jpyInEUR = curs.JPY / curs.EUR,
          jpyInUSD = curs.JPY / curs.USD,
          jpyInRUB = curs.JPY / curs.RUB;
    
     
    if (currencyInput === currencyOutput) {
            return `${summa + currencyInput}`;

    } if (currencyInput === 'EUR' && currencyOutput === 'USD') {
            return `${(summa / eurInUSD).toFixed(2)} USD`;
    } if (currencyInput === 'EUR' && currencyOutput === 'RUB') {
            return `${(summa / eurInRUB).toFixed(2)} RUB`;
    } if (currencyInput === 'EUR' && currencyOutput === 'JPY') {
            return `${(summa / eurInJPY).toFixed(2)} JPY`;
    }
            
      if (currencyInput === 'USD' && currencyOutput === 'EUR') {
            return `${(summa / usdInEUR).toFixed(2)} EUR`;
    } if (currencyInput === 'USD' && currencyOutput === 'RUB') {
            return `${(summa / usdInRUB).toFixed(2)} RUB`;
    } if (currencyInput === 'USD' && currencyOutput === 'JPY') {
            return `${(summa / usdInJPY).toFixed(2)} JPY`;
    }
            
      if (currencyInput === 'RUB' && currencyOutput === 'EUR') {
            return `${(summa / rubInEUR).toFixed(2)} EUR`;
    } if (currencyInput === 'RUB' && currencyOutput === 'USD') {
            return `${(summa / rubInUSD).toFixed(2)} USD`;
    } if (currencyInput === 'RUB' && currencyOutput === 'JPY') {
            return `${(summa / rubInJPY).toFixed(2)} JPY`;
    }
            
      if (currencyInput === 'JPY' && currencyOutput === 'EUR') {
            return `${(summa / jpyInEUR).toFixed(2)} EUR`;
    } if (currencyInput === 'JPY' && currencyOutput === 'USD') {
            return `${(summa / jpyInUSD).toFixed(2)} USD`;
    } if (currencyInput === 'JPY' && currencyOutput === 'RUB') {
            return `${(summa / jpyInRUB).toFixed(2)} RUB`; 
    } else {
            return null;
    }
        
}  

console.log(converter(1000, 'EUR', 'USD'));
console.log(converter(900, 'RUB', 'USD'));
console.log(converter(200, 'EUR', 'JPY'));
console.log(converter(7685, 'ERR', 'USD'));
console.log(converter('RUB', 'EUR', 'USD'));

    