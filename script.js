const 
    arrow = document.querySelector('.circle');

let 
    angle = 0,
    interval;

let 
    pause = false,
    pauseSecond = 0,
    diff = 0;

function startPossition() {
    return new Date().getSeconds() + 30;
}

diff = startPossition();
    


function rotate() {

    interval = requestAnimationFrame(rotate);
    const now = new Date().getSeconds();
    arrow.style.transform  = `rotate(${(now - diff)*6}deg)`;
}    

interval = requestAnimationFrame(rotate);



function resetAnimation () {
    diff = startPossition();
    interval = requestAnimationFrame(rotate);
}



function pauseAnimation () {
    if (pause) {
        interval = requestAnimationFrame(rotate);
        pause = false;
        diff = (new Date().getSeconds()) - pauseSecond + diff;
    } else {
        pause = true;
        cancelAnimationFrame(interval);
        pauseSecond =  new Date().getSeconds();
    }
}

document.querySelector('#reset').addEventListener('click', resetAnimation);
document.querySelector('#pause').addEventListener('click', pauseAnimation);
