import React, { Component } from "react";

class textbox extends Component {
  render() {
    const { autoFocus, placeholder, onChange, value, label } = this.props;
    console.log(label, "lllllllll");

    return (
      <div>
        <label>{label}</label>
        <input
          autoFocus={autoFocus}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></input>
      </div>
    );
  }
}
export const TextBox = textbox;
