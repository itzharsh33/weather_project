
let a="bhadohi";
let p = fetch(`http://api.weatherapi.com/v1/forecast.json?key=db5da5e6b5c04a6fb30122741251903&q=${a}&days=5&aqi=no&alerts=no`);

const block=()=>{
    p.then((response)=>{
        return response.json();
        }).then((value)=>{
        console.log(value);
        document.getElementsByClassName("icon")[0].style.backgroundImage=`url("https:${value.current.condition.icon}")`;     
        document.getElementById("mausam").innerText=value.current.condition.text;
        document.getElementById("temperature").innerText=value.current.temp_c+"°c";
        let options = { weekday: "short", day: "numeric", month: "short" };
        document.getElementById("date").innerText=new Date().toLocaleDateString("en-US", options);
        
        document.getElementById("city").innerText=value.location.name+","
        document.getElementById("country").innerText=value.location.country
        document.getElementsByClassName("humidity_data")[0].innerText=value.current.humidity+"%";
        document.getElementsByClassName("wind_data")[0].innerText=value.current.wind_kph+" kph";
        
        document.getElementsByClassName("cloud1")[0].style.backgroundImage=`url("https:${value.forecast.forecastday[1].day.condition.icon}")`;
        document.getElementById("max_temp1").innerText=value.forecast.forecastday[1].day.maxtemp_c+"°c"
        document.getElementById("min_temp1").innerText=value.forecast.forecastday[1].day.mintemp_c+"°c"
        document.getElementById("day1").innerText=new Date(value.forecast.forecastday[1].date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
        
        
        document.getElementsByClassName("cloud2")[0].style.backgroundImage=`url("https:${value.forecast.forecastday[2].day.condition.icon}")`;
        document.getElementById("max_temp2").innerText=value.forecast.forecastday[2].day.maxtemp_c+"°c"
        document.getElementById("min_temp2").innerText=value.forecast.forecastday[2].day.mintemp_c+"°c"
        document.getElementById("day2").innerText=new Date(value.forecast.forecastday[2].date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
        
        document.getElementsByClassName("cloud3")[0].style.backgroundImage=`url("https:${value.forecast.forecastday[3].day.condition.icon}")`;
        document.getElementById("max_temp3").innerText=value.forecast.forecastday[3].day.maxtemp_c+"°c"
        document.getElementById("min_temp3").innerText=value.forecast.forecastday[3].day.mintemp_c+"°c"
        document.getElementById("day3").innerText=new Date(value.forecast.forecastday[3].date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
        
        document.getElementsByClassName("cloud4")[0].style.backgroundImage=`url("https:${value.forecast.forecastday[4].day.condition.icon}")`;
        document.getElementById("max_temp4").innerText=value.forecast.forecastday[4].day.maxtemp_c+"°c"
        document.getElementById("min_temp4").innerText=value.forecast.forecastday[4].day.mintemp_c+"°c"
        document.getElementById("day4").innerText=new Date(value.forecast.forecastday[4].date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
        
        }).catch((error)=>{
        alert("invalid location!");
        })

    }


const Enter_search=()=>{
let b=document.getElementsByClassName("search")[0].value;
if(b.trim()===""){
return;
}
    
p=fetch(`http://api.weatherapi.com/v1/forecast.json?key=db5da5e6b5c04a6fb30122741251903&q=${b}&days=5&aqi=no&alerts=no`)
block();
}

block();

document.getElementsByClassName("search")[0].addEventListener("keypress",(e)=>{
if(e.key==="Enter"){
e.preventDefault();
Enter_search();
}
})

document.getElementById("logo").addEventListener('click',()=>{
let b=document.getElementsByClassName("search")[0].value;
Enter_search();
})
