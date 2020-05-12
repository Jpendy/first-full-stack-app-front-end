import React, { Component } from 'react';
import request from 'superagent';
import List from './List.js';
import './main.css';

export default class DetailPage extends Component {

    state = {
        data: [],
        // loading: true
    }

    
    async componentDidMount() {

        const requestedData = await request.get(`https://thawing-coast-15109.herokuapp.com/dogs/${this.props.match.params.id}`);
        console.log(requestedData.body)
        this.setState({ data: requestedData.body[0] })
    }


    handleClick = async () => {
        await request.delete(`https://thawing-coast-15109.herokuapp.com/dogs/${this.props.match.params.id}`)


    }


    render() {
        console.log('hello' + JSON.stringify(this.state.data))
        return (
            <div>
                

                
                <div className="button-div">
                <button onClick={ this.handleClick }>Delete</button>
                </div>

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
