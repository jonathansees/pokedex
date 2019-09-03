import React, { Component } from 'react';
import Card from './Card'

class List extends Component {
    
    renderCards() {
        return (
            this.props.pokemons
            .filter(pokemon => pokemon.name.includes(this.props.filter.toLowerCase()))
            .map(filteredPokemon => {
                return (
                    <Card key={filteredPokemon.name} pokemon={ filteredPokemon } />
                );
            })
        )
    }

    render() {
        return (
            <section className="cards">
                { this.renderCards() }
            </section>
        )
    }
}

export default List;