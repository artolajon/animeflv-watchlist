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

setTimeout(()=>{
    //exists?
    deleteIfExists(anime);
        
    //add new
    addNew((anime_id ?? 0), anime, episode, urlWithoutDomain, nextLink);
}, TIMEOUT_BEFORE_SAVING);


