import React from 'react';
import '../App.css';
import s from './TelegrammCloud.module.css'

type PropsType = {
    time: string
}

function Time(props: PropsType) {
    return (
        <div className={s.time}>
            {props.time}
        </div>
    );
}

export default Time;
