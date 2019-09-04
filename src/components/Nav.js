import React from 'react';

import Back from './Back';
import PokemonLogo from "../assets/svg/PokemonLogo";
import '../styles/navbar.scss';

const Nav = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="user w20">
                    <Back />
                </div>
                <div className="logo w40">
                    <PokemonLogo height="50px" />
                </div>
                <div className="spacer w20">
                </div>
            </div>
        </header>
    )
}

export default Nav;



