import React from 'react';
import Navigation from '../../Navigation/Navigation';
import { Personal } from '../../Global/Images';

import { Link } from 'react-router-dom';

import styles from './myreq.module.scss';

import Search from '../../Search/Search';

const Req = () => {

    return (
        <tr>
        <td>№1</td>
        <td>22.01.2024</td>
        <td>Бухгалтерия</td>
        <td>Бухгалтерия</td>
        <td><a className={styles.req__open} href="">Открыть</a></td>

    </tr>  
    )
}


const MyReq = () => {
  return (
    <div className={styles.myreq}>
        <Navigation title={"Мои заявки"} nav1={"ФИО"}/>
        <div className={`${styles.myreq__inner} box`}>

            <div className={styles.sidebar}>
                <Link className={styles.sidebar__title} to={'/account'}><img src={Personal.profile} alt="" /> Мой профиль</Link>
                <div className={styles.sidebar__line}></div>
                <Link className={styles.sidebar__title} to={'/account/newrequest'}><img src={Personal.reqCreate} alt="" /> Создать новую заявку</Link>
                <div className={styles.sidebar__line}></div>
                <Link className={styles.sidebar__title} to={'/account/myrequest'}><img src={Personal.reqList} alt="" /> Мои заявки</Link>
            </div>

            <div className={styles.myreq__content}>
                <Search className={styles.myreq__search} id='myreq'/>

                <table className={styles.myreq__table}>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Дата создания</th>
                            <th>Тема</th>
                            <th>Категория</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    <Req/>
                    <Req/>
                    <Req/>
                    <Req/>
                    <Req/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default MyReq
