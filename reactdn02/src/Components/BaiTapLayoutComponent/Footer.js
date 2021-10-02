import React, { Component } from 'react'

export default class Footer extends Component {
    
    render() {
        let styleFooter = {
            textAlign: "center",
            backgroundColor: "#212529",
            color: "#fff",
            marginBottom: "0",
            padding: "48px"
        }
        return (
            <div style = {styleFooter}>
                <p className = "mb-0">{this.props.textContent}</p>            
            </div>
        )
    }
}
