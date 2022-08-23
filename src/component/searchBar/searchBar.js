import React from 'react';
import './searchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, changeInput }) => (

  <div className='searchBar-wrap'>
    <SearchIcon className="searchBar-icon" fontSize="large" />
    <input
      type='text'
      placeholder='Search for Events arround you'
      value={value}
      onChange={changeInput}
    />
  </div>
)

export default SearchBar;