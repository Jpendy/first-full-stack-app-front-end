import React, { Component } from 'react'

export default class List extends Component {
    render() {


        return (
            <div>

                <li>
                    <h1> Breed: { this.props.listProp.breed } </h1>
                    <h3> Awesomeness Score: { this.props.listProp.awesomeness_score } </h3>

                </li>
                
            </div>
        )
    }
}
