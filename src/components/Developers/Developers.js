import React from "react";
import {useAuth} from "../../contexts/AuthContext";

import styles from "./Developers.module.css"

import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";
import Unauthorized from "../Unauthorized";

export default function Developers() {
    const {currentUser} = useAuth();

    return (
        <div>
            {currentUser.user.is_superuser ?
                <div className={styles.navigation}>
                    <SideNav/>
                    <HeaderNav pageName="Список разработчиков"/>
                    <div className={styles.content}>
                        <form className={styles.search}>
                            <input name="search" placeholder="Поиск" type="search"/>
                        </form>
                        <button className={styles.addButton} type="submit" name="report">
                            + Добавить сотрудника
                        </button>
                        <table className={styles.table}>
                            <tr className={styles.head}>
                                <th className={styles.emptyColumn}/>
                                <th className={styles.fColumn}>Сотрудник</th>
                                <th className={styles.tColumn}>Электронная почта</th>
                                <th className={styles.fiColumn}>В работе</th>
                            </tr>
                            <tr className={styles.report1}>
                                <td className={styles.emptyColumn}/>
                                <td className={styles.fColumn}>
                                    <p>Иванов Иван</p>
                                </td>
                                <td className={styles.tColumn}><p>Ivanov@ivan.ru</p></td>
                                <td className={styles.fiColumn}><p>15 обращений</p></td>
                            </tr>
                            <tr className={styles.report1}>
                                <td className={styles.emptyColumn}/>
                                <td className={styles.fColumn}>
                                    <p>Кочергин Константин</p>
                                </td>
                                <td className={styles.tColumn}><p>Kochergin@kostya.ru</p></td>
                                <td className={styles.fiColumn}><p>1 обращение</p></td>
                            </tr>
                            <tr className={styles.report1}>
                                <td className={styles.emptyColumn}/>
                                <td className={styles.fColumn}>
                                    <p>Иванченко Иван</p>
                                </td>
                                <td className={styles.tColumn}><p>Ivanchenko@ivan.ru</p></td>
                                <td className={styles.fiColumn}><p>3 обращения</p></td>
                            </tr>
                        </table>
                    </div>
                </div> :
                <Unauthorized/>}
        </div>
    )
}