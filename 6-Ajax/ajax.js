const URL_TO_FETCH = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// fetch(URL_TO_FETCH, (data) => console.log(data));
// console.log(fetch(URL_TO_FETCH));

// Passando o metodo get e convertendo a resposta para um texto

// fetch(URL_TO_FETCH,{
//   method: 'get'
// })
// .then(function(response){
//   response.text()
//   .then(function(result) {
//     console.log(result);
//   })
// })
// .catch((err) => console.error(err));


//Passando o metodo get e convertendo a resposta para JSON
// fetch(URL_TO_FETCH, {
//   method: 'get'
// })
// .then(function(response){
//   response.json().then((data) => console.log(data));
// })
// .catch((err) => console.error(err));


const cities = [];

// Forma mais enxuta, sem passar o metodo get
fetch(URL_TO_FETCH)
.then((response) => response.json())
.then((data) => cities.push(data))
.catch((err) => console.log('Falha! Erro:' + err));

console.log(cities);