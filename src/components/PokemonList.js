import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';

import SearchBar from './SearchBar';
import List from './List';

class PokemonList extends Component {
    state = {
        filter: ''
    }

    componentDidMount() {
        this.props.fetchPokemons();
    }

    filterPokemon = (filterString) => {
        this.setState({ filter: filterString });
    }
    
    renderList() {
        const pokemons = this.props.pokemons

        return pokemons ? <List pokemons={pokemons} filter={this.state.filter} /> : null
    }

    render() {
        return (
            <React.Fragment>
                <div className="container" id="content">
                    <SearchBar 
                        filterPokemon={this.filterPokemon}
                        filterString={this.state.filter}
                    />
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