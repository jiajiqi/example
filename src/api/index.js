//包含应用中所有 接口的请求函数的模块
import ajax from './ajax'


//登录接口
export const reqLogin = (account,password) => ajax('/auth/login',{account,password},'POST')
//注册
export const reqRegister = (account,password,confirm,residence) =>ajax('/auth/register',{account,password,confirm,residence},'POST')
//添加用户
