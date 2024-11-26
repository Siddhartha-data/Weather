let input = document.querySelector('#get');
let  button = document.querySelector('#select');
let  icon = document.querySelector('#icon');
let  cal = document.querySelector('#cal');
let  city_name = document.querySelector('#city');
let  humidity = document.querySelector('#humi');
let  speed = document.querySelector('#speed');


const data = async function(search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9d3d7ca8fc96b4e392d890de1a4c78b9&units=metric`)
    let jsonData = await getData.json();
    console.log(jsonData);
    cal.innerHTML =parseInt(jsonData.main.temp);
    city_name.innerHTML = jsonData.name;
    speed.innerHTML = jsonData.wind.speed + "Km/h";
    humidity.innerHTML = jsonData.main.humidity + "%"
    input.value = "";
    
    let type = jsonData.weatherArray[0].main;
    icon.src = "suny.png";
    
    
    
    
}

function action() {
    let search = input.value;
    data(search);
}

action();