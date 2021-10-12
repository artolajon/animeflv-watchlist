const LOCALSTORAGE_KEY="ANIME_LIST";

function getData(){
    let value = localStorage.getItem(LOCALSTORAGE_KEY);
    return JSON.parse(value);
}

function saveData(list){
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(list));
}

function addNew(name, link, nextLink){
    if (name && link){
        let animeList = getData();
        animeList.unshift({
            name: name,
            link: link,
            nextLink: nextLink
        });
        saveData(animeList);
        showRow();
    }
}

function deleteIfExists(name){
    let animeList = getData();
    let index = animeList.findIndex(c=> c.name == name);
    if (index>=0){
        removeFromList(index);
    }
}

function removeFromList(i){
    let animeList = getData();
    
    animeList.splice(i, 1);
    saveData(animeList);
    showRow();
}