import React, { Component } from 'react';
import './myself.less'
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class MyselfPage extends Component {
    render() {
        return (
            <div className="myself">
                <div className="header">
                    <p className="p">名称&nbsp;|&nbsp;个人中心</p>
                    <p className="h">
                        <Icon type="home" style={{ fontSize: '26px' }} />
                        &nbsp; &nbsp; &nbsp; &nbsp; <Link to='./home'>我的主页</Link></p>
                </div>
                <div className="next">
                    <div className="part1"><p className="p1">ME</p></div>
                    <div className="part2" > <p className="p2">精准应聘</p> </div>
                    <div className="part3"><p className="p3">账户管理</p></div>
                    <div className="part4"><p className="p4">我的订单</p></div>
                    <div className="part6"><p className="p6">我的诊断</p></div>
                    <div className="part10"><p className="p10">我的简历</p></div>
                </div>
            </div>
        )
    }
}