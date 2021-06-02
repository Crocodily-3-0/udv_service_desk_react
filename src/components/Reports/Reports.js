import React from "react";
import {useAuth} from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom";

import styles from "../Reports/Reports.module.css"

import star from "../../images/star.svg"
import stargold from "../../images/stargold.svg"

import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Reports() {
    const {currentUser} = useAuth();
    const history = useHistory();
    const handleRowClick = () => {
        history.push(`/report`);
    }

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Обращения"/>
            <div className={styles.content}>
                <form className={styles.search}>
                    <input name="search" placeholder="Поиск" type="search"/>
                </form>
                <button className={styles.addButton} type="submit" name="report">
                    + Новое обращение
                </button>
                <table className={styles.table}>
                    <tr className={styles.head}>
                        <th className={styles.emptyColumn}/>
                        <th className={styles.fColumn}>Автор</th>
                        {currentUser.user.is_superuser ?
                            <th className={styles.f1Column}>Организация</th> : null}
                        <th className={styles.f2Column}>Важность</th>
                        <th className={styles.sColumn}>Тема</th>
                        <th className={styles.tColumn}>Ответственный</th>
                        <th className={styles.foColumn}>Статус</th>
                        <th className={styles.fiColumn}>ПО</th>
                        <th className={styles.siColumn}>Модуль</th>
                        <th className={styles.seColumn}>Дата создания</th>
                    </tr>

                    <tr className={styles.report1} onClick={()=> handleRowClick()}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>Иванов Иван</p>
                        </td>
                        {currentUser.user.is_superuser ?
                            <td className={styles.f1Column}>
                                <p>ООО "Крокодилы"</p>
                            </td> : null}
                        <td className={styles.f2Column}>
                            <img src={stargold} alt="star gold"/>
                            <img src={stargold} alt="star gold"/>
                            <img src={stargold} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                        </td>
                        <td className={styles.sColumn}><p>Добавление нового сотрудника</p></td>
                        <td className={styles.tColumn}>
                            <p>Пётр Петров</p>
                        </td>
                        <td className={styles.foColumn}>
                            <div className={styles.status}>Зарегистрировано</div>
                        </td>
                        <td className={styles.fiColumn}><p>DATAPK</p></td>
                        <td className={styles.siColumn}><p>Техническое обслуживание</p></td>
                        <td className={styles.seColumn}><p>22 апреля 2021</p></td>
                    </tr>

                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>Иванов Иван</p>
                        </td>
                        {currentUser.user.is_superuser ?
                            <td className={styles.f1Column}>
                                <p>ООО "Крокодилы"</p>
                            </td> : null}
                        <td className={styles.f2Column}>
                            <img src={stargold} alt="star gold"/>
                            <img src={stargold} alt="star gold"/>
                            <img src={stargold} alt="star gold"/>
                            <img src={stargold} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                        </td>
                        <td className={styles.sColumn}><p>Добавление нового сотрудника</p></td>
                        <td className={styles.tColumn}>
                            <p>Пётр Петров</p>
                        </td>
                        <td className={styles.foColumn}>
                            <div className={styles.status}>Зарегистрировано</div>
                        </td>
                        <td className={styles.fiColumn}><p>DATAPK</p></td>
                        <td className={styles.siColumn}><p>Техническое обслуживание</p></td>
                        <td className={styles.seColumn}><p>22 апреля 2021</p></td>
                    </tr>
                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>Иванов Иван</p>
                        </td>
                        {currentUser.user.is_superuser ?
                            <td className={styles.f1Column}>
                                <p>ООО "Крокодилы"</p>
                            </td> : null}
                        <td className={styles.f2Column}>
                            <img src={stargold} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                        </td>
                        <td className={styles.sColumn}><p>Добавление нового сотрудника</p></td>
                        <td className={styles.tColumn}>
                            <p>Пётр Петров</p>
                        </td>
                        <td className={styles.foColumn}>
                            <div className={styles.status}>Зарегистрировано</div>
                        </td>
                        <td className={styles.fiColumn}><p>DATAPK</p></td>
                        <td className={styles.siColumn}><p>Техническое обслуживание</p></td>
                        <td className={styles.seColumn}><p>22 апреля 2021</p></td>
                    </tr>
                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>Иванов Иван</p>
                        </td>
                        {currentUser.user.is_superuser ?
                            <td className={styles.f1Column}>
                                <p>ООО "Крокодилы"</p>
                            </td> : null}
                        <td className={styles.f2Column}>
                            <img src={stargold} alt="star gold"/>
                            <img src={stargold} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                        </td>
                        <td className={styles.sColumn}><p>Добавление нового сотрудника</p></td>
                        <td className={styles.tColumn}>
                            <p>Пётр Петров</p>
                        </td>
                        <td className={styles.foColumn}>
                            <div className={styles.status}>Зарегистрировано</div>
                        </td>
                        <td className={styles.fiColumn}><p>DATAPK</p></td>
                        <td className={styles.siColumn}><p>Техническое обслуживание</p></td>
                        <td className={styles.seColumn}><p>22 апреля 2021</p></td>
                    </tr>
                    <tr className={styles.report1}>
                        <td className={styles.emptyColumn}/>
                        <td className={styles.fColumn}>
                            <p>Иванов Иван</p>
                        </td>
                        {currentUser.user.is_superuser ?
                            <td className={styles.f1Column}>
                                <p>ООО "Крокодилы"</p>
                            </td> : null}
                        <td className={styles.f2Column}>
                            <img src={stargold} alt="star gold"/>
                            <img src={stargold} alt="star gold"/>
                            <img src={stargold} alt="star gold"/>
                            <img src={stargold} alt="star gold"/>
                            <img src={star} alt="star gold"/>
                        </td>
                        <td className={styles.sColumn}><p>Добавление нового сотрудника</p></td>
                        <td className={styles.tColumn}>
                            <p>Пётр Петров</p>
                        </td>
                        <td className={styles.foColumn}>
                            <div className={styles.status}>Зарегистрировано</div>
                        </td>
                        <td className={styles.fiColumn}><p>DATAPK</p></td>
                        <td className={styles.siColumn}><p>Техническое обслуживание</p></td>
                        <td className={styles.seColumn}><p>22 апреля 2021</p></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}