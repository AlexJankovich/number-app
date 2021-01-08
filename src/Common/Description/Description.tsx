import React, {useState} from 'react';
import {uiVarType} from '../../Utils/data';
import {HTMLWrapper} from '../HTMLWrapper';
// @ts-ignore
import AnimakitExpander from 'animakit-expander';

type DescriptionPropsType = {
  Data: Array<uiVarType>
  title: string
}

export const Description = (props: DescriptionPropsType) => {

  const [hidden, setHidden] = useState(true);

  const collapseHandler = () => {
    setHidden(!hidden)
  };

  const content = props.Data.map((i, index) => {
    return <div key={index}>
      <h3>{Object.keys(i)[0]} : {i[Object.keys(i)[0]].title}</h3>
      <HTMLWrapper text={i[Object.keys(i)[0]].text}/>
    </div>;
  });

  return (
    <div className={'descriptionContent'}>
      <div className={'title'}>
        <h2>{props.title}</h2>
        <button onClick={collapseHandler}>
          {hidden ? 'Подробнее' : 'Скрыть'}
        </button>
      </div>
      <AnimakitExpander expanded = {!hidden} duration = {1000}>
        {content}
      </AnimakitExpander>
    </div>
  );
};

