import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message, Radio, Row, Col } from 'antd';
import './login.less'
import 'antd/dist/antd.css'
import { reqLogin } from '../../api'

// var LoginCss = require('./login.css')    
class Login extends Component {
    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    handleSubmit = (event) => {
        //阻止事件的默认行为
        event.preventDefault()
        //对所有表单字段进行检验 最后一次总的验证
        this.props.form.validateFields(async (error, values) => {
            if (!error) {
                // console.log('提交登录的ajax请求',values);
                const { account, password } = values
                const result = await reqLogin(account, password)
                //console.log('请求成功',response.data)
                //登录成功
                if (result.status == 0) {//
                    message.success('登录成功')
                    //登录成功之后跳转到相应的界面,用replace不会再回退回来，而push可以
                    this.props.history.replace('/')

                } else {//登录失败提示错误信息
                    message.error(result.msg)
                }
            } else {
                console.log('校验失败')
            }
        });
        //得到form表单对象
        const form = this.props.form
        //获取表单项的输入数据
        const values = form.getFieldsvalue
        console.log('handleSubmit()', values)
        //对密码进行自定义验证
    }
    render() {
        //const form = this.props.form;
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login">
                <header className="header"></header>
                <section className="content">
                    <h2>用户登录</h2>
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio value={1}>学生</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio value={2}>教师</Radio>
                    </Radio.Group>
                    <br></br>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('account', {//配置对象：属性名是特定的一些名称
                                rules: [
                                    { required: true, message: '请输入用户名' },

                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户"
                                />,
                            )}

                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: '请输入密码', },
                                    { min: 4, message: '密码至少4位' },
                                    { max: 12, message: '密码至多12位' },
                                    { pattern: /^[a-zA-Z0-9]+$/, message: '密码必须是数字或英文组成' },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码" />)}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="b1">
                            登录
                            </Button>
                        <Form.Item >
                            <Checkbox className="item3">记住我</Checkbox>
                            <a className="login-form-forgot" href="">忘记密码</a>
                        </Form.Item>
                    </Form>
                </section>
                <div className="bigword">
                    sdfk
                </div>
                <div className="line">
                    <Row>
                        <Col span={24}></Col>
                    </Row>
                </div>
                <div className="addline">
                    <Row>
                        <Col span={24}></Col>
                    </Row>
                </div>
            </div>

        )
    }
}
//包装Form组件生成一个新的组件   高阶组件 高阶函数
const WrapLogin = Form.create()(Login);
export default WrapLogin;