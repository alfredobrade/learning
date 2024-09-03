

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
    
async function getCategoriesPreview(){
    const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE[2]}`);
    const data = await res.json();
    const movies = data.results;

    // console.log({data, movies});
    movies.forEach(movie => {
        const categoriesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        const categoryContainer = document.createElement('div');
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

getTrendingMoviesPreview();