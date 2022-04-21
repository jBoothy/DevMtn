import React from 'react'

const RobotList = (props) => {
    if (props.robots.length > 0) {
        return (
            <div className='robot-list'>
                <h2>Your Robots</h2>
                <ul >
                    {
                        props.robots.map((robot, i) => {
                            return <robot key={i} robot={robot}/>
                        })
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