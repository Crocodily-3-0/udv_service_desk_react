import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {AuthProvider} from "../contexts/AuthContext";

import './App.css';
import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

import PrivateRoute from "./PrivateRoute";

import Reports from "./Reports/Reports";
import Report from "./Report/Report";
import Profile from "./Profile/Profile";
import Developers from "./Developers/Developers";
import Employees from "./Employees/Employees"
import Orgs from "./Orgs/Orgs"
import CompanyInfo from "./ComanyInfo/CompanyInfo";
import Stat from "./Stat/Stat"
import Dicts from "./Dicts/Dicts";

import NotFound from "./NotFound";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <PrivateRoute path='/reports' component={Reports}/>
                    <PrivateRoute path='/profile' component={Profile}/>
                    <PrivateRoute path='/developers' component={Developers}/>
                    <PrivateRoute path='/employees' component={Employees}/>
                    <PrivateRoute path='/companies' component={Orgs}/>
                    <PrivateRoute path='/company_info' component={CompanyInfo}/>
                    <PrivateRoute path='/stats' component={Stat}/>
                    <PrivateRoute path='/dictionaries' component={Dicts}/>
                    <PrivateRoute path='/report' component={Report}/>

                    <Route path="/login" component={Login}/>
                    <Route path="/reset_password" component={ForgotPassword}/>

                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;
