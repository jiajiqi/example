import ajax from './ajax'
//注册接口
export function reqRegister(contant,password,confirm,residence){
    ajax('/register' ,{contant,password,confirm,residence},'POST' )
}
export const reqRegister=(contant,password,confirm,residence) => ajax ('./register',{contant,password,confirm,residence},'POST')