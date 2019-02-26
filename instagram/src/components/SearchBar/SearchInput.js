import React from 'react';


const SearchInput = props => {
  console.log(props);
    return (
        <>
          <input type="text" 
          placeholder=" Search"
          value={props.value}
          onChange={props.updateSearch} 
          
          />  
        </>
    )
}

export default SearchInput;