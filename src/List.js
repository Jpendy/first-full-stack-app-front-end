import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class List extends Component {
    render() {


        return (
            <div>

                <li>

                    <Link to = { `/dogs/${this.props.listProp.id}` }>
                    <h1> Breed: { this.props.listProp.breed } </h1>
                    <h3> Awesomeness Score: { this.props.listProp.awesomeness_score } </h3>
                    <h3> Neuroticism Level: { this.props.listProp.neuroticism_level } </h3>
                    <h3> Have Owned? { 
                     this.props.listProp.have_owned
                                        ? ' Yes'
                                        : ' No' } </h3>

                    </Link>

                </li>
                
            </div>
        )
    }
}
