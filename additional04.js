'use strict';
/* jshint -W097 */

/*global
alert, confirm, console, prompt
*/

function printReduceText(text) {
    if (typeof(text)!=='string') {
        console.log('Это не строка: ', text);
    } else {
        text = text.trim();
        if (text.length > 30) {
            text = text.substring(0,30) + '...';
        }
        console.log('text: ', text);
    }
}
printReduceText('                     printReduceText        ');
printReduceText('                     printReduceText printReduceText printReduceText        ');
