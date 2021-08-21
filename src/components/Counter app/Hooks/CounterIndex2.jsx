import React, { useState } from 'react'
import Counters2 from './Counters2'
function CounterIndex2() {

    const [counters, setCounters] = useState([])
   

    const handleAddCount = (e) => {
        e.preventDefault();

        const newCounters = [...counters]
        newCounters.push({
            id: counters.length,
            counter: 0
        })

        setCounters(newCounters)
    }

    const handleIncrease = (Counter) => {
        const newCounters = [...counters]
        const index = newCounters.indexOf(Counter)
        newCounters[index] = { ...Counter }
        newCounters[index].counter++

        setCounters(newCounters)
    }

    const handleDecrease = (Counter) => {
        const newCounters = [...counters]
        const index = newCounters.indexOf(Counter)
        newCounters[index] = { ...Counter }
        newCounters[index].counter--

        setCounters(newCounters)
    }

    const handleReset = () => {
        const newCounters = counters.map((eachCounter) => {
            eachCounter.counter = 0
            return eachCounter
        })

        setCounters(newCounters)
    }


    const handleDelete = (counterId) => {
        const newCounters = counters.filter(c => c.id !== counterId);

        setCounters(newCounters)
    }

    return (
        <div>
            <button onClick={handleAddCount}>
                Add
            </button>
            <Counters2
                counters={counters}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                handleReset={handleReset}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default CounterIndex2
