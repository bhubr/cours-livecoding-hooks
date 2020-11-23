import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => this.setState(
    prevState => ({ count: prevState.count + 1 })
  );

  render() {
    const { count } = this.state;
    return (
      <button type="button" onClick={this.incrementCounter}>
        {count}
      </button>
    )
  }
}

export default Counter;
