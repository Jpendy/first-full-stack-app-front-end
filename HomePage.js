import React, { Component } from 'react'
import List from './List.js';

export default class HomePage extends Component {

    state ={
        data: ''
    }


    render() {
        return (
            <div>
               
                <ul>
                    <List listProp = {this.state.data}  />
                </ul>
                
            </div>
        )
    }
}
