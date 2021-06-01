import React from "react";
import {useAuth} from "../../contexts/AuthContext";

import styles from "./Dicts.module.css"

import moduls_po from "../../images/moduls_PO.svg"
import po from "../../images/PO.svg"
import licenses from "../../images/licenses.svg"

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
                        <div className={styles.tabs}>
                            <input type="radio" name="tab-btn" id="tab-btn-1" value=""/>
                            <label htmlFor="tab-btn-1">
                                <hr/>
                                <div>
                                    <img className={styles.tab_btn_img} src={moduls_po} alt="moduls_po"/>
                                    <p>Модули ПО</p>
                                </div>
                            </label>
                            <input type="radio" name="tab-btn" id="tab-btn-2" value=""/>
                            <label htmlFor="tab-btn-2">
                                <hr/>
                                <div className={styles.tab_btn_2_inside}>
                                    <img className={styles.tab_btn_img} src={po} alt="po"/>
                                    <p>Программное обеспечение</p>
                                </div>
                            </label>
                            <input type="radio" name="tab-btn" id="tab-btn-3" value=""/>
                            <label htmlFor="tab-btn-3">
                                <hr/>
                                <div>
                                    <img className={styles.tab_btn_img} src={licenses} alt="licenses"/>
                                    <p>Лицензии</p>
                                </div>
                            </label>
                            <div className={styles.dict_content} id="content-1">
                                <div className="dict_head">
                                    <form className="search" action="" method="get">
                                        <input name="search" placeholder="Поиск" type="search"/>
                                    </form>
                                    <form className="report">
                                        <input type="submit" name="report" value="+ Добавить модуль"/>
                                    </form>
                                </div>
                                <table className="table">
                                    <tbody>
                                    <tr className="head">
                                        <th className="name_modul">Название модуля</th>
                                    </tr>
                                    <tr className="modul_PO">
                                        <td className="name_modul">Техническая поддержка</td>
                                    </tr>
                                    <tr className="modul_PO">
                                        <td className="name_modul">Сбор статистики</td>
                                    </tr>
                                    <tr className="modul_PO">
                                        <td className="name_modul">Аналитика</td>
                                    </tr>
                                    <tr className="modul_PO">
                                        <td className="name_modul">Оповещения</td>
                                    </tr>
                                    <tr className="modul_PO">
                                        <td className="name_modul">Технический модуль</td>
                                    </tr>
                                    <tr className="modul_PO">
                                        <td className="name_modul">Сотрудники</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="dict_content" id="content-2">
                                <div className="dict_head">
                                    <form className="search">
                                        <input name="search" placeholder="Поиск" type="search"/>
                                    </form>
                                    <form className="report">
                                        <input type="submit" name="report" value="+ Добавить ПО"/>
                                    </form>
                                </div>
                                <table className="table">
                                    <tbody>
                                    <tr className="head">
                                        <th className="name_PO">Название ПО</th>
                                        <th className="moduls">Модули</th>
                                    </tr>
                                    <tr className="PO">
                                        <td className="name_PO">Eplat4m</td>
                                        <td className="moduls">Техническая поддержка, Аналитика,
                                            Оповещения
                                        </td>
                                    </tr>
                                    <tr className="PO">
                                        <td className="name_PO">DATAPK</td>
                                        <td className="moduls">Техническая поддержка, Аналитика, Оповещения,
                                            Технический модуль, Сотрудники
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="dict_content" id="content-3">
                                <div className="dict_head">
                                    <form className="search" action="" method="get">
                                        <input name="search" placeholder="Поиск" type="search"/>
                                    </form>
                                    <form className="report">
                                        <input type="submit" name="report" value="+ Добавить лицензию"/>
                                    </form>
                                </div>
                                <table className="table">
                                    <tbody>
                                    <tr className="head">
                                        <th className="license_number">Название модуля</th>
                                        <th className="name_PO">ПО</th>
                                        <th className="users">Пользователи</th>
                                        <th className="expires">Истекает</th>
                                    </tr>
                                    <tr className="license">
                                        <td className="license_number">#1453231</td>
                                        <td className="name_PO">DATAPAK</td>
                                        <td className="users">14/25</td>
                                        <td className="expires">11 января 2022</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> :
                <Unauthorized/>
            }
        </div>
    )
}