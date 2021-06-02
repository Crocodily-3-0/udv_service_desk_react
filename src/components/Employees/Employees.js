import React from "react";

import styles from "./Employees.module.css"
import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Employees() {

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Список сотрудников"/>
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
                        <th className={styles.sColumn}>Статус</th>
                        <th className={styles.tColumn}>Электронная почта</th>
                        <th className={styles.foColumn}>Лицензия</th>
                        <th className={styles.fiColumn}>Обращения</th>
                    </tr>
                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>Иванов Иван</p>
                        </td>
                        <td className={styles.sColumn}>
                            <div className={`${styles.status} ${styles.acting}`}>Действующий</div>
                        </td>
                        <td className={styles.tColumn}><p>Ivanov@ivan.ru</p></td>
                        <td className={styles.foColumn}><p>№1453231</p></td>
                        <td className={styles.fiColumn}><p>15 обращений</p></td>
                    </tr>
                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>Кочергин Константин</p>
                        </td>
                        <td className={styles.sColumn}>
                            <div className={`${styles.status} ${styles.acting}`}>Действующий</div>
                        </td>
                        <td className={styles.tColumn}><p>Kochergin@kostya.ru</p></td>
                        <td className={styles.foColumn}><p>№1453231</p></td>
                        <td className={styles.fiColumn}><p>1 обращение</p></td>
                    </tr>
                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>Иванченко Иван</p>
                        </td>
                        <td className={styles.sColumn}>
                            <div className={`${styles.status} ${styles.noacting}`}>Не действующий</div>
                        </td>
                        <td className={styles.tColumn}><p>Ivanchenko@ivan.ru</p></td>
                        <td className={styles.foColumn}><p>№1453231</p></td>
                        <td className={styles.fiColumn}><p>3 обращения</p></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}