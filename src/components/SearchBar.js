import React, { Component } from 'react';

import MagnifyingGlass from "../assets/svg/MagnifyingGlass";

class SearchBar extends Component {
    filterPokemon = (event) => {
        this.props.filterPokemon(event.target.value.trim())
    }

    render() {
        return (
            <form className="search">
                <input 
                    type="text" 
                    className="search__input" 
                    placeholder="Search Pokemon"
                    value={this.props.filterString}
                    onChange={(event) => this.filterPokemon(event)} />
                <button className="search__button">
                    <MagnifyingGlass className="search__icon" />
                </button>
            </form>
        )
    }
}

export default SearchBar;