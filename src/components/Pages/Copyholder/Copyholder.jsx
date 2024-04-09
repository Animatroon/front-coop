import React from 'react';
import Navigation from "../../Navigation/Navigation";

import './copyholder.scss';
import { Personal } from '../../Global/Images';
import { Table } from 'react-bootstrap';
import Search from '../../Search/Search';

const Tr = () => {

    return (
        <tr>
        <td>№1</td>
        <td>Иванов Иван Иванович</td>
        <td>Иванов Иван Иванович</td>
        <td>Иванов Иван Иванович</td>
        <td>Все композиции</td>
        <td>А/Ф 244</td>
        <td>22.01.2024</td>
    </tr>  
    )
}


const Copyholder = () => {
    return (
        <div className="copyholder">
            <Navigation suptitle={"НАШИ РЕЕСТРЫ"} title={"КАТАЛОГ правообладателей"} nav1={"Каталог"}/>
            <div className="copyholder__inner box">
            <Search id='copyholder'/>


                <Table striped bordered className='copyholder__table'>
                <thead>
                    <tr>
                    <th>№</th>
                    <th>Псевдоним</th>
                    <th>ФИО (Исполнителя)</th>
                    <th>Физ. лицо</th>
                    <th>Репертуар</th>
                    <th>№ Договора</th>
                    <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    <Tr />
                    <Tr />
                    <Tr />
                    <Tr />
                    <Tr />
                    <Tr />
                    <Tr />
                    <Tr />
                    <Tr />

                </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Copyholder;

