import React from 'react';
import './Footer.css';

const Footer = () => (
    <div className="footer">
        <a href="https://www.themoviedb.org/documentation/api">
            <img className="tmdbLogo" alt="tmdb" src={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg`}/>
        </a>
        <a className="github" href="https://github.com/gjorgjievc/tmdb-redux">GitHub</a>
    </div>
)

export default Footer;