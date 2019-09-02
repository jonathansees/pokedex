import React, { Component } from 'react';
import Card from './Card'

class List extends Component {
    
    renderCards() {
        return (
            this.props.pokemons
            .map(pokemon => {
                return (
                    <Card key={pokemon.name} pokemon={ pokemon } />
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