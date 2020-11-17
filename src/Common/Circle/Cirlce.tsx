import React from "react";
import s from './Circle.module.css'

type circlePropsType = {
    name:string
}

export const Circle = (props:circlePropsType) =>{
    return(
        <div className={s.circle}>{props.name}</div>
    )
}