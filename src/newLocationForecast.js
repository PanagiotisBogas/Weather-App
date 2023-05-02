function newloc(){
        //Variable declaration
        const searchForm = document.querySelector('.search-form');
        let locationInput = document.querySelector('.location-input');
        const loc = document.querySelector('.location');
        const condition = document.querySelector('.condition');
        const wind = document.querySelector('.wind');
        const humidity = document.querySelector('.humidity');
        const feelsLike = document.querySelector('.feels-like');
        const conditionIcon = document.querySelector('.condition-icon');
        const localTime = document.querySelector('.local-time');

        //Searchbar function and new data fetching
        searchForm.addEventListener('submit', function(e){
        e.preventDefault();

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=e2fa988300e14c9ab6e144446230904%20&q=${locationInput.value}&days=1&aqi=no&alerts=no`, {mode: 'cors'})

        .then(function(response) {
          return response.json();
        })

        .then(function(response) {
            //Load the current forecast in Thessaloniki
            console.log(response);
            loc.innerHTML = ` ${response.location.name} | ${response.current.temp_c}&#8451;`;
            condition.innerHTML = `${response.current.condition.text}`;
            conditionIcon.src = `${response.current.condition.icon}`;
            wind.innerHTML = `Wind: ${response.current.wind_kph} kph`;
            humidity.innerHTML = `Humidity: ${response.current.humidity}%`;
            feelsLike.innerHTML = `Feels like: ${response.current.feelslike_c}&#8451;`;
        });
    });
}

export default newloc;