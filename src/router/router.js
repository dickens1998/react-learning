// 路由文件作为组件来使用

/*
    函数式组件 function
    类组件     calss
*/

// 把/根路劲指向App组件
import App from '../App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import List from '../List'
import Detail from '../Detail'
import Error from '../Error'
import User from '../User'
import Cart from '../Cart'
import Login from '../Login'

/*
    exact - 精准匹配
    如果同级路由,不加 exact 全部匹配到同一个路径
    比方 /  /list /detail 只要路径以/开头，就会全部匹配到 / 对应的组件 

    Route路由注意点 ， 同级路由尽量添加exact
*/

/*
    React 路由有两种模式
      1.  HashRouter    带*
      2.  BrowserRouter 不带* --开发阶段尽量选择BrowserRouter 
*/

/*
    Link 和 NavLink 
*/


// 路由组件 专门用来配置路由
const BaseRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={() => {
                    return (
                        <App>
                            <Switch>
                                <Route exact path="/Login" component={Login}></Route>
                                <Route exact path="/list" component={List}></Route>
                                <Route exact path="/detail" component={Detail}></Route>
                                <Route exact path="/user/:id" component={User}></Route>
                                <Route exact path="/cart/" component={Cart}></Route>
                                <Route exact path="*" component={Error}></Route>
                            </Switch>
                        </App>
                    )
                }}></Route>

                {/* <Route exact path="/" component={App}></Route>
               <Route exact path="/list" component={List}></Route>
               <Route exact path="/detail" component={Detail}></Route>
               <Route exact component={Error}></Route> */}
            </Switch>
        </BrowserRouter>
    )
}

export default BaseRouter