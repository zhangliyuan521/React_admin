import React,{Component} from 'react'

import {Form,Icon,Input,Button} from 'antd'
import logo from '../../assets/images/logo.png'
import  './index.less'

export default class Login extends React.Component {
    render() {
        return (
            <div className="login">
             <div className="login-header">
                 <img src={logo} alt="logo"/>
                 react项目：后天管理
             </div>
            <div className="login-content"></div>
            </div>
        )
    }
}

