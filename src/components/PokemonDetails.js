import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';

import Card from './Card';

class PokemonDetails extends Component {
    state = {
        locations: [
            "32.734778,-117.152630",
            "32.734196,-117.139709",
            "32.833744,-117.067149",
            "32.819219,-117.029244",
            "32.907707,-116.797917"
        ]
    }

    componentDidMount() {
        this.props.fetchPokemon(this.props.match.params.id)
    }

    render() {
        return this.props.pokemon.name ? (
            <div className="container">
                <div className="details">
                    <div className="information">
                        <Card pokemon={ this.props.pokemon } />
                        
                        <p>Height: {this.props.pokemon.height}</p>
                        <p>Weight: {this.props.pokemon.weight}</p>
                        <p>Type: Fire, Flying</p>
                    </div>
                    <div className="map">
                        
                    </div>
                </div>
            </div>
        ) : null
    }
}

const mapStateToProps = (state) => {
    return { 
        pokemon: state.pokemon
    };
};

export default connect(
    mapStateToProps,
    { fetchPokemon }
)(PokemonDetails);