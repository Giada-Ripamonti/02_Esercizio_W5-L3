let userID = [];

function User(nome, cognome, citta) {
    this.nome = nome;
    this.cognome = cognome;
    this.citta = citta;
}

let formBtn = document.querySelector('#form button');
formBtn.onclick = function() {
    let nome = document.querySelector('#form input[name=name]');
    let cognome = document.querySelector('#form input[name=lastname]');
    let citta = document.querySelector('#form input[name=city]');
    //console.log(nome, cognome, citta);
    let user = new User(nome.value, cognome.value, citta.value);
    userID.push(user);
    nome.value = '';
    cognome.value = '';
    citta.value = '';
    addUser();  
}

function addUser(){
    let userList = document.querySelector('#table tbody');
    userList.innerHTML = '';

    userID.forEach((userAdded, i) => {
        let userRow = document.createElement('tr');
        userList.appendChild(userRow);

        let userNome = document.createElement('td');
        userNome.innerHTML = userAdded.nome;
        userList.appendChild(userNome);

        let userCognome = document.createElement('td');
        userCognome.innerHTML = userAdded.cognome;
        userList.appendChild(userCognome);

        let userCitta = document.createElement('td');
        userCitta.innerHTML = userAdded.citta;
        userList.appendChild(userCitta);

        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'X';
        delBtn.onclick = () => removeUser(i)
        userList.appendChild(delBtn);
    })
}

function removeUser(index) {
    userID.splice(index, 1);
    addUser();
}