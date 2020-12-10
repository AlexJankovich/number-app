import React, {useState} from 'react';
import {uiVarType} from '../../Utils/data';
import {HTMLWrapper} from '../HTMLWrapper';

type DescriptionPropsType = {
    Data: Array<uiVarType>
    title: string
}

export const Description = (props: DescriptionPropsType) => {


    let Collapsed = {
        transitionProperty: 'display',
        display: 'none',
        overflow: 'hidden',
    }

    const [hidden, setHidden] = useState(true)

    const [style, setStyle] = useState(Collapsed)


    const collapseHandler = () => {
        if (hidden) {
            setHidden(false)
            setStyle({...Collapsed, display: 'block'})
        } else {
            setStyle({...Collapsed, display: 'none'})
            setHidden(true)
        }

    }

    const content = props.Data.map((i, index) => {
        return <div key={index}>
            <h3>{Object.keys(i)[0]} : {i[Object.keys(i)[0]].title}</h3>
            {/*<div>{i[Object.keys(i)[0]].text}</div>*/}
            <HTMLWrapper text={i[Object.keys(i)[0]].text}/>
        </div>
    })
    return (
        <div className={'descriptionContent'}>
            <div className={'title'}>
                <h2>{props.title}</h2>
                <button onClick={collapseHandler}>
                    {hidden ? 'Подробнее' : 'Скрыть'}
                </button>
            </div>
            <div style={style}>{content}</div>
        </div>
    )
}