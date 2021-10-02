import React, { Component } from 'react'

export default class CardItem extends Component {
    render() {
        let styleIcon = {
            fontSize: "2rem",
            textAlign: "center",
            height: "4rem",
            width: "4rem",
            color: "white",
            backgroundColor: "#0d6efd",
            borderRadius: "0.25rem",
            marginBottom: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto"
        }
        let styleHeader = {
            fontSize: "1.5rem",
            fontWeight: "700"
        }
        return (
            <div className="col-lg-4 mb-5">
                <div className="card align-items-center border-0 bg-light text-center">
                    <div className="card-body">
                    <div style={styleIcon}>
                        <i className= {this.props.iconClass} />
                    </div>
                        <h2 style = {styleHeader}>{this.props.header}</h2>
                        <p className="mb-0">{this.props.content}</p>
                    </div>
                </div>

            </div>
        )
    }
}