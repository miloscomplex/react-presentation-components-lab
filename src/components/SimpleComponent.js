// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  // Initial state here...
  state = {
    mood: 'happy'
  }

  handleClick = event => {
    this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
