import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./containers/home_page";
import LoginPage from "./containers/login_page";
// import LoginPage from "./layouts";

import RegisterPage from "./containers/register_page";
import PrivateRoute from "./components/private_route";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedInUser } from "./actions";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser());
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
