//包含应用中所有 接口的请求函数的模块
import ajax from './ajax'
const BASE = ''

//登录接口
export const reqLogin = (account,password) => ajax(BASE+'/auth/login',{account,password},'POST')
//注册
<<<<<<< HEAD
export const reqRegist = (account,password) =>ajax(BASE+'/auth/regist',{account,password},'POST')
=======

export const reqRegister = (account,password,confirm,residence) =>ajax('/auth/register',{account,password,confirm,residence},'POST')
//添加用户
 export const reqAddUser=(user)=>ajax('',user,'POST')
>>>>>>> a97deb384b1b6eb222fdef3fa8d48ac3daff1a3b
