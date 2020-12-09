import React, { Component } from "react";
import { range } from "lodash";

class simple extends Component {
  render() {
    const { label } = this.props;
    return <p>{label}</p>;
  }
}

export const Simple = simple;
