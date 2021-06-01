import React from "react";

import styles from "./Stat.module.css"
import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Stats() {

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Статистика"/>
            <div className={styles.content}>
                Статистика
            </div>
        </div>
    )
}