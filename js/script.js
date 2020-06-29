const 
    btnAddUser = document.getElementById('registerUser'),
    btnAuthor = document.getElementById('login'),
    btnLogin = document.getElementById('login'),
    userHTML = document.getElementById('list');
    userTitle = document.getElementById('username');

Users = class{
    constructor(key){
        this.userList = [];
        this.key = key;
    }
    
    askNewUserHandler(event){

        let 
            msg = '',
            fio;

        do {

            fio = prompt("Введите Имя_Фамилия через пробел." + msg);
            if (fio === null) break;
            
            if ((fio.length - 1) === fio.split(' ').join('').length) break;

            msg = 'Нужет один пробел между именем и фамилией!';

        } while (true);
        
        const firstName = fio.split(' ')[0];
        const lastName = fio.split(' ')[1];

        
        let login = prompt('Введите логин');
        if ((login === null) || (login.trim() === '')) return;
        login = login.trim();

        const password = prompt('Введите пароль');
        if ((password === null) || (password.trim()==='') )  return;

        const now = new Date();
        const dateRegistration = now.toLocaleDateString('ru', 
            {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) 
            + ', ' + now.toLocaleTimeString('ru') ;
        this.userList.push({firstName, lastName, login, password,dateRegistration});
        this.saveToStorage();
        this.showUsers();
    }

    saveToStorage(){
        localStorage.setItem(this.key,JSON.stringify(this.userList));
    }

    loadFromStorage() {
        this.userList = JSON.parse(localStorage.getItem(this.key));
    }

    showUsers() {

        userHTML.innerHTML = '';
        this.userList.forEach(element => {
            const user = document.createElement('tr');
            user.innerHTML = `
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.dateRegistration}</td>
            <td><button id="${'usr-' + element.login}"  class="btn-delete">удалить</button><td>`;
            userHTML.append(user);
        });
    }

    readStorageHandler(){
        this.loadFromStorage();
        this.showUsers();
    }

    userDeleteHandler(event) {

        if (event.target.className == 'btn-delete') {
            const login = event.target.id.split('-')[1];
            let modify = false;
            if (login) {
                const arr = this.userList;
                for (let i = arr.length - 1; i > -1; i--) {
                  
                    if ( arr[i].login === login ) {
                        arr.splice(i, 1);
                        modify = true;
                    }
                  }
            }
            if (modify) {
                this.showUsers();
                this.saveToStorage();
            }
        }

    }

    loginHandler() {

        const 
            login = prompt('Введите логин'),
            password = prompt('Введите пароль');
        let notFound = true;
        for (let element of this.userList) {
            if ((element.login === login.trim()) && (element.password === password) ) {
                userTitle.textContent = `${element.firstName} ${element.lastName}`;
                notFound = false;
                break;
            }
        }

        if (notFound) {
            alert ('Пользователь с таким логином и паролем не найден!');
        }

    }

    eventLiseners() {

        btnAddUser.addEventListener('click',this.askNewUserHandler.bind(this));
        window.addEventListener('load',this.readStorageHandler.bind(this));
        document.addEventListener('click',this.userDeleteHandler.bind(this));
        btnAuthor.addEventListener('click',this.loginHandler.bind(this));

    }
}

users = new Users('userList');
users.eventLiseners.call(users);
