function getAnimeData(){
    let value = localStorage.getItem(getActualUser() + LOCALSTORAGE_LIST_KEY);
    if (!value) value = "[]";
    return JSON.parse(value);
}

function getUserData(){
    let value = localStorage.getItem(LOCALSTORAGE_USERS_KEY);
    if (!value) value = "[]";
    return JSON.parse(value);
}


function saveData(list){
    localStorage.setItem(getActualUser() + LOCALSTORAGE_LIST_KEY, JSON.stringify(list));
}

function addNew(name, episode, link, nextLink){
    if (name && link){
        let animeList = getAnimeData();
        animeList.unshift({
            name: name,
            episode: episode,
            link: link,
            nextLink: nextLink
        });
        saveData(animeList);
        showRow();
    }
}

function deleteIfExists(name){
    let animeList = getAnimeData();
    let index = animeList.findIndex(c=> c.name == name);
    if (index>=0){
        removeFromList(index);
    }
}

function removeFromList(i){
    let animeList = getAnimeData();
    
    animeList.splice(i, 1);
    saveData(animeList);
    showRow();
}

function getActualUser(){
    return localStorage.getItem(LOCALSTORAGE_ACTUAL_USER_KEY);
}

function changeUser(username){
    localStorage.setItem(LOCALSTORAGE_ACTUAL_USER_KEY, username);
}

function addUser(){
    let name = prompt(translate('name'));
    if (name){
        let users = getUserData();
        users.push(name);
        saveUserData(users);
    }
}


function deleteUser(){
    let users = getUserData();
    let userName = getActualUser();

    users = users.filter(c=> c != userName);

    saveUserData(users);
    localStorage.removeItem(getActualUser() + LOCALSTORAGE_LIST_KEY);
    localStorage.removeItem(LOCALSTORAGE_ACTUAL_USER_KEY);

    showRow();
}

function saveUserData(list){
    localStorage.setItem(LOCALSTORAGE_USERS_KEY, JSON.stringify(list));
}