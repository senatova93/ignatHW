import React from 'react';
import '../App.css';
import s from './TelegrammCloud.module.css'

type PropsType = {
    title: string
}

function Name(props: PropsType) {
    return (
        <div className={s.nameMessage}>
            {props.title}
        </div>
    );
}

export default Name;
