import React from 'react';
import styled from 'styled-components';

import './searchbar.css';

import instaLogo from '../../img/instaLogo.png';
import SearchInput from './SearchInput';



const Topbar =  styled.div `
    width: 100%;
    border: 1px solid #efefef;
    font-size: 26px;
    position: fixed;
    background-color: #ffffff;
    padding: 10px;
    z-index: 9999;
  `
const Barcontainer = styled.div`
        width: 970px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;

    & img {
        width: 103px;
        height: 29px;
        padding-left: 15px; 
        border-left: 1px solid #000;
    }
`

const Searchinputclass = styled.span` 
    margin-top: -8px;
    margin: 0 auto;
    background: #fafafa;
    border: solid 1px #dbdbdb;
    width: 200px;
    border-radius: 3px;
    color: #999;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    left: 0;
    padding: 7px;
    text-align: center;
    top: 0;
    z-index: 2;

    & input {
        border: none;
        text-align: center;
        background: #fafafa;

        &:focus {
            text-align: left;
            border: none;
            outline: none;
        }
    }
`





const SearchBar = props => {
    return (
        <Topbar>
            <Barcontainer>
                <i className="fab fa-instagram" />
                <img src={instaLogo} alt="Instagram Logo"/>
                
                <Searchinputclass><i className="fas fa-search" /> <SearchInput /> </Searchinputclass>
                
                <i className="far fa-heart" />
                <i className="far fa-compass" />
                <i className="far fa-user"  />
            </Barcontainer>
        </Topbar>
    )
}

export default SearchBar;