document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const requestForm = document.getElementById('request'),
        answer = document.getElementById('answer'),
        originText = document.getElementById('origin'),
        direction = document.getElementById('direction');
   

    const showResult = (text, color = '') => {
        answer.value = text;
        answer.style.color = color;
    }


    const pageUrl = '/api/v1.5/tr.json/translate',
        hostUrl='translate.yandex.net',
        API_KEY = 'trnsl.1.1.20190704T212630Z.c409bb9604ae7251.df09dbd89372575b02298ed0970f8e45c749648b';

    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const lang = direction.options[direction.selectedIndex].value,
            text = originText.value.trim();
        if (text) {
            const urlText = encodeURIComponent(text);

            fetch(`https://${hostUrl}${pageUrl}?key=${API_KEY}&text=${urlText}&lang=${lang}`,
            {
                method: 'GET',
                mode: 'cors',
                cache: 'default',
            })
            .then( response => {
                if (response.status !== 200) {
                    throw new Error('Status network 200!');
                }
                return(response.json());
            })
            .then ( data => {
                showResult(data.text[0], 'green');
            })
            .catch(error => {
                console.error(error);
            });
        } else {
            showResult('Введите текст для перевода!', 'red');
        }
    });

});