import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { pokemon } = props

    if(!pokemon) {
        return null;
    }

    return (
        <Link to={`/details/${pokemon.id}`} className="card">
            <img src={ pokemon.sprites.front_default } className="card__img" alt={ pokemon.name } />
            <div className="card__number"><p>{ pokemon.id.toString().padStart(3, '0') }</p></div>
            <h5 className="card__name">{ pokemon.name }</h5>
        </Link>
    )
}

export default Card;