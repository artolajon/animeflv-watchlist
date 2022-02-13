


function createOptions(index, nextEpisodeLink, episode){
    let nextButton = createNextButton(nextEpisodeLink, episode);
    let deleteButton = createDeleteButton(index);
    
    const ul = document.createElement("ul");
    ul.append(nextButton);
    ul.append(deleteButton);
    return ul;
}


function createNextButton(nextEpisodeLink, episode){
    let a = document.createElement("a");
    a.href = DOMAIN + nextEpisodeLink;
    a.textContent = translate('next')+' '+ (episode+1) + ' =>';
    
    let li = document.createElement("li");
    li.append(a);
    return li;
}

function createDeleteButton(index){
    let a = document.createElement("a");
    a.textContent = translate('delete');

    let li = document.createElement("li");
    li.onclick = () => { removeFromList(index)};
    li.append(a);
    return li;
}

function createTranslationsOptions(){
    const ul = document.createElement("ul");
    
    Object.keys(languages).forEach(lang=>{
        
        ul.append(createLangButton(lang));
    })
    return ul;
}

function createLangButton(lang){
    let a = document.createElement("a");
    a.textContent = lang;

    let li = document.createElement("li");
    li.onclick = () => { changeLanguage(lang); location.reload()};
    li.append(a);
    return li;
}

function createTranslationsButton(){
    let img = document.createElement("img");
    img.src = chrome.extension.getURL("/images/translate.png");

    let a = document.createElement("a");
    a.append(img);

    let opciones = createTranslationsOptions();

    let li = document.createElement("li");
    li.id = "translate-button";
    li.classList.add("menu-button");
    li.append(a);
    li.append(opciones);

    return li;
}

function createUserOptions(users){
    const ul = document.createElement("ul");
    

    users.forEach(user=>{
        
        ul.append(createUserButton(user));
    })

    ul.append(createAddUserButton());
    ul.append(deleteActualUserButton());
    return ul;
}

function createUserButton(user){
    let a = document.createElement("a");
    a.textContent = user;

    let li = document.createElement("li");
    li.onclick = () => { changeUser(user); location.reload()};
    li.append(a);
    return li;
}

function createAddUserButton(){
    let a = document.createElement("a");
    a.textContent = translate('addUser');;

    let li = document.createElement("li");
    li.onclick = () => { addUser(); location.reload()};
    li.append(a);
    return li;
}

function deleteActualUserButton(){
    let a = document.createElement("a");
    a.textContent = translate('delete');;

    let li = document.createElement("li");
    li.onclick = () => { deleteUser(); location.reload()};
    li.append(a);
    return li;
}

function createUsersButton(users){
    let span = document.createElement("span");
    span.textContent = getActualUser();
    span.id = ACTUAL_USER_ID;

    let img = document.createElement("img");
    img.src = chrome.extension.getURL("/images/user.png");

    let a = document.createElement("a");
    a.append(span);
    a.append(img);

    let opciones = createUserOptions(users);

    let li = document.createElement("li");
    li.id = "user-button";
    li.classList.add("menu-button");
    li.append(a);
    li.append(opciones);

    return li;
}

function createRow(animeList, userList){
    

    const ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent =translate('lastViewed');
    li.classList.add("normal");
    ul.append(li);

    animeList.forEach((anime, index) => {

        let a = document.createElement("a");
        a.href = DOMAIN + anime.link;
        a.textContent = `${anime.name} - ${anime.episode}`;

        let options = createOptions(index, anime.nextLink, anime.episode);

        let li = document.createElement("li");
        li.append(a);
        li.append(options);

        ul.append(li);
    });

    let userLi = createUsersButton(userList);
    ul.append(userLi);
    
    let translationsLi = createTranslationsButton();
    ul.append(translationsLi);

    const nav = document.createElement("nav");
    nav.id=HTML_NAV_ID;
    nav.append(ul);

    return nav;
} 

function addRowToBody(row){
    document.body.prepend(row);
}

function showRow(){
    resetNav();
    let animeList = getAnimeData();
    let userList = getUserData();
    let row = createRow(animeList, userList);
    addRowToBody(row);
}

function resetNav(){
    let nav = document.getElementById(HTML_NAV_ID);
    if (nav) nav.remove();
}




showRow();

