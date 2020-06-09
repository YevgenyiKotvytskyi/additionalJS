'use strict';
/* jshint -W097 */

/*global
alert, confirm, console, prompt
*/

//#region #1

let lang; // ru, en

function dayNameIf(day) {
    let result;
    if (lang === 'ru') {
        if (day === 1) {
            result = 'пн';
        } else if (day === 2) {
            result = 'вт';
        } else if (day === 3) {
            result = 'ср';
        } else if (day === 4) {
            result = 'чт';
        } else if (day === 5) {
            result = 'пт';
        } else if (day === 6) {
            result = 'сб';
        } else if (day === 7) {
            result = 'вс';
        }
    } else if (lang === 'en') {
        if (day === 1) {
            result = 'Mon';
        } else if (day === 2) {
            result = 'Tu';
        } else if (day === 3) {
            result = 'Wed';
        } else if (day === 4) {
            result = 'Th';
        } else if (day === 5) {
            result = 'Fri';
        } else if (day === 6) {
            result = 'Sat';
        } else if (day === 7) {
            result = 'Sun';
        }
    }
    return result;
}

function dayNameSwith(day) {
    let result;
    switch (lang) {
        case "ru":
            switch (day) {
                case 1: result = 'пн'; break;
                case 2: result = 'вт'; break;
                case 3: result = 'ср'; break;
                case 4: result = 'чт'; break;
                case 5: result = 'пт'; break;
                case 6: result = 'сб'; break;
                case 7: result = 'вс'; break;
            }
            break;
        case "en":
            switch (day) {
                case 1: result = 'Mon'; break;
                case 2: result = 'Tu'; break;
                case 3: result = 'Wed'; break;
                case 4: result = 'Th'; break;
                case 5: result = 'Fri'; break;
                case 6: result = 'Sat'; break;
                case 7: result = 'Sun'; break;
            }
            break;
    }
    return result;
}

function dayNameArray(day) {
    let
        weekDays =
            [
                ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
                ['Mon', 'Tu', 'Wed', 'Th', 'Fri', 'Sat', 'Sun']
            ];

    return weekDays[+(lang === 'en')][day - 1];
}

lang = 'ru';
console.log('lang: ', lang);
console.log('dayNameIf(5): ', dayNameIf(2));
console.log('dayNameSwith(6): ', dayNameSwith(6));
console.log('dayNameArra(2): ', dayNameArray(2));


lang = 'en';
console.log('lang: ', lang);
console.log('dayNameIf(5): ', dayNameIf(5));
console.log('dayNameSwith(7): ', dayNameSwith(7));
console.log('dayNameArra(2): ', dayNameArray(2));

//#endregion #1

//#region #2
{
    let namePerson;

    namePerson = 'Артем';
    //namePerson = 'Максим';
    // namePerson = 'другой';

    let answer = (namePerson === 'Артем') ? 'директор' :
        (namePerson === 'Максим') ? 'преподаватель' : 'студент';
    console.log('answer: ', answer);
}


//#endregion #2