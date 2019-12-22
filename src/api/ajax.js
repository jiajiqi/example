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

// //请求登录接口
// ajax('/auth/login ',{account:'Tom',password:'12345'},'POST').then()
// //添加用户
// ajax('/auth/register ',{account:'Tom',password:'12345',confirm:'12345',recreation:'',role:''},'POST').then()