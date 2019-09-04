import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, toggleBag } from '../actions';

import Header from './Header';
import CheckBox from './CheckBox';
import SearchBar from './SearchBar';
import List from './List';
import '../styles/main.scss';

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

    toggleBag = (checked) => {
        this.props.toggleBag(checked);
    }
    
    renderList() {
        const pokemons = this.props.bagOpen ? 
        this.props.pokemons.filter(pokemon => this.props.bag.includes(pokemon.id))
        :  this.props.pokemons

        return pokemons ? <List pokemons={pokemons} filter={this.state.filter} /> : null
    }

    render() {
        return (
            <React.Fragment>
            <Header></Header>
                <div className="container" id="content">
                    <CheckBox 
                        off="All Pokemon"
                        on="Pokemon in Bag"
                        onChange={this.toggleBag}
                        checked={this.props.bagOpen}
                    />
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
        pokemons: state.pokemons,
        bag: state.bag,
        bagOpen: state.bagOpen
    };
};

export default connect(
    mapStateToProps, 
    { fetchPokemons, toggleBag }
)(PokemonList);