import React, { Component } from 'react'

export default class List extends Component {
    render() {


        return (
            <div>

                <li>
                    <h1> { this.props.listprop.name } </h1>
                    <h1> { this.props.listprop.cool_factor } </h1>

                </li>
                
            </div>
        )
    }
}
