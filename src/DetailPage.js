import React, { Component } from 'react';
import request from 'superagent';
import List from './List.js';
import './main.css';
import Header from './Header.js';

export default class DetailPage extends Component {

    state = {
        data: [],
        // loading: true
    }

    
    async componentDidMount() {

        const requestedData = await request.get(` https://thawing-coast-15109.herokuapp.com/dogs/${this.props.match.params.id}`);
        console.log(requestedData.body)
        this.setState({ data: requestedData.body[0] })
    }

    render() {
        console.log('hello' + JSON.stringify(this.state.data))
        return (
            <div>
                <section className= 'list-section'>

                    {
                        <ul>
                   
                            <List listProp = { this.state.data } />

                        </ul>
                    }

                </section>  

            </div>
        )
    }
}
