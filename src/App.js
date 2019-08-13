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
    }

    render() {
        return (
            <>
                <TitleHeader/>
                <TaskHeader store={store}/>
                <Melow 
                  innerRadius={store.innerRadius} 
                  outerRadius={store.outerRadius}
                />
            </>
        );
    }
}
