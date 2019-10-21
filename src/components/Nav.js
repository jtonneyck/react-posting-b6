import React from 'react';
import {Link} from 'react-router-dom'
import "./nav.scss"
const Nav = () => {
    return (
        <nav>
                <Link to="/">Home</Link>
                <Link to="new-beer">New Beer</Link>
                <Link to="new-beer-with-file">New Beer With File</Link>
        </nav>
    );
}

export default Nav;
