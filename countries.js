let loadCountries = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayContries(data))
}

const displayContries = (countries) => {
  let country = document.getElementById('country-list');
  console.log(countries);
  countries.forEach(countries => {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML = `
    <h1> Country: ${countries.name.common}</h1><br>
    <h2> Capital: ${countries.capital}</h2><br>
    <h2> Official Name: ${countries.name.official}</h2><br>
    <h2> Continent Name: ${countries.continents}</h2><br>
    <img src="${countries.flags.png}"><br>
    <button onclick="loadCountryDetails()">Show Details</button>
    `
    country.appendChild(countryDiv);
  });
}

const loadCountryDetails = () => {
  console.log('button clicked')

}

loadCountries();