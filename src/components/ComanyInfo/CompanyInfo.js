import React from "react";

import styles from "./CompanyInfo.module.css"
import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function CompanyInfo() {

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Информация об организации"/>
            <div className={styles.content}>
                Информация об организации
            </div>
        </div>
    )
}