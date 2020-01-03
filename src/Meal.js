import React, { Component } from "react";

class Meal extends Component {
  render() {
    const foodName = this.props.match.params.foodName;
    const drinkName = this.props.match.params.drinkName;
    const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
    const drinkUrl = `https://source.unsplash.com/1600x900/?${foodUrl}`;
    // const url = `https://source.unsplash.com/1600x900/?${name}`;

    return (
      <div>
        {/* A meal will have a drink and a food name(TWO URL PARAMETERS) */}
        {/* <h1>THIS IS A MEAL {this.props.match.params.foodName}</h1> */}
        <h2>
          THIS IS A MEAL OF {foodName} AND {drinkName}
        </h2>
        <img src={foodUrl} alt={foodUrl} />
        <img src={drinkUrl} alt={drinkUrl} />
      </div>
    );
  }
}
export default Meal;
