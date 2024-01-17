'use strict'

const  lang = 'fr';
// const  lang = 'en';
// const  lang = 'es';
// const  lang = 'de';
// const  lang = 'ghrhr';

switch (lang){
    case 'en':
        console.log('Hello!');
        break;
    case 'es':
        console.log('Hola!');
        break;
    case 'ru':
        console.log('Здравствуйте!');
        break;
    case 'fr':
        console.log('Bonjour!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    default:
        console.log('Выберите другой язык!')
}