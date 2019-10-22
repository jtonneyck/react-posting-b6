import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import "./nav.scss";
import {getUser, logout} from "../utils/auth";

export default class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: getUser()
        }
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        logout();
        this.setState({user: null});
    }

    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="new-beer">New Beer</Link>
                <Link to="new-beer-with-file">New Beer With File</Link>
                {this.state.user ? 
                    <>
                        <p>Welcome {this.state.user.firstname}</p>
                        <p onClick={this.logoutUser}>Logout</p>
                    </>
                    :
                    <>
                        <Link to="login">Login</Link>
                        <Link to="signup">Sign up</Link>
                    </>
                }
            </nav>
        )
    }
}
