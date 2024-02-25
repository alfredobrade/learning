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


    if (res.status === 200) {
    console.log('random')

        const img1 = document.getElementById('img1');
        const btn1 = document.getElementById('btn1');
        img1.src = data[0].url;
        btn1.onclick = () => AddFavouriteMichi(data[0].id);

        const img2 = document.getElementById('img2');
        const btn2 = document.getElementById('btn2');
        img2.src = data[1].url;
        btn2.onclick = () => AddFavouriteMichi(data[1].id);

        //reload();

    } else {
        spanError.innerHTML = "random - hubo un error" + res.status + data.message;
    }
};

async function loadFavouritesMichis() {
    const res = await fetch(`${API_URL}/favourites?${API_key_query_param}`)
    const data = await res.json()
    

    if (res.status === 200) {
        console.log(data)
        console.log('favourites');

        const section = document.getElementById('favoriteMichis');
        section.innerHTML = "";
        const h2 = document.createElement("h2");
        const h2Text = document.createTextNode("Aleatorios!");
        h2.appendChild(h2Text);
        section.appendChild(h2);

        data.forEach(item => {

            
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar Foto');

            btn.appendChild(btnText);
            if (item.image.url != null) img.src = item.image.url;
            img.width = 150;
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);

            btn.onclick = () => deleteMichi(item.id)

            //console.log(item.image.url);
            //reload();

        });
    } else {
        spanError.innerHTML = "favourites - hubo un error" + res.status + data.message;
    }
};

async function AddFavouriteMichi(imageId) {

    var rawBody = JSON.stringify({
        "image_id": `${imageId}`,
        //"sub_id": "user-123"
    });

    console.log('newFavourite')

    const newFavourite = await fetch(
        `${API_URL}/favourites`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${API_key}`
            },
            body: rawBody
        }
    )

    const data = await newFavourite.json();
    if (newFavourite.status === 200) {
        console.log(newFavourite);
        reload();
    } else {
        spanError.innerHTML = "newFavourite - hubo un error" + data.status;
    }



}

async function deleteMichi(id) {
    const res = await fetch(
        `${API_URL}/favourites/${id}`,
        {
            method: 'DELETE',
            headers: {
                'x-api-key': `${API_key}`
            }
        }
    )
    const data = await res.json();
    if (res.status === 200) {
        console.log(res);
        console.log("michi eliminadi");
        //reload();
        loadFavouritesMichis();
    } else {
        spanError.innerHTML = "newFavourite - hubo un error" + data.status;
    }

}

function reload() {
    loadRandomMichis();
    loadFavouritesMichis();
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





