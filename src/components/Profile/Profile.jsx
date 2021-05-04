import React, {Component} from "react";
import AuthService from "../../services/auth.service";

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    render() {
        const {currentUser} = this.state;

        return (
            <div>
                <h3>Profile</h3>
                <p>{currentUser.email}</p>
                <p>{currentUser.id}</p>
                <p>{currentUser.name}</p>
                <p>{currentUser.surname}</p>
                <p>{currentUser.patronymic}</p>
                {/*<p>*/}
                {/*    Token:{' '}*/}
                {/*    {currentUser.accessToken.substring(0, 20)}{' '}*/}
                {/*    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}*/}
                {/*</p>*/}
            </div>
        )
    }
}