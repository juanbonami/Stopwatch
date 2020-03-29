import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      paused: true
    }
  }


//   clicks = () => {
//     setInterval(()=> {
//       this.state.counter = this.state.counter + 1
//     }, 1000)
// }

// componentDidMount() {
//     this.myInterval = setInterval(()=> {
//         this.setState({
//               counter: this.state.counter +1
//             })
//     }, 1000)
    
//   }


  startPressed = () => {
    this.setState({
      counter: current += setInterval(()=>{
        this.setState({
          counter: this.state.counter + 1
        })
      }, 1000)
    })
  }

  // startPressed = () => {
  //   this.setState({
  //     counter: setInterval(this.state.counter = this.state.counter + 1)
  //   })
  // }

  

  

  pausePressed = () => {
    this.setState({
      counter: 4
    })
  }

  



  render() {
    let current = 0;
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button className="reset">Reset</button>
        <button className="start" onClick={this.startPressed}>Start</button>
        <button className="pause">Pause</button>
      </div>
    )
  }
}