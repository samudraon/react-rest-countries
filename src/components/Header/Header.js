import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to rest Countries</h1>
            <a href="/home">Home</a>
            <a href="/countries">Countries</a>
            <a href="/about">About</a>
        </div>
    );
};

export default Header;