
const API = '';

const options = {
    method : 'GET',
    headers : {

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
    } catch {

    }
})();