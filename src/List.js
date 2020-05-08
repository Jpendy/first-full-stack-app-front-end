import React, { Component } from 'react'

export default class List extends Component {
    render() {


        return (
            <div>

                <li>
                    <h1> { this.props.listProp.breed } </h1>
                    <h1> { this.props.listProp.awesomeness_score } </h1>

                </li>
                
            </div>
        )
    }
}
