import React from "react";
import {useAuth} from "../../contexts/AuthContext";

import styles from "./Stat.module.css"
import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";
import Unauthorized from "../Unauthorized";

export default function Stats() {
    const {currentUser} = useAuth();

    return (
        <div>
            {currentUser.user.is_superuser ?
                <div className={styles.navigation}>
                    <SideNav/>
                    <HeaderNav pageName="Статистика"/>
                    <div className={styles.content}>
                        Статистика
                    </div>
                </div> :
                <Unauthorized/>}
        </div>
    )
}