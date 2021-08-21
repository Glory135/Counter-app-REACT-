import React from 'react'
import './App.css'
import CounterIndex from './components/Counter app/class/CounterIndex'
import CounterIndex2 from './components/Counter app/Hooks/CounterIndex2'

function App() {
    return (
        <div className='container'>
              <h3>Class Counter</h3>
            < CounterIndex />

            <h3>Hook Counter</h3>
            < CounterIndex2 />
        </div>  
    )
}

export default App
