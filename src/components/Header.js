import React from 'react';

import PokemonLogo from "../assets/svg/PokemonLogo";
import Pokeball from "../assets/svg/Pokeball";
import LeftArrow from "../assets/svg/LeftArrow";
import '../styles/main.scss';

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo-holder">
                <div className="test"></div>
                <PokemonLogo className="logo" height="200px" />
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                <Pokeball className="pokeball" width="50%" />
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
            </div>
            <a href="#content" className="btn-floating btn-large cyan pulse">
                <div className="arrow">
                    <LeftArrow className="arrow__top" fill="white" />
                </div>
                <div className="arrow">
                    <LeftArrow className="arrow__middle" fill="white" />
                </div>
                <div className="arrow">
                    <LeftArrow className="arrow__bottom" fill="white" />
                </div>
            </a>
        </header>
    )
}

export default Header;