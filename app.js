var input = document.querySelector('#cityinpt')
apik = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(val)
{
    return (val - 273).toFixed(2)
}

var btn = document.querySelector('#add')

btn.addEventListener('click',function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apik)
    .then(res => res.json())
  
  
    .then(data => 
    {
      var nameval = data['name']
      var desc = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var wndspd = data['wind']['speed']
      var humidity = data['main']['humidity']
      document.getElementById('name').innerHTML=  `Weather of <span>${nameval}<span>`
      document.getElementById('temp').innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`
      document.getElementById('desc').innerHTML = `Sky Conditions: <span>${desc}<span>`
      document.getElementById('wind').innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
      document.getElementById('hmdty').innerHTML = `Humidity: <span>${humidity}</span>`
  
  
    })
  
    .catch(err => alert('You entered Wrong city name'))
})