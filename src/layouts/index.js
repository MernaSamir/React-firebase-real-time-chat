import React, { Component } from "react";
import Widget from "../imports/widgets";
import { map, get } from "lodash";
export default class Layout extends Component {
  // get widgetComponents from database
  widgets = [
    { id: 1, name: "Header" },
    { id: 2, name: "LoginForm" },
  ];

  render() {
    return (
      <div>
        {map(this.widgets, (d) => {
          return <Widget {...this.props} Widget={d}></Widget>;
        })}
      </div>
    );
  }
}
