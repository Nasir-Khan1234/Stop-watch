function searchWeather(){
   let getInp = document.getElementById('inp')
   let getDiv = document.getElementById('show')

    fetch(`https:api.openweathermap.org/data/2.5/weather?q=${getInp.value}&units=metric&appid=c9e364586184a0ac705650c06f867d06`)
    .then((data) =>{
        return data.json()
    })
    .then((value)=>{
        getDiv.innerHTML = `<div class="card text-center">
  <div class="card-header">
    Weather Data Collection
  </div>
  <div class="card-body">
    <h5 class="card-title">${getInp.value}</h5>
    <p class="card-text">Temperature : ${value.main.temp}</p>
    <p class="card-text">Humidity : ${value.main.humidity}</p>
    <p class="card-text">Feels Like : ${value.main.feels_like}</p>
</div>`
    })
    .catch((err)=>{
        console.log(err)
    })
}