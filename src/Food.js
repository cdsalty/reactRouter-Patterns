import React, { Component } from "react";

import "./Food.css";
class Food extends Component {
  render() {
    const url = `https://source.unsplash.com/1600x900/?${this.props.name}`;
    return (
      <div className="Food">
        <h3>I love to eat {this.props.name}</h3>
        <img src={url} alt={this.props.name} />
      </div>
    );
  }
}

export default Food;
