import React from 'react';
import '../App.css';
import s from './TelegrammCloud.module.css'

type PropsType = {
    text: string
}

function Text(props: PropsType) {
    return (
        <div className={s.mainMessage}>
            {props.text}
        </div>
    );
}

export default Text;
