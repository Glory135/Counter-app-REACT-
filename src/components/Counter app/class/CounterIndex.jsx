import React, { Component } from 'react'
import Counters from './Counters'
import Navbar from './Navbar'

class CounterIndex extends Component {

    state = {
        counters: []
    }

    handleAddCounter = (e) => {
        e.preventDefault()

        const newCounter = [...this.state.counters]
        newCounter.push({
            id: this.state.counters.length,
            counter: 0
        })

        this.setState({
            counters: newCounter
        })
    }


    handleIncrease = (Counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(Counter);
        counters[index] = { ...Counter };
        counters[index].counter++;

        this.setState({
            counters: counters
        })
    }

    handleDecrease = (Counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(Counter);
        counters[index] = { ...Counter };
        counters[index].counter--;

        this.setState({
            counters: counters
        })
    }

    handleReset = () => {
        const Counters = this.state.counters.map((counter) => {
            counter.counter = 0;
            return counter;
        })
        this.setState({
            counters: Counters
        })
    }

    handleDelete = (counterId) => {
        const Counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({
            counters: Counters
        })
    }

    render() {
        return (
            <div>
                <Navbar totalCounters={this.state.counters.filter(c => c.counter > 0).length} />

                <button onClick={this.handleAddCounter}>
                    ADD COUNT
                </button>

                <Counters
                    counters={this.state.counters}
                    handleIncrease={this.handleIncrease}
                    handleDecrease={this.handleDecrease}
                    handleReset={this.handleReset}
                    handleDelete={this.handleDelete}
                />

            </div>
        )
    }
}

export default CounterIndex
