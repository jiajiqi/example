import axios from 'axios'

/*
发送异步ajax请求
*/
export default function ajax(url,data={},type='GET'){
    if (type==='GET'){//发送GET请求
        return axios.get(url,{//配置对象
            params:data//制定请求参数
        })
    }else{//发送POST请求
        return axios.post(url,data)
    }
}

//请求注册接口
ajax('')