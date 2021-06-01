import React from "react";
import {useAuth} from "../../contexts/AuthContext";

import styles from "./Dicts.module.css"
import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";
import Unauthorized from "../Unauthorized";

export default function Dicts() {
    const {currentUser} = useAuth();

    return (
        <div>
            {currentUser.user.is_superuser ?
                <div className={styles.navigation}>
                    <SideNav/>
                    <HeaderNav pageName="Справочники"/>
                    <div className={styles.content}>
                        Справочники
                    </div>
                </div> :
                <Unauthorized/>}
        </div>
    )
}