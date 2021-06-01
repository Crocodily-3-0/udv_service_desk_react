import React from "react";

import styles from "../SideNav/Sidenav.module.css"

import logo from "../../images/logo.svg";
import reports from "../../images/appeal.svg";
import staff from "../../images/staff.svg";
import companies from "../../images/companies.svg";
import stat from "../../images/stat.svg";
import dict from "../../images/dicts.svg";

import {NavLink} from "react-router-dom";

export default function DevMenu() {

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
                    <NavLink to='/developers'>
                        <img className={styles.staff} src={staff} alt="staff"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/companies'>
                        <img className={styles.companies} src={companies} alt="companies"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/stats'>
                        <img className={styles.stat} src={stat} alt="stat"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dictionaries'>
                        <img className={styles.dicts} src={dict} alt="dicts"/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}