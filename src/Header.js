import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>

                <section className="header-section" >

                <Link to={ '/' }>Home</Link>
                <Link to={ '/form/' }>Add Dog</Link>
                </section>
                
            </div>
        )
    }
}
