import React, { Component } from "react";
import '../App.scss';

export default class TaskHeader extends Component {
    render(){
        return(
            <div className="task-header">
                <h2>
                    Начальный вес: <span className="values">{this.props.store.startWeight} кг</span><br/>
                    Начальный процент воды: <span className="values">{Math.round(this.props.store.startWaterPercent * 100)}%</span><br/>
                    Текущий процент воды: <span className="values">{Math.round(this.props.store.currentWaterPercent * 100)}%</span><br/>
                    Текущий вес арбуза: <span className="values">{this.props.store.currentWeight.toFixed(2)} кг</span>
                </h2>
             </div>
        ); 
    }
}