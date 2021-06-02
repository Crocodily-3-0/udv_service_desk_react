import React from "react";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";

import styles from "../Report/Report.module.css"

import arrow from "../../images/arrow.svg"
import star from "../../images/star.svg"
import stargold from "../../images/stargold.svg"

import SideNav from "../SideNav/SideNav";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Report() {
    const {currentUser} = useAuth();
    // const history = useHistory();
    // const handleRowClick = () => {
    //     history.push(`/report`);
    // }

    return (
        <div className={styles.navigation}>
            <SideNav/>
            <HeaderNav pageName="Добавление нового сотрудника"/>
            <div className={styles.content}>
                <Link to='/reports'>
                    <img src={arrow} alt="arrow"/>Назад
                </Link>
                <div className={styles.thatReport}>
                    <div className={styles.name}>
                        <h1>Добавление нового сотрудника</h1>
                        Иванов Иван
                        <span> обратился 22 апреля 2021</span>
                    </div>
                    <div className={styles.rating}>
                        <img src={stargold} alt="star gold"/>
                        <img src={stargold} alt="star gold"/>
                        <img src={stargold} alt="star gold"/>
                        <img src={stargold} alt="star gold"/>
                        <img src={stargold} alt="star gold"/>
                    </div>
                    <div className={styles.text}>
                        Возникли проблемы при добавлении нового сотрудника в систему.<br/>
                        Срок лицензии ещё не истёк, прилагаю документы.
                    </div>
                    <div className={styles.attachment}>
                        <p>2 вложения:</p>
                        <a className={styles.firstVlosh}>скриншот.png</a>
                        <a>договор.txt</a>
                    </div>
                </div>
                <div className={styles.comments}>
                    <h1>Комментарии</h1>
                    <div className={styles.leftCom}>
                        <div className={styles.comment}>
                            <div className={styles.name}>
                                <h1>Пузанов Игорь</h1>
                                <span>22 апреля 2021</span>
                            </div>
                            <div className={styles.text}>
                                Добавил новые скриншоты, чтобы стало понятнее, в чём проблема
                            </div>
                        </div>
                        <div className={styles.comment}>
                            <div className={styles.name}>
                                <h1>Иванов Иван</h1>
                                <span>22 апреля 2021</span>
                            </div>
                            <div className={styles.text}>
                                Спасибо!
                            </div>
                        </div>
                    </div>
                    <div className={styles.area}>
                        <textarea placeholder="Комментарий" id="comment" name="comment"/>
                        <input type="submit" name="send" value="Отправить"/>
                        <div className={styles.chousfile}>
                            <label htmlFor="file" className={styles.chous}>Прикрепить файл</label>
                            <input type="file" id="file"/>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <h1>Информация:</h1>
                    <table>
                        <tr>
                            <td className={styles.start}>Дата обращения:</td>
                            <td>22 апреля 2021</td>
                        </tr>
                        <tr>
                            <td className={styles.start}>Дата обработки:</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td className={styles.start}>Последние<br/>изменения:</td>
                            <td>22 апреля 2021</td>
                        </tr>
                        <tr>
                            <td className={styles.start}>ПО:</td>
                            <td><p className={styles.status}>DATAPK</p></td>
                        </tr>
                        <tr>
                            <td className={styles.start}>Модуль:</td>
                            <td>Техническое обслуживание</td>
                        </tr>
                        <tr>
                            <td className={styles.start}>Статус:</td>
                            <td><p className={styles.status}>Зарегистрировано</p></td>
                        </tr>
                        <tr>
                            <td className={styles.start}><p>Ответственный:</p></td>
                            <td className={styles.otvetsvenni}>
                                <p>Пётр Петров</p>
                            </td>
                        </tr>
                    </table>
                    <h1>Управление:</h1>
                    <table>
                        <tr>
                            <td className={`${styles.start} ${styles.control}`}>ПО:</td>
                            <td>
                                <select id={styles.PO}>
                                    <option>DATAPK</option>
                                    <option>Eplat4m</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className={`${styles.start} ${styles.control}`}>Модуль ПО:</td>
                            <td>
                                <select id={styles.ModalPO}>
                                    <option>Техническое обслуживание</option>
                                    <option>smth else</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className={`${styles.start} ${styles.control}`}>Статус:</td>
                            <td>
                                <select id={styles.ModalP}>
                                    <option>Зарегистрировано</option>
                                    <option>Переоткрыто</option>
                                    <option>В работе</option>
                                    <option>Закрыто</option>
                                    <option>Отклонено</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className={`${styles.start} ${styles.control}`}>Ответственный:</td>
                            <td>
                                <select id={styles.ModalPO}>
                                    <option>Пётр Петров</option>
                                    <option>smth else</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className={`${styles.start} ${styles.control}`}>Важность:</td>
                            <td>
                                <div className={`${styles.rating} ${styles.ratingControl}`}>
                                    <img src={stargold} alt="star gold"/>
                                    <img src={stargold} alt="star gold"/>
                                    <img src={stargold} alt="star gold"/>
                                    <img src={stargold} alt="star gold"/>
                                    <img src={stargold} alt="star gold"/>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <input type="submit" name="update" value="Обновить"/>
                </div>
            </div>
        </div>
    )
}