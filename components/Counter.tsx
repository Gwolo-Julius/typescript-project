import React, { Component } from "react";

// Step 1: Define the state interface
interface CounterState {
  count: number; // 'count' must be a number
}

// Step 2: Extend Component with props and state types
class Counter extends Component<{}, CounterState> {
  // Step 3: Initialize the state with type safety
  state: CounterState = {
    count: 0,
  };

  // Step 4: Type-safe method for incrementing the count
  increment = (): void => {
    this.setState({ count: this.state.count + 1 }); // State update remains type-safe
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
