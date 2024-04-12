import React from 'react';
import Navigation from "../../Navigation/Navigation";

import './reestr.scss';
import { Table } from 'react-bootstrap';
import Search from '../../Search/Search';

const TableSection = () => {

    // return (
        
    //     <tr>
    //         <td className="city">Алматы</td>
    //     </tr>
    //     <tr>
    //     <td>№1</td>
    //     <td>Иванов Иван Иванович</td>
    //     <td>22.01.2024</td>
    // </tr>  
    // )
}


const Reestr = () => {
    return (
        <div className="reestr">
            <Navigation suptitle={"НАШИ РЕЕСТРЫ"} title={"РЕЕСТР ПОЛЬЗОВАТЕЛЕЙ"} nav1={"Каталог"}/>
            <div className="reestr__inner box">
            <Search id='reestr'/>


                <Table bordered className='reestr__table'>
                <thead>
                    <tr>
                    <th>№</th>
                    <th>Пользователи</th>
                    <th>Дата начала договора</th>
                    </tr>
                </thead>
                <tbody>


                </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Reestr;

