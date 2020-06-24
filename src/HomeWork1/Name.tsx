import React from 'react';
import '../App.css';
import s from './TelegrammCloud.module.css'

type PropsType = {
    name: string
}

function Name(props: PropsType) {
    return (
        <div className={s.nameMessage}>
            {props.name}
        </div>
    );
}

export default Name;
