import React from 'react';
import './searchbar.css';

import instaLogo from '../../img/instaLogo.png';
import SearchInput from './SearchInput';


const SearchBar = props => {
    return (
        <div className="topbar">
            <div className="barcontainer">
                <i className="fab fa-instagram" />
                <img src={instaLogo} alt="Instagram Logo"/>
                
                <span className="searchinput"><i className="fas fa-search" /> <SearchInput /></span>
                
                <i className="far fa-heart" />
                <i className="far fa-compass" />
                <i className="far fa-user"  />
            </div>
        </div>
    )
}

export default SearchBar;