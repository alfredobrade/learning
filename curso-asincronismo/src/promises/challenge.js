// we must install node fetch for working with fetch
//then we have to add the module in package.json
import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then( () => {
//         console.log('hola')
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/Categories/${product.category.id}`);
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    }).catch( error => console.log(error));