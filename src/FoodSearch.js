import React, { Component } from "react";
import { Link } from "react-router-dom";

class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Search For a Food?</h2>
        <input
          type="text"
          placeholder="search for food item"
          value={this.state.query}
          onChange={this.handleChange}
        />
        {/* instead of using a button, using a LINK */}
        {/* Link to whatever is typed in the query */}
        <Link to={`/food/${this.state.query}`}>GO!</Link>
      </div>
    );
  }
}

export default FoodSearch;
