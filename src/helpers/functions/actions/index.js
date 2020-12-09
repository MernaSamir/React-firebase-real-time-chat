import React from "react";
import * as Actions from "./main";
import { get } from "lodash";
export default function applyActions(params) {
  const action = get(Actions, params.action, () => {});
  if (params.then) {
    applyActions(params.then);
  }

  return action;
}
