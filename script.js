const apiKey = `7303dd9ded34a7f2e2c0885d27f0ecf4`;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&units=metric";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkwhether(city){
    const response = await fetch (apiUrl + city + `&appiid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tamp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}
searchBtn.addEventListener("click", ()=>{
   checkwhether(searchBox.value);
})
