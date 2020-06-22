let 
    wrapper = document.querySelector('.wrapper'),
    title = document.querySelector('h1');

document.querySelector('button').addEventListener('click', (event) => {
    let color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    wrapper.style.background  = color;
    title.innerText = color;
});