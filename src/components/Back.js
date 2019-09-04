import React from 'react';
import { Link, withRouter } from 'react-router-dom'; 

import LeftArrow from "../assets/svg/LeftArrow";

const Back = (props) => {
    const { location } = props;
    if (location.pathname.match(/details/)){
        return (
            <Link to="/"
                className="user--nav">
                <LeftArrow width="25px" fill="white" className="user--nav__icon" />
                <span className="user--nav__back">BACK</span>
            </Link>
        )
    }
    return null
}

export default withRouter(Back);