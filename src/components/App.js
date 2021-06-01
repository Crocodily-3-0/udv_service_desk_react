import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';

import Login from "./Login/Login";

import PrivateRoute from "./PrivateRoute";
import Reports from "./Reports/Reports";
import Profile from "./Profile/Profile";
import Developers from "./Developers/Developers";
import Employees from "./Employees/Employees"
import Orgs from "./Orgs/Orgs"
import CompanyInfo from "./ComanyInfo/CompanyInfo";
import Stat from "./Stat/Stat"
import Dicts from "./Dicts/Dicts";

import NotFound from "./NotFound";

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
                    <PrivateRoute path='/employees' component={Employees}/>
                    <PrivateRoute path='/companies' component={Orgs}/>
                    <PrivateRoute path='/company_info' component={CompanyInfo}/>
                    <PrivateRoute path='/stats' component={Stat}/>
                    <PrivateRoute path='/dictionaries' component={Dicts}/>

                    <Redirect from="/" to="/login" />

                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;
