const apiKey = "3f5a530b4c81126af976a6379b2e5495";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBOX = document.querySelector(".search input");
const searchBTN = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const res = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await res.json();

  if (res.ok) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./weather-app-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./weather-app-img/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./weather-app-img/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./weather-app-img/images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
  } else {
    alert("City not found. Please try again.");
  }
}

searchBTN.addEventListener("click", () => {
  const city = searchBOX.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});
