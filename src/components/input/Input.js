

import React from 'react'
import './input.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

 const input = ({onChange, input, handleSubmit}) => {
  return (
    
        <form className = "form" onSubmit = {handleSubmit}>
            <div class = "row">
                <div className = "col-10">
                    <input 
                    name = 'input'
                    className = "input"
                    value = {input}
                    onChange = {event => onChange(event)}
                    type="text" 
                    placeholder="Search for images" />
                </div>
                <div className = "col-2">
                    <button type = "submit" className = "submit u-mr" >Search</button>
                    <button type = "submit" className = "submit">Save</button>
                </div>
            </div>
        </form> 

  )
}

export default input