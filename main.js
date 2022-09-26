const fetchWeather = async () => {
    var cityName = document.getElementById('city-name').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=3d050e24bdebddb9013d6fe117601de6`)
    const data = await response.json()
    console.log(data)
    
        
    
        const  city  = data.name;
        // const  icon = data.weather[0].icon;
        const  temp = data.main.temp;
        const humidity = data.main.humidity
        const  wind  = data.wind.speed;

        document.querySelector(".city").innerText = "Weather in " + city;
        // document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "F";
        document.querySelector(".humidity").innerText = "Humidity:   " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed  " + wind + " MPH";

}