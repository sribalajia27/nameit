import React from 'react'
import './../SearchBar/SearchBar.css'

const SearchBar = ({onInputChange}) => {


    return (
        <div className="search-container">
            <input onChange={(event) => onInputChange(event.target.value)}  type="text" placeholder="Search for names" className="search-bar"/>
        </div>
    )
}

export default SearchBar
