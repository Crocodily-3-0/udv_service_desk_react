import React, {Component} from "react";
import AuthService from "../../../services/auth.service";

// export default class Navigation extends Component {
//     render() {
//         return (
//         )
//     }
// }

export default class Navbar extends Component {
    // constructor(props) {
    //     super(props)
    //
    //     this.state = {
    //         currentUser: AuthService.getCurrentUser()
    //     };
    // }

    render() {
        return (
            <div className="navigation">
                <div className="navbar">
                    <div>
                        <img className="logo" src="images/logo.svg" alt="udv" />
                    </div>
                    <div>
                        <img className="logo" src="images/logo.svg" alt="udv" />
                    </div>
                    <div>
                        <img className="logo" src="images/logo.svg" alt="udv" />
                    </div>
                    <div>
                        <img className="logo" src="images/logo.svg" alt="udv" />
                    </div>
                    <div>
                        <img className="logo" src="images/logo.svg" alt="udv" />
                    </div>
                </div>
                <div className="header">
                    <div className="pageName">Обращения</div>
                    <div className="userMenu">
                        <div>
                            <img className="ava" src="images/avatar.svg" alt="avatar" />
                        </div>
                        <div>
                            <img src="images/exit.svg" alt="exit" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}