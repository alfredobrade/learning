console.log("hello")

const API_key = 'live_XRF86ZUtutf6TJhQXSv0zmS9TcRQkUroMjssXChOVxqZRFPHXCW0QAi6NsnVUuqt';
const API_key_query_param= 'api_key=live_XRF86ZUtutf6TJhQXSv0zmS9TcRQkUroMjssXChOVxqZRFPHXCW0QAi6NsnVUuqt';

const API_URL = 'https://api.thecatapi.com/v1';


// fetch(API_URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.getElementById('img1');
        
//         img.src = data[0].url;

//     });

async function loadRandomMichis() {
    const res = await fetch(`${API_URL}/images/search?limit=2`)
    const data = await res.json()
    
    const img1 = document.getElementById('img1');
    img1.src = data[0].url;
    
    const img2 = document.getElementById('img2');
    img2.src = data[1].url;
};

async function loadFavouritesMichis() {
    const res = await fetch(`${API_URL}/favourites?limit=2&${API_key_query_param}`)
    const data = await res.json()
    
    const img1 = document.getElementById('img1');
    img1.src = data[0].url;
    
    const img2 = document.getElementById('img2');
    img2.src = data[1].url;
};


loadRandomMichis();
loadFavouritesMichis();