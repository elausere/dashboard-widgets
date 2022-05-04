/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "925e70d7728a3441c1361eb78aa51c52";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;



  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`;

  fetch(url)
  .then( response => response.json() )
  .then( data => {
  
    // Check-check: Is data good? 
    console.log( data );
    
    // Get Container for Weather   
    const weatherContainer = document.querySelector('.weather');
    
    // Template to output
    const template = `
      <data value="${data.name}" class="city">${data.name}</data>
      <data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data>
      <img src="weather_icons/animated/cloudy-day-1.svg" alt="Placeholder">
      <data value="${data.weather[0].description}"class="desc">${data.weather[0].description}</data>

    `;
    
    // Insert dynamic template to container
    weatherContainer.insertAdjacentHTML("afterbegin", template);
    })

    


  msg.textContent = "";
  form.reset();
  input.focus();
});