import React, { Component } from 'react';
import axios from "axios";

export default class NewBeer extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        tagline: "",
        description: "",
        first_brewed: "",
        attenuation_level: "",
        brewers_tips: "",
        contributed_by: "",
        name: ""
    }

    handleChange(e){
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault(); // prevent the default behaviour of the form, being redirecting to another route
        axios({
            url: "https://ih-beers-api.herokuapp.com/beers/new",
            data: this.state,
            method: "POST"
        })
        .then((response)=> {
            debugger
            this.props.history.push(`/beer-detail/${response.data._id}`)
        })
        .catch((error)=> {
            debugger

        })
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.tagline} placeholder="tagline" type="text" name="tagline"/>
                    <input onChange={this.handleChange} value={this.state.description} placeholder="description"  type="text" name="description"/>
                    <input onChange={this.handleChange} value={this.state.first_brewed} placeholder="first_brewed" type="date" name="first_brewed"/>
                    <input onChange={this.handleChange} value={this.state.attenuation_level} placeholder="attenuation_level" type="number" name="attenuation_level"/>
                    <input onChange={this.handleChange} value={this.state.brewers_tips} placeholder="brewers_tip" type="text" name="brewers_tips"/>
                    <input onChange={this.handleChange} value={this.state.contributed_by}  placeholder="contributed_by" type="text" name="contributed_by"/>
                    <input onChange={this.handleChange} value={this.state.name} placeholder="name" type="text" name="name"/>
                    <button type="submit">Submit </button>
                </form>
            </div>
        )
    }
}
