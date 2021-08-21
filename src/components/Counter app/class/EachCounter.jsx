import React, { Component } from 'react'

class EachCounter extends Component {

    render() {

        return (
            <div className='eachCounter_container'>
                <button className='btn' onClick={() => { this.props.handleDecrease(this.props.eachCounters) }}>
                    decrease
               </button>

                <span className='counter_span'>
                    {this.props.eachCounters.counter}
                </span>

                <button className='btn' onClick={() => { this.props.handleIncrease(this.props.eachCounters) }}>
                    increase
                </button>

                <button className='btn' onClick={() => this.props.handleDelete(this.props.eachCounters.id)}>
                    Delete
                </button>

            </div>
        )
    }
}

export default EachCounter
