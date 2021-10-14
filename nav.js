


function createOpcions(index, nextEpisodeLink, episode){
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
    a.textContent = `Hurrena ${episode+1} =>`;
    
    let li = document.createElement("li");
    li.append(a);
    return li;
}

function createDeleteButton(index){
    let a = document.createElement("a");
    a.textContent = "Borrau";

    let li = document.createElement("li");
    li.onclick = () => { removeFromList(index)};
    li.append(a);
    return li;
}

function createRow(animeList){
    

    const ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent ="Atzena ikusittekuk:";
    li.classList.add("normal");
    ul.append(li);

    animeList.forEach((anime, index) => {

        let a = document.createElement("a");
        a.href = DOMAIN + anime.link;
        a.textContent = `${anime.name} - ${anime.episode}`;

        let opciones = createOpcions(index, anime.nextLink, episode);

        let li = document.createElement("li");
        li.append(a);
        li.append(opciones);

        ul.append(li);
    });


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

