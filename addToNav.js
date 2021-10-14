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

let tenMinutes = 1000 * 60 * 5;

setTimeout(()=>{
    //exists?
    deleteIfExists(anime);
        
    //add new
    addNew(anime, episode, urlWithoutDomain, nextLink);
}, tenMinutes);


