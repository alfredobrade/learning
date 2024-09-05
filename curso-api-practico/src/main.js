
// for using axios
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        //'x-api-key': API_KEY // but the api require the key in query parameters
    },
    params: {
        'api_key': API_KEY,
        'language': LANGUAGE[2]
    },
});


console.log('Hello World!');

async function getTrendingMoviesPreview(){
    const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();
    const movies = data.results;

    // console.log({data, movies});
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute(
            'src', 
            'https://image.tmdb.org/t/p/w300' + movie.poster_path,
            // 'https://image.tmbd.org/t/p/w300' + movie.backdrop_path,
        );

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);

    });
}
//################    
async function getCategoriesPreview(){
    const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE[2]}`);
    const data = await res.json();
    const categories = data.genres;
    
    // console.log({data, movies});
    categories.forEach(category => {
        console.log(category.name);
        const categoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', `id${category.id}`);
        const categoryTitleText = document.createTextNode(category.name);
        

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesContainer.appendChild(categoryContainer);

    });
}   
async function getCategoriesPreview_withAxios(){
    const { data } = await api('/genre/movie/list');
    const categories = data.genres;
    
    // console.log({data, movies});
    categories.forEach(category => {
        console.log(category.name);
        const categoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', `id${category.id}`);
        const categoryTitleText = document.createTextNode(category.name);
        

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesContainer.appendChild(categoryContainer);

    });
}
//############################################

getTrendingMoviesPreview();
// getCategoriesPreview();
getCategoriesPreview_withAxios();

