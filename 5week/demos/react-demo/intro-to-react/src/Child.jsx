import React from 'react'

const Child=(props)=>{
    return (
        <div>
            <h2>Child Component</h2>
            <h3>{props.userInput}</h3>
        </div>
    );
}

export default Child