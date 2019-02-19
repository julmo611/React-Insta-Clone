import React from 'react';
import instaLogo from '../../img/instaLogo.png';
import SearchInput from './SearchInput';


const SearchBar = props => {
    return (
        <div>
            <i className="fab fa-instagram" />
            <img src={instaLogo} alt="Instagram Logo"/>
            <SearchInput />
            <i className="far fa-heart" />
            <i className="far fa-compass" />
            <i className="far fa-user"  />

        </div>
    )
}

export default SearchBar;