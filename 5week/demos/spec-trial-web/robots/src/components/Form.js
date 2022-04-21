import React from 'react'

const Form = () => {
    return (
        <form>
            <p>What is your new robot's name?</p>
            <input 
                type='text' 
                placeholder='name'/>
            <button>Create Robot</button>
        </form>
    )
}

export default Form