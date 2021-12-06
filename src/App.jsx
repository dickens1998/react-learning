import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Login from './Login'
import Detail from './Detail'

class App extends Component {
    render () {
        return (
            <div>
                <div style={{ display: this.props.location.pathname === '/login' ? 'block' : 'none' }}>
                    <Login ></Login>
                    {/* <Detail></Detail> */}
                </div>
                <div style={{ display: this.props.location.pathname === '/detail' ? 'block' : 'none' }}>
                    <Detail></Detail>
                </div>
            </div>
        )
    }
    UNSAFE_componentWillMount () {
        console.log(this.props.location.pathname)
        // 判断档期那的路由地址是 / 根路径,那就重定向到/List
        if (this.props.location.pathname === "/") {
            this.props.history.push("/login");
        }
    }
}

export default withRouter(App)



/*
    在一个没有路由的组件中添加路由

*/


