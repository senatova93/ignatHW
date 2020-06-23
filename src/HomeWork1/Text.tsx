import React from 'react';
import '../App.css';
import s from './TelegrammCloud.module.css'

type PropsType = {
    title: string
}

function Text(props: PropsType) {
    return (
        <div className={s.mainMessage}>
            {props.title}
        </div>
    );
}

export default Text;
