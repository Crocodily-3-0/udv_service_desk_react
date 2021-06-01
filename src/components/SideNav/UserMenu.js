import React from "react";
import {NavLink, useLocation} from "react-router-dom";

import styles from "../SideNav/Sidenav.module.css"

import logo from "../../images/logo.svg";
import reports from "../../images/appeal.svg";
import staff from "../../images/staff.svg";
import settings from "../../images/settings.svg";

export default function UserMenu() {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");

    function getClassName(firstStyle, page) {
        return `${firstStyle} ${splitLocation[1] === page ? styles.active : ''}`;
    }

    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/reports'>
                        <img className={styles.logo}
                             src={logo}
                             alt="udv"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/reports'>
                        <img className={getClassName(styles.appeal, "reports")}
                             src={reports}
                             alt="appeal"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/employees'>
                        <img className={getClassName(styles.staff, "employees")}
                             src={staff}
                             alt="staff"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/company_info'>
                        <img className={getClassName(styles.settings, "company_info")}
                             src={settings}
                             alt="settings"/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}