import React from 'react';

import Card from './Card';

const List = (props) => {

    return (
        <section className="cards">
            {props.pokemons
            .filter(pokemon => pokemon.name.includes(props.filter.toLowerCase()))
            .map(filteredPokemon => {
                return (
                    <Card key={filteredPokemon.name} pokemon={ filteredPokemon } />
                );
            })}
        </section>
    )
}

export default List;