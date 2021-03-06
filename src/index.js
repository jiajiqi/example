import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Home from './page/Home/home';
import Login from './page/Login/login';
import RegistrationForm from './page/Register/register';
import Diagnosis from './page/Diagnosis/diagnosis';

class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/auth/login" component={Login}></Route>
                    <Route path="/diagnosis" component={Diagnosis}></Route>
                    <Route path="/auth/register" component={RegistrationForm}></Route>
                    <Route path="/auth/register" component={Register}></Route>
                    <Route path="/myself" component={MyselfPage}></Route>
                    <Route path="/interview" component={InterviewPage}></Route>
                    <Route path="/content1" component={Content1}></Route>
                    <Route path="/content2" component={EditorConvertToHTML}></Route>
                   
                    <Redirect to="/home"></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
