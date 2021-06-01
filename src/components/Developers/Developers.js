import React from "react";
import {useAuth} from "../../contexts/AuthContext";

import styles from "./Developers.module.css"
import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";
import Unauthorized from "../Unauthorized";

export default function Developers() {
    const {currentUser} = useAuth();

    return (
        <div>
            {currentUser.user.is_superuser ?
                <div className={styles.navigation}>
                    <SideNav/>
                    <HeaderNav pageName="Список разработчиков"/>
                    <div className={styles.content}>
                        Список разработчиков
                    </div>
                </div> :
                <Unauthorized/>}
        </div>
    )
}