import React, { Component } from 'react'
import {login} from "../utils/auth";

export default class Login extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username"/>
                    <input onChange={this.handleChange} value={this.state.password} placeholder="password"  type="text" name="password"/>
                    <button type="submit">Submit </button>
                </form>
            </div>
        )
    }
}
