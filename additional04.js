'use strict';
/* jshint -W097 */

/*global
alert, confirm, console, prompt
*/

function printReduceText(text) {
    if (typeof(text)!=='string') {
        return 'Это не строка: ' + text;
    } else {
        text = text.trim();
        if (text.length > 30) {
            text = text.substring(0,30) + '...';
        }
        return text;
    }
}
console.log(printReduceText('                     printReduceText        '));
console.log (printReduceText('                     printReduceText printReduceText printReduceText        '));
