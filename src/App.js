import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      paused: true
    }
  }



  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button className="reset">Reset</button>
        <button className="start">Start</button>
        <button className="pause">Pause</button>
      </div>
    )
  }
}

