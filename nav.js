


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
    li.append(a);
    li.append(opciones);

    return li;
}

function createRow(animeList){
    

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
    let animeList = getData();
    let row = createRow(animeList);
    addRowToBody(row);
}

function resetNav(){
    let nav = document.getElementById(HTML_NAV_ID);
    if (nav) nav.remove();
}




showRow();

