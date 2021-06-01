import React from "react";
import {NavLink, useLocation} from "react-router-dom";

import styles from "../SideNav/Sidenav.module.css"

import logo from "../../images/logo.svg";
import reports from "../../images/appeal.svg";
import staff from "../../images/staff.svg";
import companies from "../../images/companies.svg";
import stat from "../../images/stat.svg";
import dict from "../../images/dicts.svg";

export default function DevMenu() {
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
                        <img className={styles.logo} src={logo} alt="udv"/>
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
                    <NavLink to='/developers'>
                        <img className={getClassName(styles.staff, "developers")}
                             src={staff}
                             alt="staff"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/companies'>
                        <img className={getClassName(styles.companies, "companies")}
                             src={companies}
                             alt="companies"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/stats'>
                        <img className={getClassName(styles.stat, "stats")}
                             src={stat}
                             alt="stat"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dictionaries'>
                        <img className={getClassName(styles.dict, "dictionaries")}
                             src={dict}
                             alt="dict"/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}