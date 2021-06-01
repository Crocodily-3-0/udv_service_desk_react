import React from "react";
import {useAuth} from "../../contexts/AuthContext";

import styles from "../SideNav/Sidenav.module.css"

import DevMenu from "./DevMenu";
import UserMenu from "./UserMenu";

export default function SideNav() {
    const {currentUser} = useAuth();

    return (
        <div className={styles.main}>
            {currentUser.user.is_superuser ? <DevMenu/> : <UserMenu/>}
        </div>
    )
}