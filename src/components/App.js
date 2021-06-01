import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';

import Login from "./Login/Login";

import PrivateRoute from "./PrivateRoute";
import Reports from "./Reports/Reports";
import Profile from "./Profile/Profile";
import Developers from "./Developers/Developers";
import Orgs from "./Orgs/Orgs"
import Stat from "./Stat/Stat"
import Dicts from "./Dicts/Dicts";

import {AuthProvider} from "../contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>

                    <PrivateRoute path='/reports' component={Reports}/>
                    <PrivateRoute path='/profile' component={Profile}/>
                    <PrivateRoute path='/developers' component={Developers}/>
                    <PrivateRoute path='/companies' component={Orgs}/>
                    <PrivateRoute path='/stats' component={Stat}/>
                    <PrivateRoute path='/dictionaries' component={Dicts}/>
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;
