/* jshint -W097 */
/* jshint -W014 */
/*global
alert, confirm, console, prompt
*/

let
    date = new Date(),

    dateString = new Intl.DateTimeFormat("ru", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
    }).format(date),

    year = date.getFullYear(),
    month = addZero(date.getMonth() + 1),
    day = addZero(date.getDate()),
    
    hour = addZero(date.getHours()),
    minute = addZero(date.getMinutes()),
    second =  addZero(date.getSeconds());

    firstDate = dateString.substring(0, dateString.length - 2) + 'года';

let output = addParagraph('Сегодня '  
    + firstDate[0].toUpperCase() + firstDate.substring(1)
    + `, ${hour} ${hourToWord(hour)} ${minute} минуты ${second} секунды`);

    output += addParagraph(`${day}.${month}.${year} - ${hour}.${minute}.${second}`);

document.body.innerHTML += output;

let para = document.createElement("p");
para.setAttribute("style", "color:green; font-weight: bold;");
para.innerHTML =     para.innerHTML = curentTime();
document.body.appendChild(para);

function curentTime() {
    const date = new Date();
    const dateTimeFormat = new Intl.DateTimeFormat('ru', 
    { year: 'numeric', month: 'numeric', day: 'numeric', 
    hour: 'numeric',  minute: 'numeric',  second: 'numeric'} );
    const [{ value: day },,{ value: month },,{ value: year } ,,
        { value: hour },,{ value: minute },,{ value: second }] 
        = dateTimeFormat .formatToParts(date); 
        
        return`Текущее время: ${day}.${month}.${year} ${hour}:${minute}:${second} `;
}
    
setInterval(() => {
    para.innerHTML =  curentTime();
}, 3000);

function hourToWord(hour) {
    const hours =
    ['часов',       //0
        'час',      //1
        'часа',     //2
        'часа',     //3
        'часа',     //4
        'часов',	//5
        'часов',	//6
        'часов',	//7
        'часов',	//8
        'часов',	//9
        'часов',	//10
        'часов',	//11
        'часов',	//12
        'часов',	//13
        'часов',	//14
        'часов',	//15
        'часов',	//16
        'часов',	//17
        'часов',	//18
        'часов',	//19
        'часов',	//20
        'час',	    //21
        'часа',	    //22
        'часа',	    //23
        'часа'];	//24

    return hours[hour];
}

function addZero(num) {
    return (num.toString().length == 1) ? '0' + num : num;
}

function addParagraph(text) {
    return '<p style = "color:red; font-weight: bold;">' + text + '</p>';
}
