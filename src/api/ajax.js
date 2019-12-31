<<<<<<< HEAD
//能发送异步ajax请求的函数模块
import axios from 'axios'
import {message} from 'antd'

export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject) =>{
        let promise
        //1、执行ajax请求

        //2、如果成功，调用resolve(value)

        //3、如果失败了，不调用reject(reason)，而是提示异常信息
        if (type=='GET') {//发送GET请求
            promise = axios.get(url,{//配置对象
                params:data
            })
        }else{//发送POST请求
            promise = axios.post(url,data)
        }
        promise.then(response =>{
            resolve(response.data)
        }).catch(error=>{
            message.error('请求出错了'+error.message)
        })
    })
    
}
=======
// //能发送异步ajax请求的函数模块
// import axios from 'axios'

// export default function ajax(url,data={},type='GET'){
//     if (type=='GET') {//发送GET请求
//         return axios.get(url,{//配置对象
//             params:data
//         })
//     }else{//发送POST请求
//         return axios.post(url,data)
//     }
// }
>>>>>>> a97deb384b1b6eb222fdef3fa8d48ac3daff1a3b

// //请求登录接口
// ajax('/auth/login ',{account:'Tom',password:'12345'},'POST').then()
// //添加用户
// ajax('/auth/register ',{account:'Tom',password:'12345',confirm:'12345',recreation:'',role:''},'POST').then()