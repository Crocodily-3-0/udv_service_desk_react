import React from "react";

import styles from "./Dicts.module.css"
import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Dicts() {

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