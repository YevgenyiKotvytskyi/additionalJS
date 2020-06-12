'use strict';

/* jshint -W097 */
/* jshint -W117 */

/*global
alert, confirm, console, prompt
*/

const weekDays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let
    currentDay = new Date().getDay(),
    body = document.querySelector('body');



const htmlWeekList = function () {
    let text = '<ul>';
    let style = '';
    for (const count in weekDays) {
        style = (count > 4) ? 'font-style: italic;' : '';
        style += (count == currentDay - 1) ? 'font-weight:bold' : '';
        text += `<li style = "${style}" >${weekDays[count]}</li>`;
        console.log('%c' + weekDays[count], style);

    }
    return text + '</ul>';
};

body.innerHTML += htmlWeekList();