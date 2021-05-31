import React, {useState} from "react";
import {useAuth} from "../../contexts/AuthContext";
import {Redirect, useHistory} from "react-router-dom";

import styles from "./Profile.module.css";

export default function Profile() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory();

    function formatDate(date) {
        let day = String(date.getDate());
        let month = String(date.getMonth() + 1);
        let year = String(date.getFullYear());

        return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
    }

    // async function handleLogout() {
    //     setError('');
    //
    //     try {
    //         await logout();
    //         history.push("/login");
    //     } catch {
    //         setError('Ошибка при выходе из системы')
    //     }
    // }

    return (
        <div className={styles.block}>
            <div
                className={styles.name}>{currentUser.user.surname} {currentUser.user.name} {currentUser.user.patronymic}
            </div>
            <p>ID: <span className={styles.info}>{currentUser.user.id}</span></p>
            <p>Почта: <span className={styles.info}>{currentUser.user.email}</span></p>
            <p>Роль: <span
                className={styles.info}>{currentUser.user.is_superuser ? "разработчик" : "владелец организации"}</span>
            </p>
            <p>Статус: <span
                className={styles.info}>{currentUser.user.is_active ? "активный" : "неактивный"}</span>
            </p>
            <p>Дата регистрации: <span
                className={styles.info}>{formatDate(new Date(currentUser.user.date_reg))}</span></p>
            <button onClick={logout}>Выйти</button>
        </div>
    )
}
