   
//const fetch = require('node-fetch');

const apiKey = '5d7afbcf71f0e98f4ef2768311db608e';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}&units=metric`,{
    method: 'GET',
    headers: {}
})
.then(response => response.json())
.then(data => {
    console.log(data); // Log the weather data
})
.catch(err => {
    console.error(err);
});
