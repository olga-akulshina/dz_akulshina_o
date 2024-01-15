'use strict'

const userDriver = {
    userName : 'Тестовый пользователь',
    hasLicence : true,
    age : 35,
    isDrunk : false
}

function testDriver(user, licence, age, alcoholicState) {
    if(licence && age >= 18 && !alcoholicState) {
        console.log(`${user} может сесть за руль`);
    } else {
        console.log(`${user} не может сесть за руль`);
    }
}

testDriver(userDriver.userName, userDriver.hasLicence, userDriver.age, userDriver.isDrunk);