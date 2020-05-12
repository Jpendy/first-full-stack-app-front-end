import React, { Component } from 'react'
import './main.css'
import request from 'superagent';

export default class FormPage extends Component {

    state = {
        breed: '',
        awesomeness_score: 0,
        neuroticism_level: '',
        have_owned: false
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const newProfile = this.state;

        await request.post(`https://thawing-coast-15109.herokuapp.com/dogs/`, newProfile)

    }


    handleChange = (e) => {
        const newState = {}
        newState[e.target.name] = e.target.value;

        this.setState(newState);
    }

    render() {

        const { breed, awesomeness_score, have_owned, neuroticism_level } = this.state;

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

                <label> 
                    {`Neuroticism Level(1-3): `}  
                    <input onChange = { this.handleChange } value = { neuroticism_level } name = 'neuroticism_level' />  
                </label>

                <label>  
                    Have Owned 
                    <input onChange = { this.handleChange } checked = { have_owned === 'true' } name = 'have_owned' type ='radio' value ='true' />
                </label>

                <label> 
                    Have Not Owned  
                    <input onChange = { this.handleChange } checked = { have_owned === 'false' } name = 'have_owned' type ='radio' value ='false' />  
                </label>

                <button>Submit</button>
            </form>

                
            </div>
        )
    }
}
