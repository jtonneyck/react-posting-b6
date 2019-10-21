import React from 'react';
import {Link} from 'react-router-dom'
import "./nav.scss"
const Nav = () => {
    return (
        <nav>
                <Link to="/">Home</Link>
                <Link to="new-beer">New Beer</Link>
        </nav>
    );
}

export default Nav;
