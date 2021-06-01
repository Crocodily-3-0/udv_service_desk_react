import React, {useState} from "react";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";

import styles from "./Profile.module.css";

import arrow from "../../images/arrow.svg"
import edit from "../../images/edit.svg"

import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Profile() {
    const {currentUser, userRole} = useAuth();

    function formatDate(date) {
        let day = String(date.getDate());
        let month = String(date.getMonth() + 1);
        let year = String(date.getFullYear());

        return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
    }

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Личный кабинет"/>
            <div className={styles.content}>
                <div className={styles.thatReport}>
                    <div className={styles.user}>
                        <div className={styles.name}>
                            <div className={styles.nametop}>
                                <h1>{currentUser.user.surname} {currentUser.user.name} {currentUser.user.patronymic}</h1>
                                <div>
                                    <img className={styles.edit} src={edit} alt="edit"/>
                                </div>
                            </div>
                            {userRole(currentUser.user) !== "разработчик" ?
                                <div
                                    className={`${styles.status} ${styles.acting}`}>
                                    {currentUser.user.is_active ? "Действующий" : "Не активный"}
                                </div> :
                                null
                            }
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
                            {userRole(currentUser.user) !== "разработчик" ?
                                <tr>
                                    <td className={styles.start}>Роль:</td>
                                    <td>{userRole(currentUser.user)}</td>
                                </tr>
                                : null
                            }
                            {userRole(currentUser.user) !== "разработчик" ?
                                <tr>
                                    <td className={styles.start}>Лицензия:</td>
                                    <td>Пока что нет</td>
                                </tr> :
                                null
                            }
                        </table>
                        <div className={styles.control}>
                            <h1>Управление:</h1>
                            <button className={styles.first} type="submit" name="change">
                                Сменить пароль
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
