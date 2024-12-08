
window.addEventListener('DOMContentLoaded', navigator, false);
// window.addEventListener('load', navigator, false); // load works equals than DOMContenLoaded

window.addEventListener('hashchange', navigator, false);


function navigator() {
    console.log({ location });

    if (location.hash.startsWith('#trends')){
        console.log('TRENDS!');

    } else if (location.hash.startsWith('#search=')){
        console.log('search!');


    } else if (location.hash.startsWith('#movie=')){
        console.log('movie!');
    }
    else if (location.hash.startsWith('#category=')){
        console.log('category!');
    } else {
        console.log('Home!')
    }
        

    location.hash
}