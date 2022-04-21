import React from 'react'

const RobotList = (props) => {
    if (props.robots) {
        return (
            <div className='robot-list'>
                <h2>Your Robots</h2>
                <ul>
                    {
                    
                        // CODE HERE
                    
                    } 
                </ul>
            </div>
        )
    } else {
        return (
            <h2 className='robot-list'>You don't have any robots yet!</h2>
        )
    }
}

export default RobotList