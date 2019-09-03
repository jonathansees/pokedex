import React from 'react';

import MagnifyingGlass from "../assets/svg/MagnifyingGlass";

const SearchBar = (props) => {
    let filterPokemon = (event) => {
        props.filterPokemon(event.target.value.trim())
    }

    return (
        <form className="search">
            <input 
                type="text" 
                className="search__input" 
                placeholder="Search Pokemon"
                value={props.filterString}
                onChange={(event) => filterPokemon(event)} />
            <button className="search__button">
                <MagnifyingGlass className="search__icon" />
            </button>
        </form>
    )
}

export default SearchBar;