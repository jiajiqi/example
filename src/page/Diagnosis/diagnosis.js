import React, { Component } from 'react';
import { Row, Col, Icon, Upload, message, Button,Input } from 'antd';
import './diagnosis.less'

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
export default class Diagnosis extends Component {
    render() {
        return (
            <div>
                <div className="headline1">
                    <Row type="flex" justify="space-around" className="p1">
                        <Col span={24}></Col>
                    </Row>
                    <Row type="flex" justify="space-around">
                        <Col span={4}></Col>
                        <Col span={4}>名称&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;简历诊断</Col>
                        <Col span={10}></Col>
                        <Col span={6}><Icon type="home" style={{ fontSize: '25px' }} className="phone1" /></Col>
                    </Row>
                </div>

                <div className="content1">
                    <div className="resum">
                        <div className="blank1"></div>
                        <div className="selection"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简历选择</p></div>
                        <div className="selection-son">
                        &nbsp;&nbsp;&nbsp;<Upload {...props}>
                                <Button className="b1">
                                    <Icon type="upload" /> 上传简历
                                </Button>
                            </Upload>,
                        </div>
                        <div className="blank2"></div>
                        <div className="contact"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系方式</p></div>
                        <div className="contact-son">
                            <p> 手机号码：<Input size="default" className="phonenumber"/></p>
                            <p> 电子邮箱：<Input size="default" className="mail"/></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}