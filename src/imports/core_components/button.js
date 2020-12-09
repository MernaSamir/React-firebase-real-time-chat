import React, { Component } from "react";
import applyActions from "../../helpers/functions/actions";
class button extends Component {
  render() {
    const { action, label } = this.props;
    return (
      <div>
        <button onClick={applyActions({ action })}>{label}</button>
      </div>
    );
  }
}
export const Button = button;
