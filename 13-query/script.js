'use strict'

const queryParameters = {
    search: 'Вася',
    take: 10
}

function parametersString(obj) {
    let totalString = '';
    for (let key of Object.keys(obj)) {
        totalString += `${key}=${obj[key]}&`;
    }
    return totalString.slice(0, -1);
}
console.log(parametersString(queryParameters));