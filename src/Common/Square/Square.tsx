import React from "react";
import {Circle} from "../Circle/Cirlce";
import s from './Square.module.css'
import './Square.css'

type SquarePropsType ={
    Data:any
}

export const Square = (props:SquarePropsType) => {

    const Data = props.Data

    const RenderArr:any = []

    for (let i in Data) {
        RenderArr.push( <div className={`${i}`} key={i}>
            <Circle name={Data[i]()||0}/>
        </div>)
    }
    return (
        <>
            <div className={s.square}>
                <div className={s.line45}></div>
                <div className={s.line}></div>
                <div className={s.line90}></div>
                <div className={s.smallLine45}></div>
                <div className={s.oppositeLine45}></div>
                <div className={s.TopLeftLine45}></div>
                <div className={s.TopRightLine45}></div>
                <div className={s.BottomLeftLine45}></div>
                <div className={s.BottomRightLine45}></div>
                {RenderArr}
            </div>
        </>
    )

}