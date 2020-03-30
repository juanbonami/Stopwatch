// https://www.w3schools.com/jsref/met_win_clearinterval.asp
// https://www.youtube.com/watch?v=NAx76xx40jM

// imports react library
import React, { Component } from 'react'
import './App.css'

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

  // *** purpose of this function is to reduce redundant code. Function is used later in startPressed() and pausePressed() ***
  changeStateWithInterval = () => {
    // setInterval takes 2 arguments, function and milliseconds
    // setInterval takes a nameless function that changes the state w 1000 milliseconds interval
      return setInterval(()=>{  // setInterval executes the nameless function once every 1 second
        this.setState({
          counter: this.state.counter + 1,
          paused: false
        })
        // 1000 milliseconds = 1 second
      }, 1000)
    }




  // Start button function 
  startPressed = () => {
    // this.current is a property that will be used later to stop setInterval() within stopInterval()
    this.current = this.changeStateWithInterval() 
  }



    // Pause button function
    pausePressed = () => {
      // checks if paused is a boolean value of false, if that condition is met the if block will execute
      if (this.state.paused === false) {
        // changes state, changes paused to a boolean value of true
        this.setState({
          paused: true
        })
        // clearInterval stops this.current which is the setInterval that was declared in startPressed()
        clearInterval(this.current)
      }else {
        // returns the startPressed function
          this.current = this.changeStateWithInterval()
        }
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