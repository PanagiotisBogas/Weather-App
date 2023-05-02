function pageLoadForecast(){
    //Variable declaration
    const loc = document.querySelector('.location');
    const condition = document.querySelector('.condition');
    const deegrees = document.querySelector('.deegrees');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const feelsLike = document.querySelector('.feels-like');
    const localTime = document.querySelector('.local-time');
    const conditionIcon = document.querySelector('.condition-icon');
    

    fetch('https://api.weatherapi.com/v1/forecast.json?key=e2fa988300e14c9ab6e144446230904%20&q=Thessaloniki&days=1&aqi=no&alerts=no', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        //Load the current forecast in Thessaloniki
        console.log(response);
        loc.innerHTML = ` ${response.location.name} | ${response.current.temp_c}&#8451;`;
        condition.innerHTML = response.current.condition.text;
        conditionIcon.src = `${response.current.condition.icon}`;
        wind.innerHTML = `Wind: ${response.current.wind_kph} kph`;
        humidity.innerHTML = `Humidity: ${response.current.humidity}%`;
        feelsLike.innerHTML = `Feels like: ${response.current.feelslike_c}&#8451;`;
    });
}

export default pageLoadForecast;