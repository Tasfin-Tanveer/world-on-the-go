import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited,setVisited] = useState(false);
    // console.log(country.name.common);
    const handleVisited = () =>{
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }
        handleVisitedCountries(country);
    }
    return (
        <div className='country'>
            <img src={country?.flags?.flags?.png} alt="{country.flags.flags.alt}" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
            country.area.area > 100000 ? '(Big Country)' : '(Small Country)'}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => {handleVisitedFlag(country?.flags?.flags?.png) }}>Add Visited Flag</button>
        </div>
    );
};

export default Country;