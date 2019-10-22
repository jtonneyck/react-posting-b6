import React, { Component } from 'react';
import axios from "axios";
import Nav from "../components/Nav";

export default class NewBeerWithFile extends Component {

    constructor(props){
        super(props);
        this.formRef = React.createRef();  {/* React equivalent of getting an element by id */}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        error: ""
    }

    handleSubmit(e) {
        e.preventDefault(); // prevent the default behaviour of the form, being redirecting to another route

        var formData = new FormData(this.formRef.current); // more info: https://developer.mozilla.org/en-US/docs/Web/API/FormData

        axios({
            url: "https://ih-beers-api.herokuapp.com/beers/new",
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },           
            method: "POST"
        })
        .then((response)=> {
            this.props.history.push(`/beer-detail/${response.data._id}`)
        })
        .catch((error)=> {
            debugger
            this.setState({error: error.response.data.message})
        })
    }   

    render() {
        return (
            <>
                <Nav />
                <div>
                    <form onSubmit={this.handleSubmit} ref={this.formRef}> {/* React equivalent of an id  */}
                        <input placeholder="tagline" type="text" name="tagline"/>
                        <input placeholder="description"  type="text" name="description"/>
                        <input placeholder="first_brewed" type="date" name="first_brewed"/>
                        <input placeholder="attenuation_level" type="number" name="attenuation_level"/>
                        <input placeholder="brewers_tip" type="text" name="brewers_tips"/>
                        <input placeholder="contributed_by" type="text" name="contributed_by"/>
                        <input placeholder="name" type="text" name="name"/>
                        <label className="custom-file-upload">
                            <input type="file" name="picture"/>
                            upload beer picture
                        </label>

                        <button type="submit">Submit </button>
                    </form>
                    {this.state.error ? 
                        <p>{this.state.error}</p>:
                        ""
                    }
                </div>
            </>
        )
    }
}
