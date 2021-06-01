import React, {useRef, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

import styles from "./ForgotPassword.module.css";
import UDVLogo from "../../images/logo.svg";

export default function ForgotPassword() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const {login} = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            // const checkLogin = await login(emailRef.current.value, passwordRef.current.value)
            setLoading(false);
            // if (checkLogin && checkLogin.error) {
            //     return setError(checkLogin.error);
            // }
            history.push('/reports')
        } catch (error) {
            setError('Ошибка при входе в систему')
        }
    }

    return (
        <div>
            {error && alert(error)}
            <form className={styles.block} onSubmit={handleSubmit}>
                <div className={styles.head}/>
                <img className={styles.logo} src={UDVLogo} alt="udv"/>
                <div className={styles.info}>
                    Чтобы получить новый пароль, укажите <br/> почту, использованную при регистрации
                </div>
                <div>
                    <input type="email" ref={emailRef} name="email" placeholder="Почта"/>
                </div>
                <div>
                    <Link to="/login" className={styles.forgot}>Отмена</Link>
                    <button disabled={loading} className={styles.button} type="submit" name="login">Отправить</button>
                </div>
            </form>
        </div>
    )
}

