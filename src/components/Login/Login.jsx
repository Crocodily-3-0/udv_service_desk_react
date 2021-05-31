import React, {useRef, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

import styles from "./Login.module.css";
import UDVLogo from "../../images/logo.svg";

export default function Login() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            const checkLogin = await login(emailRef.current.value, passwordRef.current.value)
            setLoading(false);
            if (checkLogin && checkLogin.error) {
                return setError(checkLogin.error);
            }
            history.push('/')
        } catch (error) {
            setError('Ошибка при входе в систему')
        }
    }

    return (
        <div>
            <form className={styles.block} onSubmit={handleSubmit}>
                <div className={styles.head}/>
                <img className={styles.logo} src={UDVLogo} alt="udv"/>
                <div>
                    <input type="email" ref={emailRef} name="email" placeholder="Почта"/>
                    <input type="password" ref={passwordRef} name="password" placeholder="Пароль"/>
                </div>
                <div>
                    <Link to="/reset_password" className={styles.forgot}>Забыли пароль?</Link>
                    <button disabled={loading} className={styles.button} type="submit" name="login">Войти</button>
                </div>
            </form>
        </div>
    )
}

