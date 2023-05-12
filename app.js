var input = document.querySelector("#cityinpt");
apik = "3045dd712ffe6e702e3245525ac7fa38";

function convertion(val) {
  return (val - 273).toFixed(2);
}

var btn = document.querySelector("#add");

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())

    .then((data) => {
      document.getElementById(
        "name"
      ).innerHTML = `Weather of <span>${data.name}<span>`;
      document.getElementById(
        "temp"
      ).innerHTML = `Temperature: <span>${convertion(data.main.temp)} C</span>`;
      document.getElementById(
        "desc"
      ).innerHTML = `Sky Conditions: <span>${data.weather[0].description}<span>`;
      document.getElementById(
        "wind"
      ).innerHTML = `Wind Speed: <span>${data.wind.speed} km/h<span>`;
      document.getElementById(
        "hmdty"
      ).innerHTML = `Humidity: <span>${data.main.humidity}</span>`;
    })

    .catch((err) => alert("You entered Wrong city name"));
});
