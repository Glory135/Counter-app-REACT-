import React from 'react'
import EachCounter from './EachCounter'

function Counters2(props) {
    return (
        <div className='eachCounter_container'>
            <button onClick={props.handleReset}>
                Reset
            </button>

            {
                props.counters.map((eachCounter) => < EachCounter
                    key={eachCounter.id}
                    handleIncrease={props.handleIncrease}
                    handleDecrease={props.handleDecrease}
                    handleDelete={props.handleDelete}
                    eachCounter={eachCounter}
                />
                )



            }
        </div>
    )
}

export default Counters2
