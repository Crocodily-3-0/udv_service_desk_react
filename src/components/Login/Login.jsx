import React, {Component} from "react";
import Form from "react-validation/build/form"
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import styles from "./Login.module.css";
import UDVLogo from "../../images/logo.svg";

import AuthService from "../../services/auth.service";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: '',
        })

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.email, this.state.password).then(
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        message: resMessage
                    });
                }
            );
        }
    }

    render() {
        return (
            <div>
                <Form
                    className={styles.block}
                    onSubmit={this.handleLogin}
                    ref={c => {
                        this.form = c;
                    }}
                >
                    <div className={styles.head}/>
                    <img className={styles.logo} src={UDVLogo} alt="udv"/>

                    <Input
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        placeholder='Почта'
                    />

                    <Input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        placeholder='Пароль'
                    />

                    <button className={styles.button}>
                        <span>Войти</span>
                    </button>

                    <CheckButton
                        style={{display: 'none'}}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    />
                </Form>
            </div>
        )
    }
}


// import React from 'react';
// import styles from './Login.module.css'
//
// const Login = (props) => {
//     return (
//         <div>
//             <form className={styles.block}>
//                 <div className={styles.head}/>
//                 <img className="logo" src="images/logo.svg" alt="udv"/>
//                 <div>
//                     <input type="email" name="login" placeholder="Почта"/>
//                     <input type="password" name="password" placeholder="Пароль"/>
//                 </div>
//                 <div className={styles.buttons}>
//                     <button className={styles.button}>
//                         Войти
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
//
// export default Login;