import React, { Component } from "react";
import * as CoreComponents from "../core_components/types";
import { map, get } from "lodash";

export default class Widget extends Component {
  // get widgetComponents from database
  widgetComponents = {
    Header: [
      { label: "WebMessenger", type: "Simple" },
      { label: "Login", type: "Button", action: "nav_login" },
      { label: "Sign Up", type: "Button", action: "nav_sign" },
    ],
    LoginForm: [
      { label: "Email", type: "TextBox" },
      { label: "Password", type: "TextBox", txt_type: "password" },
      { label: "Submit", type: "Button", action: "submit_login" },
    ],
  };

  render() {
    console.log(CoreComponents, "cyhfhfhccccc");
    const { Widget } = this.props;
    console.log();
    return (
      <div>
        {map(get(this.widgetComponents, Widget.name), (d) => {
          const Component = get(CoreComponents, d.type, CoreComponents.TextBox);
          console.log(Component, "cccccc");
          return <Component {...this.props} {...d}></Component>;
        })}
      </div>
    );
  }
}
