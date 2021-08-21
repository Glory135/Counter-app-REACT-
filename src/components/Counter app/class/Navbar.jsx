import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <span>
                    TOTAL COUNTED: <b> {this.props.totalCounters}</b>
                </span>
            </div>
        )
    }
}

export default Navbar
