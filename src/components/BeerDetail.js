import React, { Component } from 'react'
import axios from "axios";

export default class BeerDetail extends Component {

    state = {
        loading: true,
        error: false,
        beer: {}
    }

    componentDidMount(){
        let beerId = this.props.match.params.beerId

        axios({
            url: `https://ih-beers-api.herokuapp.com/beers/${beerId}`,
            method: "GET"
        })
        .then((response)=> {
            // states that have a more complex data structures are best copied first
            var stateStringify = JSON.stringify(this.state); // lodash is better _   (https://lodash.com, https://stackoverflow.com/questions/21851974/lodash-clone-and-clonedeep-behaviors)
            var stateCopy = JSON.parse(stateStringify);

            stateCopy.beer = response.data;
            stateCopy.loading = false;
            this.setState(stateCopy);
        })
        .catch((error)=> {
            var stateStringify = JSON.stringify(this.state);
            var stateCopy = JSON.parse(stateStringify);

            stateCopy.error = error.message;
            this.setState(stateCopy);
        })
    }  

    render() {
        return (
            <div>
                {this.state.loading ? 
                    <img src="/loading.gif" alt=""/>:
                    <>
                        <h1>{this.state.beer.name}</h1>
                        <p>{this.state.beer.description}</p>
                        <img src={this.state.beer.image_url} alt=""/>
                    </>
                }
                {this.state.error ? 
                    this.state.error:
                    ""
                }
            </div>
        )
    }
}
