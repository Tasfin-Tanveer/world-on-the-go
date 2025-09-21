import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country.name.common);
    const handleVisisted = () =>{

    }
    return (
        <div className='country'>
            <img src={country?.flags?.flags?.png} alt="{country.flags.flags.alt}" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
            country.area.area > 100000 ? '(Big Country)' : '(Small Country)'}</p>
            <button onClick={handleVisisted}>Not Visited</button>
        </div>
    );
};

export default Country;