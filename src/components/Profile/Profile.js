import React, {useState} from "react";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";

import styles from "./Profile.module.css";

import arrow from "../../images/arrow.svg"

import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Profile() {
    const [error, setError] = useState('');
    const {currentUser, logout, userRole} = useAuth();
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
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Личный кабинет"/>
            {error && alert(error)}
            <div className={styles.content}>
                <div className={styles.thatReport}>
                    <div className={styles.user}>
                        <div className={styles.name}>
                            <div className={styles.nametop}>
                                <h1>{currentUser.user.surname} {currentUser.user.name} {currentUser.user.patronymic}</h1>
                            </div>
                            <div
                                className={`${styles.status} ${styles.acting}`}>{currentUser.user.is_active ? "Действующий" : "Не активный"}
                            </div>
                        </div>
                    </div>
                    <div className={styles.personalInfo}>
                        <table>
                            <tr>
                                <td className={styles.start}>Электронная почта:</td>
                                <td>{currentUser.user.email}</td>
                            </tr>
                            <tr>
                                <td className={styles.start}>Дата регистрации:</td>
                                <td>{formatDate(new Date(currentUser.user.date_reg))}</td>
                            </tr>
                            <tr>
                                <td className={styles.start}>Роль:</td>
                                <td>{userRole(currentUser.user)}</td>
                            </tr>
                            <tr>
                                <td className={styles.start}>Лицензия:</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    {/*<div className={styles.block}>*/}
                    {/*    <div*/}
                    {/*        className={styles.name}>{currentUser.user.surname} {currentUser.user.name} {currentUser.user.patronymic}*/}
                    {/*    </div>*/}
                    {/*    <p>ID: <span className={styles.info}>{currentUser.user.id}</span></p>*/}
                    {/*    <p>Почта: <span className={styles.info}>{currentUser.user.email}</span></p>*/}
                    {/*    <p>Роль: <span*/}
                    {/*        className={styles.info}>{userRole(currentUser.user)}</span>*/}
                    {/*    </p>*/}
                    {/*    <p>Статус: <span*/}
                    {/*        className={styles.info}>{currentUser.user.is_active ? "активный" : "неактивный"}</span>*/}
                    {/*    </p>*/}
                    {/*    <p>Дата регистрации: <span*/}
                    {/*        className={styles.info}>{formatDate(new Date(currentUser.user.date_reg))}</span></p>*/}
                    {/*    <button onClick={handleLogout}>Выйти</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}
