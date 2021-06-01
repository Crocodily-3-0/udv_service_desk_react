import React from "react";

import styles from "../Reports/Reports.module.css"

import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Reports() {

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Обращения"/>
            <div className={styles.content}>
                Обращения
            </div>
        </div>
    )
}