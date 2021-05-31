import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import SearchForm from './SearchForm';

const Header = ({...props}) => {
    return(
        <div className="header">
            <div className="nav">
                <div className="logo"> 
                    <NavLink to="/"> Movieteque </NavLink>
                </div>
                    { props.children }
            </div>
        </div>
    )
}
export default Header;