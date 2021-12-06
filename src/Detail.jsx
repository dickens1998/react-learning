import React, { Component } from 'react'

export default class Detail extends Component {
    render () {
        return (
            <div>
                <h2>首页</h2>
                {/* <button onClick={this.goback.bind(this)}>往回跳</button> */}
            </div>
        )
    }

    goback () {
        this.props.history.goBack();
        // this.props.history.go(-1);
    }
}
