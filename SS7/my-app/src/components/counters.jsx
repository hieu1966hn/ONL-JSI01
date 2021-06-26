import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    couters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Event handler Called", counterId);
  };

  render() {
    return (
      <div>
        {this.state.couters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            id={counter.id}
            onDelete={this.handleDelete}
          ></Counter>
          // 3 giá trị đều nằm ở trong object props{value: counter.value, selected: true}
        ))}
      </div>
    );
  }
}

// passing child
export default Counters;
