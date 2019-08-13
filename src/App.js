import React, { Component } from "react";
import {observer} from "mobx-react";

import Melow from "./components/Melow";
import TitleHeader from "./components/TitleHeader";
import TaskHeader from "./components/TaskHeader";
import store from "./models/Store"

import './App.scss';

@observer
export default class App extends Component {
    constructor(props){
      super(props)
      this.state = {
          width:0,
          height:0,
      }
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
      console.log(store.currentWeight);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <>
                <TitleHeader/>
                <TaskHeader weight={store.currentWeight}/>
                <Melow 
                  width={this.state.width} 
                  height={this.state.height} 
                  innerRadius={store.innerRadius} 
                  outerRadius={store.outerRadius}
                />
            </>
        );
    }
}
