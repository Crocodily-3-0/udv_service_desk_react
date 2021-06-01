import React from "react";

import styles from "./Orgs.module.css"

import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Orgs() {

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Список организаций"/>
            <div className={styles.content}>
                <form className="search">
                    <input name="search" placeholder="Поиск" type="search"/>
                </form>
                <button className={styles.addButton} type="submit" name="report">
                    + Добавить организацию
                </button>
                <table className={styles.table}>
                    <tr className={styles.head}>
                        <th className={styles.emptyColumn}/>
                        <th className={styles.fColumn}>Организация</th>
                        <th className={styles.sColumn}>Статус</th>
                        <th className={styles.tColumn}>Владелец</th>
                        <th className={styles.foColumn}>Представители</th>
                    </tr>
                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>ООО "Крокодилы"</p>
                        </td>
                        <td className={styles.sColumn}>
                            <div className={`${styles.status} ${styles.acting}`}>Действующая</div>
                        </td>
                        <td className={styles.tColumn}>
                            <p>Иванов Иван</p>
                        </td>
                        <td className={styles.foColumn}><p>29 сотрудников</p></td>
                    </tr>
                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>ИП Кочергин Константин</p>
                        </td>
                        <td className={styles.sColumn}>
                            <div className={`${styles.status} ${styles.acting}`}>Действующая</div>
                        </td>
                        <td className={styles.tColumn}>
                            <p>Кочергин Константин</p>
                        </td>
                        <td className={styles.foColumn}><p>8 сотрудников</p></td>
                    </tr>
                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>ООО "Крокодилы"</p>
                        </td>
                        <td className={styles.sColumn}>
                            <div className={`${styles.status} ${styles.noacting}`}>Не действующая</div>
                        </td>
                        <td className={styles.tColumn}>
                            <p>Иванов Иван</p>
                        </td>
                        <td className={styles.foColumn}><p>5 сотрудников</p></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}