import React from 'react';
import '../App.css';
import s from './TelegrammCloud.module.css'

type PropsType = {
    title: string
}

function Time(props: PropsType) {
    return (
        <div className={s.time}>
            {props.title}
        </div>
    );
}

export default Time;
