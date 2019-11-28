import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

var LoginCss = require('./login.css')
export default class Login extends Component{
    render(){
        return(
            <div className={LoginCss.login}>
                <header className={LoginCss.header}></header>
                <section className={LoginCss.content}>
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户"
                                />
                        </Form.Item>
                        <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        <Form.Item >
                            <Checkbox className={LoginCss.item3}>记住我</Checkbox>
                            <a className="login-form-forgot" href="">忘记密码</a>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}