import React, { Component } from "react";
import {observer} from "mobx-react";
import {action} from "mobx";

import Melow from "./components/Melow";
import TitleHeader from "./components/TitleHeader";
import TaskHeader from "./components/TaskHeader";
import store from "./models/Store"
import Slider from '@material-ui/core/Slider';

import './App.scss';


export default @observer class App extends Component {
    constructor(props){
      super(props);
      this.changeWaterPercent =  this.changeWaterPercent.bind(this);
      this.changeStartWeight =  this.changeStartWeight.bind(this);
    }

    @action changeWaterPercent(evt, value){
      store.currentWaterPercent = value / 100;
    } 

    @action changeStartWeight(evt, value){
      store.startWeight = value;
    } 

    render() {
        return (
          <>
            <div id="maket">
                <TitleHeader/>
                <TaskHeader store={store}/>
                <div id="left">
                  <Slider 
                    id="weightSlider" 
                    onChange={this.changeStartWeight} 
                    min={1} 
                    max={1000} 
                    value={store.startWeight}
                    orientation="vertical"
                    valueLabelDisplay="on"
                  />
                </div>
                <Melow 
                  innerRadius={store.innerRadius} 
                  outerRadius={store.outerRadius}
                />
            </div>
            <div id="footer">
              <Slider 
                id="waterSlider" 
                onChange={this.changeWaterPercent} 
                min={1} 
                max={99} 
                value={store.currentWaterPercent * 100}
                valueLabelDisplay="on"
              />
            </div>
          </>
        );
    }
}
