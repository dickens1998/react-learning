import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                <h2>列表页</h2>
                <button onClick={this.goDetail.bind(this)}>跳转到详情页</button>
                <hr />
                <button onClick={this.goUser.bind(this)}>跳转到User页面</button>
                <hr />
                <button onClick={this.goCart.bind(this)}>跳转到Cart页面</button>
            </div>
        )
    }


    goDetail(){
        // 跳转到详情页
        this.props.history.push("/detail");
    }
    goUser(){
        this.props.history.push("/user/66");
    }
    goCart(){
        this.props.history.push({
            pathname:"/cart",
            state:{
                num:123
            }
        });
    }
}
