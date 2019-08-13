import React, { Component } from "react";
import '../App.scss';
import store from "../models/Store"
export default class TaskHeader extends Component {
    render(){
        return(
            <h2>
                Начальный вес: {store.startWeight} кг <br/>
                Начальный процент воды: {Math.round(store.startWaterPercent * 100)}%<br/>
                Текущий процент воды: {Math.round(store.currentWaterPercent * 100)}%<br/>
                Текущий вес арбуза: {this.props.weight} кг
             </h2>
        ); 
    }
}