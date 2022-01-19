
const API_KEY = 'e9fa496f1e83696026482015c054f8b5';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span');
        weather.innerText = `☁️ Today's weather in ${data.name} is ${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;
    });
}
function onGeoError() {

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);