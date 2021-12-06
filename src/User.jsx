import React, { Component } from 'react'

export default class User extends Component {
    render() {
        // 在react中 想看route内容 就打印 this.props
        // 获取显示的传参
        console.log(this.props.match.params.id)
        return (
            <div>
                <h2>User页面</h2>
            </div>
        )
    }
}
