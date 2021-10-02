import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const menuItems = ["Home", "About", "Contact"];
        let lstMenu = menuItems.map((item, index) => {
            if(index == 0){
                return <li className="nav-item active">
                <a className="nav-link" href="#">{item}</a>
            </li>
            } else {
                return <li className="nav-item">
                <a className="nav-link" href="#">{item}</a>
            </li>
            }
        });

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand" href="#">{this.props.logoText}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuContent" aria-controls="menuContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="menuContent">
                    <ul className="navbar-nav ml-auto">
                        {lstMenu}
                    </ul>
                </div>
                </div>
                
            </nav>

        )
    }
}
