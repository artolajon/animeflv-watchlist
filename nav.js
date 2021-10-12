const LOCALSTORAGE_KEY="ANIME_LIST";
const NAV_ID = "primary_nav_wrap";



function getData(){
    let value = localStorage.getItem(LOCALSTORAGE_KEY);
    return JSON.parse(value);
}

function saveData(list){
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(list));
}

function removeFromList(i){
    let animeList = getData();
    animeList.splice(i, 1);
    saveData(animeList);
    showRow();
}


function createOpcions(index){

    let li = document.createElement("li");
    li.onclick = () => {removeFromList(index)};
    li.textContent ="Borrau";
    const ul = document.createElement("ul");
    ul.append(li);
    return ul;
}

function createRow(animeList){
    

    const ul = document.createElement("ul");

    let li = document.createElement("li");
    li.onclick = () => {addNew()};
    li.textContent ="Berrixe";
    li.classList.add("primary");

    ul.append(li);

    animeList.forEach((anime, index) => {

        let a = document.createElement("a");
        a.href = anime.link;
        a.textContent = anime.name;

        let opciones = createOpcions(index);

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


function addNew(){
    let name = window.prompt("Anime izena?");
    let link = window.prompt("URL?", window.location.href);
    if (name && link){
        let animeList = getData();
        animeList.push({name, link});
        saveData(animeList);
        showRow();
    }

   
}


showRow();

