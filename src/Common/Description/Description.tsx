import React from 'react';
import {uiVarType} from '../../Utils/data';

type DescriptionPropsType = {
    Data: Array<uiVarType>
    title: string
}

export const Description = (props: DescriptionPropsType) => {

    const content = props.Data.map((i, index) => {
            return <div key={index}>
                <h3>{Object.keys(i)[0]} : {i[Object.keys(i)[0]].title}</h3>
                <div>{i[Object.keys(i)[0]].text}</div>
            </div>
    })
    return (
        <div className='description'>
            <h1>{props.title}</h1>
            {content}
        </div>
    )
}