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

function addNew(id, name, episode, link, nextLink){
    if (name && link){
        let animeList = getAnimeData();
        animeList.unshift({
            id:id,
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

if (window.location.pathname.startsWith("/ver/")){
    let div = document.createElement("div");
    div.innerHTML='<button style="display:none" id="animeIdButton" onclick="this.innerText=anime_id">placeholder</button>';
    document.body.appendChild(div);
    
    let button = document.getElementById("animeIdButton")
    button.click();
    ANIME_ID = button.textContent;
}

function addNewFromURL(){
    //get url
    let url = window.location.href;

    //remove domain
    let urlWithoutDomain = url.substr(DOMAIN.length);

    //separate episode and anime
    let index = urlWithoutDomain.lastIndexOf("-");

    anime = urlWithoutDomain.substr(0, index);

    let episode = parseInt(urlWithoutDomain.substr(index+1));
    let nextLink = anime+"-"+(episode+1); 

    anime = anime.replaceAll("-", " ");

    //exists?
    deleteIfExists(anime);

    //add new
    addNew((ANIME_ID ?? ""), anime, episode, urlWithoutDomain, nextLink);


}