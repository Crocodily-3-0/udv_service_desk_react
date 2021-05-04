import React, {Component} from "react";
import { Switch, Route, Link } from "react-router-dom";

import './App.css';
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import AuthService from "./services/auth.service";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: undefined
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user
            });
        }
    }

    render() {
        const {currentUser} = this.state;

        return (
            <div>
                {currentUser ? (
                    <Link to={'/profile'}>
                        {currentUser.email}
                    </Link>
                ) : (
                    <Link to={'/login'}>
                        Login
                    </Link>
                )}

                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/profile' component={Profile}/>
                </Switch>
            </div>
        );
    }
}

export default App;
