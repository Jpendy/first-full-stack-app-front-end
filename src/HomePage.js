import React, { Component } from 'react'
import List from './List.js';
import request from 'superagent';

export default class HomePage extends Component {

    state ={
        data: []
    }

    async componentDidMount() {
        let requestData = await request.get('https://thawing-coast-15109.herokuapp.com/animals')

        this.setState( {data: requestData.body })
        console.log(requestData.body)
    }


    render() {
        
    
       
        return (
            <div>

               hello
                    { 
                        <ul>
                            { this.state.data.map(item => {
                                return <List listProp = { item } />
                            })
                             }   
                        </ul>
                    }

               

              

            </div>
        )
    }
}
