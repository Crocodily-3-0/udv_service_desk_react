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
                Список организаций
            </div>
        </div>
    )
}