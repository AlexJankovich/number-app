import React, {useState} from 'react';
import {linkContentType} from '../../Utils/data';
// @ts-ignore
import AnimakitExpander from 'animakit-expander';

type DescriptionWithLinkPropsType = {
  Data: Array<{ [key: string]: number }>
  title: string
  content: linkContentType
}

export const DescriptionWithLink = (props: DescriptionWithLinkPropsType) => {

  const [hidden, setHidden] = useState(true);

  const collapseHandler = () => {
    setHidden(!hidden)
  };

  const content = props.Data.map((i, index) => {
    return <div key={index}>
      <h3>{Object.keys(i)[0]} : {i[Object.keys(i)[0]]}</h3>
      {/*<div>{i[Object.keys(i)[0]].text}</div>*/}
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
        <AnimakitExpander expanded={!hidden} duration={1000}>
          {content}
          <span>{props.content.text}</span>
          {!hidden && props.content.link ? <button style={{
            display: 'inline-block',
            alignSelf: 'center',
            marginTop: '1rem'
          }}>
            <a href={props.content.link}>
              Ссылка.
            </a>
          </button> : null}
        </AnimakitExpander>
    </div>
  );
};