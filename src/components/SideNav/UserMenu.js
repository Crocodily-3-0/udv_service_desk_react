import React from "react";

import styles from "../SideNav/Sidenav.module.css"

import logo from "../../images/logo.svg";
import reports from "../../images/appeal.svg";
import staff from "../../images/staff.svg";
import companies from "../../images/companies.svg";
import stat from "../../images/stat.svg";
import dict from "../../images/dicts.svg";

import {NavLink} from "react-router-dom";

export default function UserMenu() {
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
                        <img className={styles.appeal} src={reports} alt="appeal"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/employees'>
                        <img className={styles.staff} src={staff} alt="staff"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/company_info'>
                        <img className={styles.settings} src={dict} alt="settings"/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}