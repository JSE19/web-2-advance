const API_KEY = "209e206cb2290c2cb9a11ae663495785";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(response =>{
        if(!response.ok){
            return Promise.reject("City Not Found, Please Try Another City")
        }
        return response.json();
    })
    .then(data =>{
        document.querySelector(".weather-card").classList.remove("hidden");
        document.getElementById("errorMsg").classList.add("hidden");

        document.getElementById("cityName").textContent= `${data.name}, ${data.sys.country}`;
        document.getElementById("dateTime").textContent= new Date().toLocaleString();
        document.getElementById("temperature").textContent=`${data.main.temp} °C`;
        document.getElementById("description").textContent= data.weather[0].description;
        document.getElementById("humidity").textContent= data.main.humidity
        document.getElementById("wind").textContent= (data.wind.speed * 3.6).toFixed(1)
        document.getElementById("weatherIcon").src= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


    })
    .catch(error =>{
        document.querySelector(".weather-card").classList.add("hidden");
        document.getElementById("errorMsg").classList.remove("hidden");
        console.error("Error: ", error);
    })

}

searchBtn.addEventListener("click", () =>{
    let city = cityInput.value.trim();
    if(city){
        getWeather(city)
    }else{
        alert("Enter a City Name")
    }
})
