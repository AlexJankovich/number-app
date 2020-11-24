import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';
import {
  ABtTxXtext,
  BB,
  CDvVzZtext, DGFtext,
  EEsSwWtext,
  FamilyKarmicManText,
  FamilyKarmicWomanText,
  FF, Ftext,
  HH,
  KarmicText,
  KKtext,
  LmLL,
  NOmMpPText,
  OOtext,
  PQnNpPText,
  RrText,
  RT,
  S,
  SomeonePower,
  TalentsText,
  Utext,
  VWX,
  YZaA
} from './assets/text';
import {Description} from './Common/Description/Description';
import {DescriptionWithLink} from './Common/DescriptionWithLinks/DescriptionWithLink';
import {Square} from './Common/Square/Square';
import {
  ABtTxXvar,
  BBvar,
  CDvVzZvar,
  DataObj, DGFvar,
  EEsSwWvar,
  FamilyKarmicManVar,
  FamilyKarmicWomanVar,
  FFvar, Fvar,
  HHvar,
  KarmicVar, KKvar,
  LmLlVar,
  NOmMpPvar,
  OOVar,
  PQnNqQvar,
  RRvar,
  RTvar,
  SimpleTalentsArray,
  SomeonePowerVar,
  Svar,
  TalentsArray,
  TalentsVar, Uvar,
  VWXvar,
  YZaAvar,
} from './Utils/data';

function App() {

  const [newData, setNewData] = useState<Array<string>>([]);

  type InputsTypes = {
    day: string
    month: string
    year: string
  }

  const {register, handleSubmit, errors} = useForm<InputsTypes>();

  const calcKart = (data: InputsTypes) => {
    console.log(Object.values(data));
    setNewData(Object.values(data));
  };

  console.log(newData);
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
      {newData.length === 3
        ? <>
          <Description
            Data={TalentsArray(TalentsVar, DataObj, newData, TalentsText)}
            title={'1. Таланты по дате рождения:'}
          />
          <Description
            Data={TalentsArray(SomeonePowerVar, DataObj, newData, SomeonePower)}
            title={'2. Зона комфорта (ресурса), вход в личную силу-успех (какие действия открывают и что именно открывается)'}
          />
          <Description
            Data={TalentsArray(FamilyKarmicManVar, DataObj, newData, FamilyKarmicManText)}
            title={'3.1 Карма рода. Мужчины.'}
          />
          <Description
            Data={TalentsArray(FamilyKarmicWomanVar, DataObj, newData, FamilyKarmicWomanText)}
            title={'3.2 Карма рода. Женщины.'}
          />
          <Description
            Data={TalentsArray(LmLlVar, DataObj, newData, LmLL)}
            title={'4. Горловая чакра.'}
          />
          <DescriptionWithLink
            Data={SimpleTalentsArray(OOVar, DataObj, newData)}
            title={'4.1 Это число энергии, которое сдерживает открытие горловой чакры.'}
            content={OOtext}
          />
          <DescriptionWithLink
            Data={SimpleTalentsArray(DGFvar, DataObj, newData)}
            title={'5 Карма по предыдущим жизням (сначала идёт приблизительное описание того, что там было)'}
            content={DGFtext}
          />
          <Description
            Data={TalentsArray(KarmicVar, DataObj, newData, KarmicText)}
            title={'5.1 Карма по предыдущим жизням '}
          />
          <Description
            Data={TalentsArray(Fvar, DataObj, newData, Ftext)}
            title={'5.2 Кармические задачи '}
          />
          <Description
            Data={TalentsArray(Uvar, DataObj, newData, Utext)}
            title={'5.3 Линия оношений '}
          />
          <Description
            Data={TalentsArray(Svar, DataObj, newData, S)}
            title={'6. Выход из отношений (почему могут быть расставания). Что блокирует деньги, на что тратятся деньги.\n' +
            'И эта цифра-энергия является числом, которое стоит на сексуальной чакре\n'}
          />
          <Description
            Data={TalentsArray(RTvar, DataObj, newData, RT)}
            title={'7. Деньги. Что их приносит. Сначала идёт описание энергии на входе линии денег, она же сексуальная чакра - одна из цифр на ней). Далее "энергия в центре линии денег)'}
          />
          <DescriptionWithLink
            Data={SimpleTalentsArray(RRvar, DataObj, newData)}
            title={'8. Энергия которая сдерживает полное открытие сексуальной чакры'}
            content={RrText}
          />
          <DescriptionWithLink
            Data={SimpleTalentsArray(NOmMpPvar, DataObj, newData)}
            title={'9. Сердечная чакра. Какие цифры на ней стоят, и как её открыть.'}
            content={NOmMpPText}
          />
          <DescriptionWithLink
            Data={SimpleTalentsArray(PQnNqQvar, DataObj, newData)}
            title={'10. Чакра Третий глаз. Какие цифры на ней стоят, и как её открыть.'}
            content={PQnNpPText}
          />
          <DescriptionWithLink
            Data={SimpleTalentsArray(EEsSwWvar, DataObj, newData)}
            title={'11. Чакра солнечного сплетения. Какие цифры на ней стоят, и как её открыт'}
            content={EEsSwWtext}
          />
          <DescriptionWithLink
            Data={SimpleTalentsArray(CDvVzZvar, DataObj, newData)}
            title={'12. Нижняя чакра. Какие цифры на ней стоят, и как её открыть.'}
            content={CDvVzZtext}
          />
          <DescriptionWithLink
            Data={SimpleTalentsArray(ABtTxXvar, DataObj, newData)}
            title={'13. Коронная чакра. Какие цифры на ней стоят, и как её открыть'}
            content={ABtTxXtext}
          />
          <Description
            Data={TalentsArray(VWXvar, DataObj, newData, VWX)}
            title={'14. Предназначение личное'}
          />
          <Description
            Data={TalentsArray(YZaAvar, DataObj, newData, YZaA)}
            title={'15. Предназначение социальное'}
          />
          <Description
            Data={TalentsArray(BBvar, DataObj, newData, BB)}
            title={'16. Предназначение общее'}
          />
          <Description
            Data={TalentsArray(HHvar, DataObj, newData, HH)}
            title={'17. Энергия-цифра, которая сдерживает освобождение от всего негативного'}
          />
          <Description
            Data={TalentsArray(FFvar, DataObj, newData, FF)}
            title={'18. Энергия пробуждения'}
          />
          <DescriptionWithLink
            Data={SimpleTalentsArray(KKvar, DataObj, newData)}
            title={'19. Энергия космоса'}
            content={KKtext}
          />
        </>
        : null}
    </>
  );
}

export default App;
