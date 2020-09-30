import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Input from './Components/Input'
import Weather from './Components/Weather'
import ParticleComponent from "./Components/ParticleComponent";
import { Router} from '@reach/router';



function App() {
  
  var [load,isLoading] = useState(false);
  var [weather,setWeather] = useState({
    city:"",
    temp:"",
    humidity:"",
    overview:"", 
    description:"", 
    errorMsg:undefined
 });



 const getWeather = async(newZip) => {
  if(newZip === ''){
    setWeather({errorMsg:"No zip code value entered"});
   }
  else if(isNaN(newZip) === true){
    setWeather({errorMsg:"Zip code can only contain numeric values"}); 
  }
  else{     
    isLoading(load=true);
    try {
      let apiCall = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=${newZip},us&appid=bf25aeca4b48b5e8bf309dc0e6662151`);
      let data = await apiCall.json(); 
      setWeather({
        city:data.name,
        temp:parseInt((data.main.temp-273.15)*(9/5)+32),
        humidity:data.main.humidity,
        overview:data.weather[0].main,
        description:data.weather[0].description,
        }); 
    }
    catch(e) {
      setWeather({errorMsg:'Invalid zip code'})
    }
    isLoading(load=false)  
    
    }
}    



  return (
    <div class="container">
        <ParticleComponent />
          <div class="row">
          <div class="col mt-3">
              <h1>Weather in your area</h1>
              <Input getWeather={getWeather}/>
              <Weather city={weather.city} humidity={weather.humidity} overview={weather.overview} temp={weather.temp} description={weather.description} errorMsg={weather.errorMsg}/>
              </div>
          </div>
    
  </div>
  );
}

export default App;
