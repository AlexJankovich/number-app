import React, {useState} from 'react';
import {linkContentType} from '../../Utils/data';

type DescriptionWithLinkPropsType = {
  Data: Array<{[key:string]:number}>
  title: string
  content: linkContentType
}

export const DescriptionWithLink = (props: DescriptionWithLinkPropsType) => {

  let Collapsed = {
    transitionProperty: 'display',
    display: 'none',
    overflow: 'hidden',
  };

  const [hidden, setHidden] = useState(true);

  const [style, setStyle] = useState(Collapsed);


  const collapseHandler = () => {
    if (hidden) {
      setHidden(false);
      setStyle({...Collapsed, display: 'block'});
    } else {
      setStyle({...Collapsed, display: 'none'});
      setHidden(true);
    }

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
      <div style={style}>
        {content}
        <span>{props.content.text}</span>
        {!hidden&&props.content.link?<button style={{
          display: 'inline-block',
          // width: '20%',
          alignSelf: 'center',
          marginTop: '1rem'
        }}>
          <a href={props.content.link}>
            Ссылка.
          </a>
        </button>:null}
      </div>
    </div>
  );
};