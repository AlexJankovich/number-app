import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Description} from './Common/Description/Description';
import {Square} from "./Common/Square/Square";
import {
    DataObj, KarmicVar, SomeonePowerVar,
    // DataObj2,
    // EnergyVar,
    // KarmicVar,
    // Someone,
    // SomeonePowerVar,
    TalentsArray,
    TalentsVar
} from './Utils/data';
import {Energy, KarmicText, SomeoneDestiny, SomeonePower, TalentsText} from "./assets/text";

function App() {
    const [date, setDate] = useState('')

    let str = date.split('-')

    const [newData, setNewData] = useState<Array<string>>([])

    const calcKart = () => {
        setNewData([...str])
    }

    const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.currentTarget.value)
    }

    return (
        <>
            <div className='input'>
                <h1>Введите дату рождения</h1>
                <input type="date" onChange={onChangeDate}/>
                <button onClick={calcKart}> посчитать</button>
            </div>
            <div className='wrapper'>
                <div className='squares'>
                    <div className='square'>
                        <Square Data={DataObj(newData)}/>
                    </div>
                </div>
            </div>
            <div className='description'>
                {newData.length===3?<Description
                    Data={TalentsArray(TalentsVar, DataObj, newData, TalentsText)}
                    title={'1. Таланты по дате рождения:'}
                />:null}
            </div>
            <div className='description'>
                {newData.length===3?<Description
                    Data={TalentsArray(SomeonePowerVar, DataObj, newData, SomeonePower)}
                    title={'2. Зона комфорта (ресурса), вход в личную силу-успех (какие действия открывают и что именно открывается)'}
                />:null}
            </div>
            <div className='description'>
                {newData.length===3?<Description
                    Data={TalentsArray(KarmicVar, DataObj, newData, KarmicText)}
                    title={'5. Карма по предыдущим жизням (сначала идёт приблизительное описание того, что там было)'}
                />:null}
            </div>
            {/*<div className='description'>*/}
            {/*    {newData.length===3?<Description*/}
            {/*        Data={TalentsArray(Someone, DataObj2, newData, SomeoneDestiny)}*/}
            {/*        title={'Личное предназначение'}*/}
            {/*    />:null}*/}
            {/*</div>*/}
            {/*<div className='description'>*/}
            {/*    {newData.length===3?<Description*/}
            {/*        Data={TalentsArray(EnergyVar, DataObj2, newData, Energy)}*/}
            {/*        title={'Энергия, которая сдерживает всё негативное в карте'}*/}
            {/*    />:null}*/}
            {/*</div>*/}
        </>
    );
}

export default App;
