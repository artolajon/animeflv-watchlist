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
        lastViewed: 'Atzena ikusittekuk'
    },
    "ESP":{
        next: 'Proximo',
        delete: 'Eliminar',
        lastViewed: 'Visto por última vez'
    },
    "ENG":{
        next: 'Next',
        delete: 'Delete',
        lastViewed: 'Last viewed'
    },
}

function translate(key){
    return translations[CURRENT_LANGUAGE][key];
}