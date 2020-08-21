import React, { Component } from "react";
import "./SearchBox.scss";

export default class Searchbox extends Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="input_style"
          placeholder="Please enter the name of film"
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
    );
  }
}
