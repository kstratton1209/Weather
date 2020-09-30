
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';
import Input from './Input'




const Weather = (props) => {
    
    return (
        <div className="weather__info">
                {props.city? <p className="weather__key">City: <span className="weather__value">{props.city}</span></p>: null}
                {props.temp? <p className="weather__key">Temperature: <span className="weather__value">{props.temp+'°F'}</span></p>: null}
                {props.humidity? <p className="weather__key">Humidity: <span className="weather__value">{props.humidity+'%'}</span></p>: null}
                {props.overview? <p className="weather__key">Description: <span className="weather__value">{props.overview}</span></p>: null}
                {props.errorMsg? <p className="weather__key">Error: <span className="weather__error">{props.errorMsg}</span></p>: null}
        </div>
        );

       
    
}

export default Weather;