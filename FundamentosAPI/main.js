console.log("hello")

const API_key = 'live_XRF86ZUtutf6TJhQXSv0zmS9TcRQkUroMjssXChOVxqZRFPHXCW0QAi6NsnVUuqt';
const API_key_query_param = 'api_key=live_XRF86ZUtutf6TJhQXSv0zmS9TcRQkUroMjssXChOVxqZRFPHXCW0QAi6NsnVUuqt';

const API_URL = 'https://api.thecatapi.com/v1';

const spanError = document.getElementById('error');


// fetch(API_URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.getElementById('img1');

//         img.src = data[0].url;

//     });

async function loadRandomMichis() {
    const res = await fetch(`${API_URL}/images/search?limit=2`)
    const data = await res.json()
    console.log('random')


    if (res.status === 200) {
        const img1 = document.getElementById('img1');
        img1.src = data[0].url;

        const img2 = document.getElementById('img2');
        img2.src = data[1].url;
    } else {
        spanError.innerHTML = "random - hubo un error" + res.status+data.message;
    }
};

async function loadFavouritesMichis() {
    const res = await fetch(`${API_URL}/favourites?${API_key_query_param}`)
    const data = await res.json()
    console.log('favourites')

    if (res.status === 200) {
        console.log(data)
    } else {
        spanError.innerHTML = "favourites - hubo un error" + res.status+data.message;
    }
};

async function AddFavouriteMichi(imageId) {

    var rawBody = JSON.stringify({
        "image_id": `${imageId}`,
        //"sub_id": "user-123"
    });

    console.log('newFavourite')

    const newFavourite = await fetch(
        `${API_URL}/favourites?${API_key_query_param}`,
        {
            method: 'POST',
            headers: { 'x-api-key': `${API_key}` },
            body: rawBody
        }
    )
    if (newFavourite.status === 200) {
        console.log(newFavourite);
    } else {
        spanError.innerHTML = "newFavourite - hubo un error" + newFavourite.status;
    }



}


loadRandomMichis();
loadFavouritesMichis();

// var eric = {
//     image_id : "id-of-image-to-favourite",
//     sub_id : "user-123"
//     }

//      eric.image_id = "hola";



// var rawBody = JSON.stringify(eric);

// console.log(rawBody);





