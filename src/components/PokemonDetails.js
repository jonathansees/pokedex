import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';

import Card from './Card';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class PokemonDetails extends Component {

    componentDidMount() {
        this.props.fetchPokemon(this.props.match.params.id)
    }

    render() {
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: 32.7152778, lng: -117.1563889 }}
            >
                {this.props.pokemon.locations.map(location => {
                    const lat = parseFloat(location.slice(0, location.indexOf(",")))
                    const lng = parseFloat(location.slice((location.indexOf(",") + 1), location.length))
                    return <Marker position={{ lat, lng }} />
                })}
            </GoogleMap>
        ))

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
                        <MyMapComponent
                            isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
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

const mapStateToProps = (state) => {
    return { 
        pokemon: state.pokemon
    };
};

export default connect(
    mapStateToProps,
    { fetchPokemon }
)(PokemonDetails);