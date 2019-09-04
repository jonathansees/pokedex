import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, updateBag, clearPokemon } from '../actions';

import Card from './Card';
import CheckBox from './CheckBox';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import '../styles/details.scss';
import '../styles/card.scss';

class PokemonDetails extends Component {

    componentDidMount() {
        this.props.fetchPokemon(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearPokemon()
    }

    changeHandler = () => {
        this.props.updateBag(this.props.pokemon.id)
    }

    renderType () {
        let types = ""

        this.props.pokemon.types.map(type => {
            types += type.type.name + ", "
        });

        return types.slice(0, types.length - 2);
    }

    renderAbilities () {
        let abilities = ""

        this.props.pokemon.abilities.map(ability => {
            abilities += ability.ability.name + ", "
        });

        return abilities.slice(0, abilities.length - 2);
    }

    render() {
        const API_KEY = process.env.REACT_APP_POKEAPI_API_KEY;

        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: 32.7152778, lng: -117.1563889 }}
            >
                {this.props.pokemon.locations.map(location => {
                    const lat = parseFloat(location.slice(0, location.indexOf(",")))
                    const lng = parseFloat(location.slice((location.indexOf(",") + 1), location.length))
                    return <Marker key={location} position={{ lat, lng }} />
                })}
            </GoogleMap>
        ))

        return this.props.pokemon.name ? (
            <div className="container">
                <div className="details">
                    <div className="information">
                        <Card pokemon={ this.props.pokemon } />
                        <CheckBox 
                            title="In Bag"
                            onChange={this.changeHandler}
                            checked={this.props.bag.includes(this.props.pokemon.id)}
                        />
                        
                        <p><span>Height:</span> {this.props.pokemon.height}</p>
                        <p><span>Weight:</span> {this.props.pokemon.weight}</p>
                        <p><span>Type:</span> {this.renderType()}</p>
                        <p><span>Abilities:</span> {this.renderAbilities()}</p>
                    </div>
                    <div className="map">
                        <MyMapComponent
                            isMarkerShown
                            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + API_KEY}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            </div>
        ) : null
    }
}

// AIzaSyCCCH7huOkKNhv6PlFSapwdZ3_15kBeW4k
//    AIzaSyCCCH7huOkKNhv6PlFSapwdZ3_15kBeW4k


const mapStateToProps = (state) => {
    return { 
        pokemon: state.pokemon,
        bag: state.bag
    };
};

export default connect(
    mapStateToProps,
    { fetchPokemon, updateBag, clearPokemon }
)(PokemonDetails);