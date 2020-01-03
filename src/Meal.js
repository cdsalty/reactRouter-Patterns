import React, { Component } from "react";

class Meal extends Component {
  render() {
    const foodUrl = `https://source.unsplash.com/1600x900/?${}`;
    const drinkUrl = `https://source.unsplash.com/1600x900/?${}`;
    return (
      <div>
        <h1>THIS IS A MEAL OF foodname and drinkname</h1>
      </div>
    );
  }
}
export default Meal;
