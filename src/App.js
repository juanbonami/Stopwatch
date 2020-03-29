// https://www.w3schools.com/jsref/met_win_clearinterval.asp

// imports react library
import React, { Component } from 'react'

// class App extends class Component from the react library
export default class App extends Component {
  constructor(props) {
    super(props)

    // sets state object
    this.state = {
      counter: 0,
      paused: true
    }
  }

  // Start button function 
  startPressed = () => {
    // this.current is a property that will be used later to stop setInterval(). setInterval takes 2 arguments, a function and milliseconds
    // setInterval takes a nameless function that changes the state w 1000 milliseconds interval
    this.current = setInterval(()=>{  // setInterval executes the nameless function once every 1 second
        this.setState({
          counter: this.state.counter + 1,
          paused: false
        })
      }, 1000) // 1000 milliseconds = 1 second
    // return this.current
    return this.current
  }

  // Reset button 
  resetPressed = () => {
    // changes the state using the JSX method setState()
    this.setState({
    // counter will be set back to 0 and paused back to a boolean value of true
      counter: 0,
      paused: true
  })
  // The clearTimeout() method clears a timer. Times out this.current from the startPressed.
clearTimeout(this.current)
  }
    


    
  

  // the render method comes from the class Component we extended
  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button className="reset" onClick={this.resetPressed}>Reset</button>
        <button className="start" onClick={this.startPressed}>Start</button>
        <button className="pause" onClick={this.pausePressed}>Pause</button>
      </div>
    )
  }
}