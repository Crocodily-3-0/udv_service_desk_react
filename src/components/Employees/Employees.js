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
                Сотрудники
            </div>
        </div>
    )
}