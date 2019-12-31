import React, { Component } from 'react'
import {
  Form,
  Input,
  Cascader,
  Select,
  Button,
  AutoComplete,
  Radio,
} from 'antd';
import './register.less'
import { reqRegist } from '../../api'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const residences = [
  {
    value: '四川',
    label: '四川',
    children: [
      {
        value: '成都',
        label: '成都',
        children: [
          {
            value: '金堂',
            label: '金堂',
          },
        ],
      },
    ],
  },
  {
    value: '重庆',
    label: '重庆',
    children: [
      {
        value: '解放碑',
        label: '解放碑',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class Register extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { account, password, confirm, residence } = values
        reqRegist().then(response => {
          console.log('success', response.data)
        }).catch(error => {
          // console.log('fail', error)
          if (account === 'teacher') { //判断并返回结果
            console.log('该用户名已经存在');
          } else
            console.log('注册成功');
        })
      } else {
        console.log('失败')
      }
    });
    const form = this.props.form
    const values = form.getFieldsvalue
    console.log('handleSubmit()', values)
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的密码两次不一致!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  // register =() =>{
  //   const account=this.account.value;
  //   const password=this.password.value;
  //   const confirm=this.confirm.value;
  //   const residence=this.residence.value;
  //   let account1=localStorage.getItem('account');

  //   if(account1){
  //     //通过数据库存储判断是否已经存在该用户，如果account1存在则证明已有用户注册
  //     account1=JSON.parse(account1)

  //     if(account1.account===account){
  //       alert('该用户名已经存在')
  //     }else{

  //     }
  //   }else{
  //     localStorage.setItem('account',JSON.stringify({account,password,confirm,residence}))
  //   }
  // }

  // state={
  //   account:'',
  //   password:'',
  //   comfire:'',
  //   residence:'',
  //   role:'',
  // }
  // register = () =>{
  //   console.log(this.state)
  // }
  // handleChange=(name,val)=>{
  //   this.setState({
  //     [name]:val
  //   })
  // }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="form">
        <h2>用户注册</h2>
        <Form.Item label="用户名" >
          {getFieldDecorator('account', {
            rules: [
              {
                type: 'contant',
                message: '您输入的账户无效!',
              },
              {
                required: true,
                message: '请输入你的用户名!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="密码" hasFeedback >
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入你的密码!',
              },
              {
                min: 4, message: '密码至少4位'
              },
              {
                max: 12, message: '密码至多12位'
              },
              {
                pattern: /^[a-zA-Z0-9]+$/, message: '密码必须是数字或英文组成'
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="确认密码" hasFeedback >
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: '请确认你的密码!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>

        <Form.Item label="所在地" onChange={val=>{this.handleChange('residence',val)}}>
          {getFieldDecorator('residence', {
            initialValue: ['四川', '成都', '隆昌'],
            rules: [
              { type: 'array', required: true, message: '请选择你的所在地!' },
            ],
          })(<Cascader options={residences} />)}
        </Form.Item>
        <Form.Item label="用户类型" >
        <Radio.Group name="radiogroup" >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Radio value={1} >学生</Radio>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Radio value={2} >老师</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={this.register}>
            注&nbsp;&nbsp;&nbsp;册
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create()(Register);
const WrapRegister = Form.create({ name: 'register' })(Register);

