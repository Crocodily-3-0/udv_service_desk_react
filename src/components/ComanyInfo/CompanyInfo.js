import React from "react";

import styles from "./CompanyInfo.module.css"
import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";
import edit from "../../images/edit.svg";

export default function CompanyInfo() {

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Информация об организации"/>
            <div className={styles.content}>
                <div className={styles.organization}>
                    <div className={styles.user}>
                        <div className={styles.name}>
                            <div className={styles.nametop}>
                                <h1>ООО "Крокодилы"</h1>
                                <div>
                                    <img className={styles.edit} src={edit} alt="edit"/>
                                </div>
                            </div>
                            <div className={`${styles.status} ${styles.acting}}`}>Действующая</div>
                        </div>
                    </div>
                    <div className={styles.personalInfo}>
                        <table>
                            <tr>
                                <td className={styles.start}>Владелец:</td>
                                <td className={styles.otvetsvenni}>
                                    <p>Иванов Иван</p>
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td className={styles.start}>Лицензия:</td>
                                <td className={styles.license}>
                                    <p className={styles.tdText}>№1453231</p>
                                    <p className={styles.status}>DATAPK</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={`${styles.start} ${styles.dop}}`}>Пользователи:</td>
                                <td>14/25</td>
                            </tr>
                            <tr>
                                <td className={`${styles.start} ${styles.dop}}`}>Истекает:</td>
                                <td>11 января 2022</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td className={styles.start}>Лицензия:</td>
                                <td className={styles.license}>
                                    <p className={styles.tdText}>№1453231</p>
                                    <p className={styles.status}>DATAPK</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={`${styles.start} ${styles.dop}}`}>Пользователи:</td>
                                <td>14/25</td>
                            </tr>
                            <tr>
                                <td className={`${styles.start} ${styles.dop}}`}>Истекает:</td>
                                <td>11 января 2022</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className={styles.thatReport}>
                    <div className={styles.user}>
                        <div className={styles.name}>
                            <div className={styles.nametop}>
                                <h1>Иванов Иван Иванович</h1>
                            </div>
                            <div className={`${styles.status} ${styles.actingOwn}`}>Действующий</div>
                        </div>
                    </div>
                    <div className={styles.personalInfo}>
                        <table>
                            <tr>
                                <td className={styles.start}>Электронная почта:</td>
                                <td>Ivanov@ivan.ru</td>
                            </tr>
                            <tr>
                                <td className={styles.start}>Дата регистрации:</td>
                                <td>02.02.2020</td>
                            </tr>
                            <tr>
                                <td className={styles.start}>Роль</td>
                                <td>Владелец</td>
                            </tr>
                            <tr>
                                <td className={styles.start}>Лицензия:</td>
                                <td>№1453231</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}