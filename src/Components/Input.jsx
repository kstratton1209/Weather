import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Weather from './Weather'




const Input = (props) => {
    

    const [zipCode, setZipCode] = useState(); 
       


    const handleSearch = (e) => {
        e.preventDefault();
        var newZip = parseInt(zipCode)
        props.getWeather(newZip)
            
    }

    
    return (

        <div className="input">
            <div className="container mt-3" style= {{display: "flex"}}>
                <div style= {{display: "flex", marginRight: 10, marginLeft: 10}}>
                    <label for="exampleFormControlInput1" style={{marginRight: 10}} >Please enter a zip code</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" name="zipCode" onChange={e =>setZipCode(e.target.value)} />
                </div>  
            <button onClick={handleSearch} className = 'btn btn-primary'>Search</button>
            </div>
        </div>
    )
}

export default Input;