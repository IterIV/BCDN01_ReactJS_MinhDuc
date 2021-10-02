import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        let styleTextContent = {
            fontSize: "1.5rem"
        }
        let styleHeaderContent = {
            fontSize: "3rem",
            fontWeight: "700"
        }
        return (
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="text-center p-lg-5 p-4">
                        <div className="m-4 m-lg-5">
                            <h1 style={styleHeaderContent}>{this.props.header}</h1>
                            <p style={styleTextContent}>{this.props.textContent}</p>
                            <a className="btn btn-primary btn-lg" href="#!">{this.props.buttonContent}</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
