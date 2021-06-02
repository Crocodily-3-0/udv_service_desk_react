import React, {useState} from "react";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";

import styles from "./Profile.module.css";

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
                                    <td>№1453231</td>
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
                {userRole(currentUser.user) !== "разработчик" ?
                    <div className={styles.organization}>
                        <div className={styles.user}>
                            <div className={styles.name}>
                                <div className={styles.nametop}>
                                    <h1>ООО "Крокодилы"</h1>
                                </div>
                                <div className={`${styles.status} ${styles.acting}`}>Действующая</div>
                            </div>
                        </div>
                        <div className={styles.personalInfo}>
                            <table>
                                <tr>
                                    <td className={styles.start}><p>Владелец:</p></td>
                                    <td className={styles.otvetsvenni}>
                                        <p>Кочергин Константин</p>
                                    </td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td className={styles.start}><p>Лицензия:</p></td>
                                    <td className={styles.license}>
                                        <p className={styles.tdText}>№1453231</p>
                                        <p className={styles.status}>DATAPK</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`${styles.start} ${styles.dop}`}><p>Пользователи:</p></td>
                                    <td><p>14/25</p></td>
                                </tr>
                                <tr>
                                    <td className={`${styles.start} ${styles.dop}`}><p>Истекает:</p></td>
                                    <td><p>11 января 2022</p></td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td className={styles.start}><p>Лицензия:</p></td>
                                    <td className={styles.license}>
                                        <p className={styles.tdText}>№1453231</p>
                                        <p className={styles.status}>DATAPK</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`${styles.start} ${styles.dop}`}><p>Пользователи:</p></td>
                                    <td><p>14/25</p></td>
                                </tr>
                                <tr>
                                    <td className={`${styles.start} ${styles.dop}`}><p>Истекает:</p></td>
                                    <td><p>11 января 2022</p></td>
                                </tr>
                            </table>
                        </div>
                    </div> : null}
            </div>
        </div>
    )
}
