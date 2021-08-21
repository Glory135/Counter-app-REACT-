import React, { Component } from 'react'
import EachCounter from './EachCounter'


class Counters extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleReset}>
                    Reset
                </button>

                {
                    this.props.counters.map((eachCounters) => {
                        return (
                            < EachCounter
                                key={eachCounters.id}
                                eachCounters={eachCounters}
                                handleIncrease={this.props.handleIncrease}
                                handleDecrease={this.props.handleDecrease}
                                handleDelete={this.props.handleDelete}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Counters
