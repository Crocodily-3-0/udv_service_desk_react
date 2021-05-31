import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
    return(
        <AuthProvider>
            <Router>
                <Switch>
                    <PrivateRoute exact path="/" component={Profile} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;
