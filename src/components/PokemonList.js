import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';

import List from './List';

class PokemonList extends Component {

    componentDidMount() {
        this.props.fetchPokemons();
    }
    
    renderList() {
        const pokemons = this.props.pokemons

        return pokemons ? <List pokemons={pokemons} /> : null
    }

    render() {
        return (
            <React.Fragment>
                <div className="container" id="content">
                    { this.renderList() }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        pokemons: state.pokemons
    };
};

export default connect(
    mapStateToProps, 
    { fetchPokemons }
)(PokemonList);