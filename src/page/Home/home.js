import React from 'react';
import { Link } from 'react-router-dom';
import './home.less'
import { Row, Col, Input, Carousel, Icon, } from 'antd';
import { Menu, Dropdown, Button } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
           
               <Link to='/auth/login'>学生</Link> 
        
        </Menu.Item>
        <Menu.Item>
            
            <Link to='/auth/login'>教师</Link> 
        
        </Menu.Item>
    </Menu>
);
const menu1 = (
    <Menu>
        <Menu.Item>
           
               <Link to='/auth/register'>学生</Link> 
        
        </Menu.Item>
        <Menu.Item>
           
            <Link to='/auth/register'>教师</Link> 
      
        </Menu.Item>
    </Menu>
);

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="headline">
                    <Row type="flex" justify="space-around">
                        <Col span={24}></Col>
                    </Row>
                </div>
                <div className="firstline">
                    <Row>
                        <Col span={3}></Col>
                        <Col span={2}>名称</Col>
                        <Col span={7}>
                            <Input.Search
                                placeholder="搜索"
                                onSearch={value => console.log(value)}
                                style={{ width: 250 }}
                            />
                        </Col>
                        <Col span={1}>
                            <Link>首页</Link>
                        </Col>
                        <Col span={2}>
                            <Link>我们的服务</Link>
                        </Col>
                        <Col span={2}>
                            <Link>新的动态</Link>
                        </Col>
                        <Col span={2}>
                            <Link>联系我们</Link>
                        </Col>
                        <Col span={1}>
                            <Dropdown overlay={menu} placement="bottomLeft">
                                <Button type="primary">
                                  登录
                                </Button>
                            </Dropdown>
                        </Col>
                        <Col span={1}>
                            <p> | </p>
                        </Col>
                        <Col span={1}>
                        <Dropdown overlay={menu1} placement="bottomLeft">
                            <Button type="primary">
                              注册
                            </Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <div className="secondline">
                    <Row>
                        <Col span={24}>
                            <Carousel autoplay className="l">
                                <div>
                                    <img src="/taylor.jpg" width={'100%'} height={380}></img>
                                </div>
                                <div>
                                    <img src="/taylor.jpg" width={'100%'} height={380}></img>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </div>
                <div className="lastline">
                    <Row>
                        <Col span={2}></Col>
                        <Col span={5}>
                            <div className="phone">
                                <Icon type="home" style={{ fontSize: '40px' }} className="phone1" />
                                <p>&nbsp;&nbsp;&nbsp;首&nbsp;页</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <div className="phone">
                                <Icon type="user" style={{ fontSize: '40px' }} className="phone1" />
                                <Link to="./myself"><p>个人中心</p></Link>
                            </div>
                        </Col>
                        <Col span={5}>
                            <div className="phone">
                                <Icon type="sketch" style={{ fontSize: '40px' }} className="phone1" />
                                <p >会员中心</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <div className="phone">
                                <Icon type="phone" style={{ fontSize: '40px' }} className="phone1" />
                                <p >在线客服</p>
                            </div>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>
                <div className="next">
                    <h2>我们的服务</h2>
                    <hr/>

                    <div className="part"><p>简历诊断</p></div>
                    <div className="part">
                      <Link to='/content2'> <p>简历制作</p></Link> 
                        </div>
                    <div className="part"><p>面试礼仪</p></div>
                    <div className="part"><p>面试测试</p></div>
                    <div className="part"><p>面试常见“坑”</p></div>
                    <div className="part">
                        <Link to='/interview'><p>面试技巧</p></Link>
                        </div>
                    <div className="part"><p>模拟面试</p></div>
                    <div className="part"><p>法律援助</p></div>
                </div>
                <div className="news">
                    <h2>新闻资讯</h2>
                    <hr/>
                    <div>简历秘籍</div>
                </div>
                <div className="addline">
                    <Row>
                        <Col span={24}></Col>
                    </Row>
                </div>
               
            </div >


        )
    }
}
