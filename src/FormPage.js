import React, { Component } from 'react'
import './main.css'
import request from 'superagent';

export default class FormPage extends Component {

    state = {
        breed: '',
        awesomeness_score: 0
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const newProfile = this.state;

        await request.post(`https://thawing-coast-15109.herokuapp.com/dogs/`, newProfile)

        // this.setState( { newDog: requestedData.body })
        console.log('submit' + this.state)
        // this.setState( { newDog: data })

    }


    handleChange = (e) => {
        const newState = {}
        newState[e.target.name] = e.target.value;

        this.setState(newState);
        console.log(this.state)
    }

    render() {

        const { breed, awesomeness_score } = this.state;

        return (
            <div className="form-div" >

            <form onSubmit = { this.handleSubmit } >

                <label>  
                    {`Breed: `} 
                    <input onChange = { this.handleChange } value = { breed } name = 'breed' />
                </label>

                <label> 
                    {`Awesomeness-Score: `}  
                    <input onChange = { this.handleChange } value = { awesomeness_score } name = 'awesomeness_score' />  
                </label>

                <button>Submit</button>
            </form>

                
            </div>
        )
    }
}
