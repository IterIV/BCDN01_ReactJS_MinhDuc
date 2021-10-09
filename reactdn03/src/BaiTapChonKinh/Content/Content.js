import React, { Component } from "react";
import "./Content.css";
import DataGlass from "../dataGlasses.json"

export default class Content extends Component {
    state = {
        glass: DataGlass[0]
    }
    renderGlassList(){
        let listGlass = DataGlass.map((item,index) => {
            return (
                <div className="glass_item ml-2" key = {item.id}>
                    <img
                        src={"/img" + item.url.replace(".","")}
                        alt=""
                        onClick = {() => {
                            this.handleClickImg(index);
                        }}
                    />
                </div>
            );
        })
        return listGlass
    }
    handleClickImg(index){
        this.setState({
            glass: DataGlass[index]
        });
    }
    render() {
        let styleContent = {
            backgroundImage: "url(/img/glassesImage/background.jpg)",
        };
        return (
            <div className="content" style={styleContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 tryGlass">
                            <img
                                src="/img/glassesImage/model.jpg"
                                alt=""
                                className="img-fluid rounded mx-auto d-block tryGlass_avt"
                            />
                            <img
                                src= {"/img" + this.state.glass.url.replace(".","")}
                                alt=""
                                className="tryGlass_img"
                            />
                            <div className="tryGlass_detail">
                                <div className="row px-3 py-2">
                                    <div className="col-8 text-white font-weight-bold">
                                        {this.state.glass.name}
                                    </div>
                                    <div className="col-4 text-white font-weight-bold text-right">
                                        {this.state.glass.price + "$"}
                                    </div>
                                    <div className="col-12 text-white mt-1 tryGlass_desc">
                                        {this.state.glass.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img
                                src="/img/glassesImage/model.jpg"
                                alt=""
                                className="img-fluid rounded mx-auto d-block"
                            />
                        </div>
                    </div>
                    <div className="row glass_list justify-content-center">
                        {this.renderGlassList()}
                    </div>
                </div>
            </div>
        );
    }
}
