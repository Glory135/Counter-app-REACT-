import React from 'react'

function EachCounter(props) {
    return (
        <div>
            <button className='btn' onClick={() => props.handleDecrease(props.eachCounter)}>
                Decrease
            </button>

            <span>
                {props.eachCounter.counter}
            </span>

            <button className='btn' onClick={() => props.handleIncrease(props.eachCounter)}>
                Increase
            </button>

            <button className='btn' onClick={() => props.handleDelete(props.eachCounter.id)}>
                Delete
            </button>
        </div>
    )
}

export default EachCounter
