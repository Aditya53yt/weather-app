const form = document.querySelector("form");
const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const img = document.querySelector("img");
const p = document.querySelector("p");

const fetchWeather= async (e)=> {
    e.preventDefault(); 

 const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=41fcdcbd80174532aba54050232211&q=${input.value}&aqi=yes`)
 const data= await response.json();
     console.log(data)

     h1.innerText = data.current.temp_c + "°C";
     h2.innerText = data.location.name;
     p.innerText= data.current.condition.text;
     img.setAttribute("src",data.current.condition.icon)
     form.reset()
    }

form.addEventListener("submit",fetchWeather)