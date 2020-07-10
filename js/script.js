// забирает переменное кол-во параметров в values, возвращает фильтованые по типу значения
// в массиве
const filterByType = (type, ...values) => values.filter(value => typeof value === type),

	// функция для скрытия блоков div.dialog__response-block
	hideAllResponseBlocks = () => {
		// получаем массив элементов div.dialog__response-block
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		// скрываем елементы div.dialog__response-block
		responseBlocksArray.forEach(block => block.style.display = 'none');
	},

	// выводим результат анализа типов в строке #data
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		// скрываем блоки
		hideAllResponseBlocks();
		// отображаем нужный блок
		document.querySelector(blockSelector).style.display = 'block';
		if (spanSelector) {
			// выводим сообщение в элемент id = spanSelector
			document.querySelector(spanSelector).textContent = msgText;
		}
	},

	// скомбинированные варианты вызова showResponseBlock
	// для сообщений result, error, NoResult
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),

	tryFilterByType = (type, values) => {
		// проверяем возможнось предобразования значений строки через запятую
		// в корректные параметры для  filterByType
		try {
			// вызываем filterByType с параметрами в строке через запятую, 
			// собираем результат выполнения в строку через запятую
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			const alertMsg = (valuesArray.length) ?
			// если есть данные нужного типа, строка для вывода
				`Данные с типом ${type}: ${valuesArray}` :
			// если нет данных нужного типа, строка для вывода
				`Отсутствуют данные типа ${type}`;
			// показываем результат в div.dialog__response-block_ok 
			showResults(alertMsg);
		} catch (e) {
			// при ошибке предобазования в filterByType сообщение об ошибке 
			// в .dialog__response-block_error 
			showError(`Ошибка: ${e}`);
		}
	};

const filterButton = document.querySelector('#filter-btn');

// вешаем событие на кнопку формы
filterButton.addEventListener('click', e => {
	// получаем элементы DOM #type, #data
	const typeInput = document.querySelector('#type');
	const dataInput = document.querySelector('#data');

	// проверяем данные в input для анализа
	if (dataInput.value === '') {
		// выводим ошибку при валидации input id = 'data'
		// пока сообщение об ошибке не пустое, данные не отправляются
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		// функция отображает блок .dialog__response-block_no-results
		showNoResults();
	} else {
		// чистим сообщение ошибки валидации input id = 'data'
		dataInput.setCustomValidity('');
		// отмена действий браузера
		e.preventDefault();
		// запускаем фильтрацию по типам
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

