import React from "react";

import styles from "./Developers.module.css"
import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Developers() {

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Список разработчиков"/>
            <div className={styles.content}>
                Список разработчиков
            </div>
        </div>
    )
}