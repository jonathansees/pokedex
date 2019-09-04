import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { pokemon } = props

    if(!pokemon) {
        return null;
    }

    return (
        <Link to={`/details/${pokemon.id}`} className="card">
            <img src={ 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png' } className="card__img" alt={ pokemon.name } />
            <h5 className="card__name">{ pokemon.name }</h5>
        </Link>
    )
}

export default Card;