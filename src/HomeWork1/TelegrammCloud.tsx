import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import s from '../HomeWork1/TelegrammCloud.module.css'
import Name from '../HomeWork1/Name'
import Text from '../HomeWork1/Text'
import Time from '../HomeWork1/Time'
function TelegrammCloud() {
  return (
    <div className={s.message}>
        <div className = {s.cloud}>

        <Name/>
        <Text/>
        <Time/>
    </div>
    </div>
  );
}

export default TelegrammCloud;
