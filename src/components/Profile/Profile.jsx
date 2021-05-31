import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import styles from "./Profile.module.css";

export default function Profile() {
    const [error, setError] = useState('');
    const { currentUser } = useAuth();

    function handleLogout() {

    }

    return(
        <div className={styles.block}>
            <div className={styles.name}>
                {currentUser.userData.surname}
                {currentUser.userData.name}
                {currentUser.userData.patronymic}
            </div>
            <p>ID: <span className={styles.info}>{currentUser.userData.id}</span></p>
            <p>Почта: <span className={styles.info}>{currentUser.userData.email}</span></p>
            {currentUser.userData.is_superuser ? <p>Роль: <span className={styles.info}>разработчик</span></p> : null}
            {currentUser.userData.is_owner}
            <p>Роль: <span className={styles.info}>владелец организации</span></p>
            {currentUser.userData.is_active}
            <p>Статус: <span className={styles.info}>активный</span></p>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    )
}
