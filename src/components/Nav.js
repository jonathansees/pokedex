import React from 'react';
import { Link } from 'react-router-dom';

import PokemonLogo from "../assets/svg/PokemonLogo";
import LeftArrow from "../assets/svg/LeftArrow";

const Nav = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="user w20">
                    <Link to="/" className="user--nav">
                        <LeftArrow width="25px" fill="white" className="user--nav__icon" />
                        <span className="user--nav__back">BACK</span>
                    </Link>
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