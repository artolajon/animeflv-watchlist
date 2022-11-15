var languages = {
    EUS: "EUS",
    ESP: "ESP",
    ENG: "ENG"
}

var CURRENT_LANGUAGE = localStorage.getItem(LOCALSTORAGE_LANG_KEY);

if (!CURRENT_LANGUAGE){
    CURRENT_LANGUAGE = languages.EUS;
}

function changeLanguage(newLang){
    CURRENT_LANGUAGE = newLang;

    localStorage.setItem(LOCALSTORAGE_LANG_KEY, newLang);
}

const translations = {
    "EUS":{
        next: 'Hurrena',
        delete: 'Borrau',
        lastViewed: 'Atzena ikusittekuk',
        addUser: 'Berrixe',
        name: 'Izena',
        addnew: 'Gehitu'
    },
    "ESP":{
        next: 'Proximo',
        delete: 'Eliminar',
        lastViewed: 'Visto por última vez',
        addUser: 'Nuevo',
        name: 'Nombre',
        addnew: 'Añadir'
    },
    "ENG":{
        next: 'Next',
        delete: 'Delete',
        lastViewed: 'Last viewed',
        addUser: 'New',
        name: 'Name',
        addnew: 'Add'
    },
}

function translate(key){
    return translations[CURRENT_LANGUAGE][key];
}