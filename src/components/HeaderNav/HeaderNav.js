import React, {useState} from "react";
import {useAuth} from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom";

import styles from "../HeaderNav/HeaderNav.module.css"

import avatar from "../../images/avatar.svg";
import exit from "../../images/exit.svg";

import {Link} from "react-router-dom";

export default function HeaderNav(props) {
    const [error, setError] = useState('');
    const {logout} = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.push("/login");
        } catch {
            setError('Ошибка при выходе из системы')
        }
    }

    return(
        <div className={styles.navbar}>
            <div className={styles.page}>{props.pageName}</div>
            <div className={styles.rightMenu}>
                <ul>
                    <li>
                        <Link to='/profile'>
                            <img className={styles.ava} src={avatar} alt="avatar"/>
                        </Link>
                    </li>
                    <li>
                        <div className={styles.logout} onClick={handleLogout}>
                            <img src={exit} alt="exit"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}