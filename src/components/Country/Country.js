import React from 'react';
import './Country.css';

const Country = (props) => {
    const { area, region, name,flags } = props.country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;