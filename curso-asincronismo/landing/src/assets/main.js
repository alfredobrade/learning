
const API = 'https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCXpC96kqkamtsdTJBoJqnEQ';
const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5c186e8b2fmsh173ab173b574963p1b95ecjsn9fd6530e05c3',
        'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `

        ${videos.videos.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.thumbnails[0].url}" alt="${video.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                       <span aria-hidden="true" class="absolute inset-0"></span>
                       ${video.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        
        `;
        content.innerHTML = view;
        console.log(videos);


    } catch (error){
        console.log(error);
    }
})();