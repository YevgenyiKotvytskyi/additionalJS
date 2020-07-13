document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');
    
    const showData = (responseText) => {
        const data = JSON.parse(responseText);
        data.cars.forEach(item => {
            if (item.brand === select.value) {
                const {brand, model, price} = item;
                output.innerHTML = `Тачка ${brand} ${model} <br>
                Цена: ${price}$`;
            }
        });
    };

    const errorMessage = (error) => {
        output.innerHTML = 'Произошла ошибка';
        console.error(error);
    };

    const getData = () => 
        new Promise ( (resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', './cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            });
        });



    select.addEventListener('change', (e) => {

        getData()
            .then(showData)
            .catch(errorMessage);

    });

});