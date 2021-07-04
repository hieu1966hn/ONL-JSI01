import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({
      counters,
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({
      counters,
    });
  };

  handleDelete = (counterId) => {
    // console.log("Event handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // hàm này để trả về những giá trị nào có id !== 1 (vì khi mình click vào thẻ id =1)
    //=> counters được trả về 3 id khác id mình đã bấm
    this.setState({
      counters: counters, // update State mới chỉ có 3 thẻ counter với id khác với thẻ đã bấm delete
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            onIncrement={this.handleIncrement}
            // value={counter.value}
            // selected={true}
            // id={counter.id}
            // selected={counter.selected}
          ></Counter>
          // 3 giá trị đều nằm ở trong object props{value: counter.value, selected: true}
        ))}
      </div>
    );
  }
}

// passing child
export default Counters;
