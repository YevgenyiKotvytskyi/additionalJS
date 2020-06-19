'use strict';

/* jshint -W097 */
/*global
alert, confirm, console, prompt, document, localStorage
*/

const

    listChildHTML =
        `
<li class="todo-item">
			<span class="text-todo"></span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
</li>`;


let
    listChildElement = document.createElement('div'),
    completedChildElement = document.createElement('div'),
    input = document.querySelector('.header-input'),
    todoList = document.querySelector('ul.todo-list'),
    todoCompleted = document.querySelector('ul.todo-completed'),
    button = document.querySelector('form button'),
    container = document.querySelector('.todo-container'),

    appData = {
        key: 'todoList',
        todo: {
            list: [],
            complited: []
        },

        writeList() {
            this.todo.list = [];
            this.todo.complited = [];
            todoList.querySelectorAll('li').forEach(element => this.todo.list.push(element.innerText));
            todoCompleted.querySelectorAll('li').forEach(element => this.todo.complited.push(element.innerText));
            localStorage.setItem(this.key, JSON.stringify(appData.todo));
        },

        readList() {
            const todo = JSON.parse(localStorage.getItem(this.key));
            if (todo) {
                for (const property in this.todo) {
                    if (Array.isArray(todo[property])) {
                        this.todo[property] = todo[property];
                    }
                }
            }
        },

        writeToHTML () {

            todoList.innerHTML = '';
            this.todo.list.forEach(element => {
                const newElement = listChildElement.cloneNode(true);
                newElement.querySelector('span.text-todo').innerText = element;
                todoList.append(newElement);
            });

            todoCompleted.innerHTML = '';
            this.todo.complited.forEach(element => {
                const newElement = listChildElement.cloneNode(true);
                newElement.querySelector('span.text-todo').innerText = element;
                todoCompleted.append(newElement);
            });

        },

        showLocalStorage() {
            this.readList();
            this.writeToHTML();
        }

    };

listChildElement.innerHTML = listChildHTML;
listChildElement = listChildElement.children[0];



function addItem() {
    const inputContent = input.value.trim();
    input.value = '';
    if (inputContent) {
        const newElement = listChildElement.cloneNode(true);
        newElement.querySelector('span.text-todo').innerText = inputContent;
        todoList.append(newElement);
        return true;
    }
    return false;
}

let target;

function addToCompleteItems(event) {
    const target = event.target;
    if (target.classList.contains('todo-complete')) {
        let todoElement = target.closest('li.todo-item');
        if (todoElement) {
            const newCompleteItem = listChildElement.cloneNode(true);
            todoCompleted.appendChild(todoElement);
        }
    }
}

function addToCompleteItems(event) {
    const target = event.target;
    if (target.classList.contains('todo-complete')) {
        let todoElement = target.closest('li.todo-item');
        if (todoElement) {
            const newCompleteItem = listChildElement.cloneNode(true);
            todoCompleted.appendChild(todoElement);
        }
    }
}

function removeItem(event) {
    const target = event.target;
    if (target.classList.contains('todo-remove')) {
        let todoElement = target.closest('li.todo-item');
        if (todoElement) {
            todoElement.remove();
        }
    }
}

function storeData(event) {
    const target = event.target;
    if (target.tagName == 'BUTTON' &&
        (target.classList.contains('todo-remove') ||
            target.classList.contains('todo-complete') ||
            target.classList.contains('header-button'))) {

        if (target.classList.contains('header-button')) event.preventDefault();
        appData.writeList();

    }
}

todoList.addEventListener('click', addToCompleteItems);
container.addEventListener('click', removeItem);
button.addEventListener('click', addItem);
document.body.addEventListener('click', storeData);

appData.showLocalStorage();