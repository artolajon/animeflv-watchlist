//get url
let url = window.location.href;

//remove domain
const domain = "https://www3.animeflv.net/ver/"
let urlWithoutDomain = url.substr(domain.length);

//separate episode and anime
let index = urlWithoutDomain.lastIndexOf("-");

anime = urlWithoutDomain.substr(0, index);

anime = anime.replaceAll("-", " ");


//exists?
deleteIfExists(anime);
    
//add new
addNew(anime, url);

