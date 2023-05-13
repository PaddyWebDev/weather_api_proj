var input = document.querySelector("#cityinpt");
const apik = "3045dd712ffe6e702e3245525ac7fa38";
const res = document.querySelector("#res");
const img = document.querySelector("#img");
const dsp_res = document.querySelector("#result");

function convertion(val) {
  return (val - 273).toFixed(2);
}

var btn = document.querySelector("#add");

btn.addEventListener("click", function () {
  if (!navigator.onLine) alert("You're not connected to the Internet");
  else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apik}`
    )
      .then((res) => res.json())

      .then((data) => {
        // console.log(Object.keys(data).length);
        if (data.cod === "404") {
          alert("Invalid City Input! Please Enter a valid city Name");
          // console.log(data)
        } else {
          res.style.display = "block";

          var display = ` <h3 class="name" id="name">Weather of <span>${data.name}<span></h3>`;
          img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          display += ` <p>Temperature: <span>${convertion(
            data.main.temp
          )} C</span></p>`;
          display += `<p>Sky Conditions: <span>${data.weather[0].description}<span></p>`;
          display += `<p>Wind Speed: <span>${data.wind.speed} km/h<span></p>`;
          display += `<p>Humidity: <span>${data.main.humidity}%</span></p>`;
          dsp_res.innerHTML = display;
        }
      })

      .catch((err) => console.log(err));
  }
});
