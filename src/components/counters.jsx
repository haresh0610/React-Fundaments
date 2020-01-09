import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-md m-2"
        >
          Reset
        </button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
            // no need of having value and id if we use counter = {counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
