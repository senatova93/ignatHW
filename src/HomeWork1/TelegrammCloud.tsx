import React from 'react';
import '../App.css';
import s from '../HomeWork1/TelegrammCloud.module.css'
import Name from '../HomeWork1/Name'
import Text from '../HomeWork1/Text'
import Time from '../HomeWork1/Time'

function TelegrammCloud() {
    return (
        <div className={s.message}>
            <div className={s.cloud}>

                <Name title="Nastya"/>
                <Text title="Я люблю React"/>
                <Time title="22.00"/>
            </div>
        </div>
    );
}

export default TelegrammCloud;
