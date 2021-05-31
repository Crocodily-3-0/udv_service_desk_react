import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return(
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Profile} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;
