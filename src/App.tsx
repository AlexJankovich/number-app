import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import './App.css';
import {Description} from './Common/Description/Description';
import {Square} from './Common/Square/Square';
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
import {Energy, KarmicText, SomeoneDestiny, SomeonePower, TalentsText} from './assets/text';
import {useForm} from 'react-hook-form';

function App() {

    const [newData, setNewData] = useState<Array<string>>([])

    type InputsTypes = {
        day: string
        month: string
        year: string
    }

    const {register, handleSubmit, watch, errors} = useForm<InputsTypes>()

    const calcKart = (data: InputsTypes) => {
        console.log(Object.values(data))
        setNewData(Object.values(data))
    }

    console.log(newData)
    return (
        <>
            <div className='input'>
                <form onSubmit={handleSubmit(calcKart)}>
                    <label htmlFor="">Введите день рождение</label>
                    <div style={{color: 'red'}}>{errors?.day?.message}</div>
                    <input name='day'
                           type='number'
                           ref={register({
                               required: {value: true, message: 'Поле не должно быть пустым'},
                               max: {value: 31, message: 'Введите число от 1 до 31'},
                               min: {value: 1, message: 'Введите число от 1 до 31'}
                           })}/>
                    <label htmlFor="">Введите месяц рождение</label>

                    <div style={{color: 'red'}}>{errors?.month?.message}</div>
                    <input name='month'
                           type='number'
                           ref={register({
                               required: {value: true, message: 'Поле не должно быть пустым'},
                               max: {value: 12, message: 'Введите число от 1 до 12'},
                               min: {value: 1, message: 'Введите число от 1 до 12'}
                           })}/>

                    <label htmlFor="">Введите год рождение</label>

                    <div style={{color: 'red'}}>{errors?.year?.message}</div>
                    <input name='year'
                           type='number'
                           ref={register({
                               required: {value: true, message: 'Поле не должно быть пустым'},
                               max: {value: 3000, message: 'Введите число от 1 до 3000'},
                               min: {value: 0, message: 'Введите число от 1 до 3000'}
                           })}/>

                    <div>
                        <button type='submit'> посчитать</button>
                    </div>
                </form>
            </div>
            <div className='wrapper'>
                <div className='squares'>
                    <div className='square'>
                        <Square Data={DataObj(newData)}/>
                    </div>
                </div>
            </div>
            <>
                    <div className='description'>
                        {newData.length === 3 ?
                            <Description
                                Data={TalentsArray(TalentsVar, DataObj, newData, TalentsText)}
                                title={'1. Таланты по дате рождения:'}
                            /> : null}
                    </div>
                    <div className='description'>
                        {newData.length === 3 ? <Description
                            Data={TalentsArray(SomeonePowerVar, DataObj, newData, SomeonePower)}
                            title={'2. Зона комфорта (ресурса), вход в личную силу-успех (какие действия открывают и что именно открывается)'}
                        /> : null}
                    </div>
                    <div className='description'>
                        {newData.length === 3 ? <Description
                                Data={TalentsArray(KarmicVar, DataObj, newData, KarmicText)}
                                title={'5. Карма по предыдущим жизням (сначала идёт приблизительное описание того, что там было)'}
                            />
                            : null}
                    </div>
                </>
        </>
    );
}

export default App;
