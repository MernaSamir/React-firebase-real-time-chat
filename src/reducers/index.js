import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import userReducer from "./users_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
