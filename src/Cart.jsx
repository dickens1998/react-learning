import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        // 隐式传参
        console.log(this.props.location.state.num)
        let num =this.props.location.state.num;
        return (
            <div>
                Cart - {num}
            </div>
        )
    }
}
