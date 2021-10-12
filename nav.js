const NAV_ID = "primary_nav_wrap";


function createOpcions(index, nextEpisodeLink){
    let nextButton = createNextButton(nextEpisodeLink);
    let deleteButton = createDeleteButton(index);
    
    const ul = document.createElement("ul");
    ul.append(nextButton);
    ul.append(deleteButton);
    return ul;
}


function createNextButton(nextEpisodeLink){
    let a = document.createElement("a");
    a.href = nextEpisodeLink;
    a.textContent = "Hurrena";
    
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
        a.href = anime.link;
        a.textContent = anime.name;

        let opciones = createOpcions(index, anime.nextLink);

        let li = document.createElement("li");
        li.append(a);
        li.append(opciones);

        ul.append(li);
    });


    const nav = document.createElement("nav");
    nav.id=NAV_ID;
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
    let nav = document.getElementById(NAV_ID);
    if (nav) nav.remove();
}




showRow();

