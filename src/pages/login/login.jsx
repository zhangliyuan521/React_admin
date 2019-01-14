import React, {Component} from 'react'

import {Form,Icon,Input,Button} from 'antd'
import logo from '../../assets/images/logo.png'
import './index.less'
/*
登陆的路由组件
 */
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt="logo"/>
          React项目：后台管理系统
        </div>
        <div className="login-content">
          <div className="login-box">
            <div className="title">用户登陆</div>
            <LoginForm/>
          </div>
        </div>
      </div>
    )
  }
}
// 包含<Form>被包装组件
class LoginForm extends React.Component{
    checkPassword = (rule,value,callback) => {
        if(!value){
          callback('必须输入密码')
        }else if(value.length<4 || value.length>8){
          callback('密码必须是4到8位')
        }else {
          callback()
        }
    }
    clickLogin =() => {
        this.props.form.validateFields((error,values) =>{
            if(!error){
                console.log('收集表单数据',values)
            }else {
               this.props.from.resetFields()
            }
        })
    }
  render(){

    const {getFieldDecorator}=this.props.form

    return(
       <Form className="login-form">
          <Form.Item>
              {
                getFieldDecorator('username',{
                  initialValue:'5211314',
                  rules:[
                      {type:'string',required:true,message:'必须输入用户名'},
                      {min:4,message:'长度不得少于4'}
                  ],
              })(<Input placeholder="请输入用户名" prefix={<Icon type="user"/>}/>)
              }
          </Form.Item>
          <Form.Item>
              {
                getFieldDecorator('password',{
                  rules:[{validator:this.checkPassword}]
                })(<Input type="password" placeholder="请输入密码" prefix={<Icon type="lock"/>}/>)
              }
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="login-form-button" onClick={this.clickLogin}>登陆</Button>
          </Form.Item>
       </Form>
    )
  }
}
// 包装包含<Form>的组件, 生成一个新的组件(包装组件)
// 包装组件会向被包装传递一个属性: form
LoginForm=Form.create()(LoginForm)