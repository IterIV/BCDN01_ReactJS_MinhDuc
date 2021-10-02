import React, { Component } from 'react'
import Body from './body/Body'
import Footer from './Footer'
import Header from './Header.js'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                {/* Header Component */}
                <Header logoText = "Start Boostrap"/>
                {/* Body Component */}
                <Body/>
                {/* Footer Component */}
                <Footer textContent = "Copyright © Your Website 2021"/>
            </div>
        )
    }
}
