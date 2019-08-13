import React, { Component } from "react";
import '../App.scss';
export default class Melow extends Component {
    constructor(props){
        super(props);
        this.state = {
            width:0,
            height:0,
            scale: 1
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      this.updateCanvas();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        const canvas = document.getElementById("canvas");
        const offsetTop = canvas ? canvas.offsetTop: 0;
        const relativeHeight = window.innerHeight - offsetTop; //TODO add delta for (offsetBottom?)
        const relativeWidth = window.innerWidth; //TODO add delta for (offsetLeft?)
        const maxRadius = Math.min(relativeHeight, relativeWidth) * 0.5 * 0.7;
        console.log("canvas " + canvas);
        
        this.setState({ 
            width: relativeWidth, 
            height: relativeHeight,
            scale: maxRadius / this.props.outerRadius
        });
    }
    
    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        console.log("updateCanvas");
        const ctx = this.refs.canvas.getContext('2d');
        const cx = this.state.width/2;
        const cy = this.state.height/2;
        const PI2 = Math.PI * 2;
        
        ctx.beginPath();
        ctx.arc(cx, cy, this.props.outerRadius * this.state.scale, 0, PI2, true); 
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.moveTo(cx, cy);
        ctx.beginPath();
        ctx.arc(cx, cy, this.props.innerRadius * this.state.scale, 0, PI2, true); 
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    render() {
        return (
            <canvas id="canvas" ref="canvas" width={this.state.width} height={this.state.height}/>
        );
    }
}
