import React, { Component } from "react";

import "./Food.css";
class Food extends Component {
  render() {
    // with option 2, added in to make necessary changes
    const name = this.props.match.params.name; // option 2
    // const url = `https://source.unsplash.com/1600x900/?${this.props.name}`;
    const url = `https://source.unsplash.com/1600x900/?${name}`; // option 2
    return (
      <div className="Food">
        <h3>I love to eat {this.props.name}</h3>
        <img src={url} alt={this.props.name} />
      </div>
    );
  }
}

export default Food;
