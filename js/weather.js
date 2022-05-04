// API key. Replace with your API key
const APIKEY = '925e70d7728a3441c1361eb78aa51c52';
// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // Template to output
  const template = `
    <h1>Weather</h1>
    <data value="${data.name}" class="city">${data.name}</data>
    <data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data>
    <data value="${data.weather[0].description}"class="desc">${data.weather[0].description}</data>
    <img src="weather_icons/animated/cloudy-day-1.svg" alt="Placeholder">
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});
