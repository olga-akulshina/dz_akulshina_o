'use strict'

const positionLat = 2, //тестовые данные
      positionLong = 3,
      addressLat = 5,
      addressLong = 6;


function giveDistance(xStart, yStart, xFinish, yFinish) {

    let distance = `Дистанция равна: ${Math.sqrt(((xFinish - xStart) ** 2) + ((yFinish - yStart) ** 2))}`;
    return distance;
};
     
console.log(giveDistance(positionLat, positionLong, addressLat, addressLong));

