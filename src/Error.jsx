import React, { Component } from 'react'
import imgSrc from './assets/404.png'

export default class Error extends Component {
    // state={
    //     imgSrc:require("./assets/404.png")
    // }

    render() {
        return (
            <div>
                <img src={imgSrc} alt="" />
            </div>
        )
    }
}
