import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = {
    value: this.props.value,
    count: 0,
    Fa: false,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };

  // constructor(){
  //   super();
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  //   // bind: thuc hien viec chay ham
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There ae no tags!</p>;
  }

  handleIncrement = (product) => {
    console.log(product); // xem xem là nó nhận điều gì

    // console.log("Increament clicked", this);
    // this.state.count++;
    // khi state thay doi => redner lai toan bo
    this.setState({
      count: this.state.count + 1,
    });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 }); // truyen vao 1 bien
  };

  handleDecrease = () => {
    // console.log("Increament clicked", this);
    // this.state.count++;
    // khi state thay doi => render lai toan bo UI
    this.setState({
      count: this.state.count - 1,
    });
  };

  

  render() {
    console.log("props:", this.props);
    // trong render se nhan gia tri tuong ung la 1 object co ten la props

    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className="number">{this.formatCount()}</span>
        <button onClick={this.doHandleIncrement} className="btn">
          Increament
        </button>
        <button onClick={this.handleDecrease} className="btn">
          Decrease
        </button>

        <button
          onClick={() =>this.props.onDelete(this.props.id)} // truyen id  cua the vao de phan biet la dang xoa the nao
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>.React
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul> */}
        {/* {this.state.tags.length === 0 ? <h1>Please create a new tag</h1>: ""}
        {this.renderTags()} */}
      </div>
    );
  }

  formatCount() {
    // bình thường thì thì this.state.count
    const { count } = this.state; // chi lay count thoi, bo Fa

    return count === 0 ? "Zero" : count;
    ////// if(count === 0 ) {"zero"} else{count}
  }
}

export default Counter;
