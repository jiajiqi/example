//包含应用中所有接口的请求函数的模块
import ajax from './ajax'
const BASE = ''

//登录接口
export const reqLogin = (account,password) => ajax(BASE+'/auth/login',{account,password},'POST')
//注册
export const reqRegist = (account,password) =>ajax(BASE+'/auth/regist',{account,password},'POST')