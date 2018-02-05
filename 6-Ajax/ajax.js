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
.then((data) => cities.push(...data))
.catch((err) => console.log('Falha! Erro:' + err));



function findCities (wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayCities (){
  const matchArray = findCities(this.value, cities)
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    stateName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    return `<li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${numberWithCommas(place.population)}</span>
            </li>`;
  }).join('');
  suggestions.innerHTML = html;  
}

const inputSearch = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

inputSearch.addEventListener('change', displayCities);
inputSearch.addEventListener('keyup', displayCities);


