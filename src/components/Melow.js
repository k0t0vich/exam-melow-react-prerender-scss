import React, { Component } from "react";
import '../App.scss';
export default class Melow extends Component {
    componentDidMount() {
        this.updateCanvas();
    }
    
    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        const cx = this.props.width/2;
        const cy = this.relativeHeight/2;
        const PI2 = Math.PI * 2;
        
        ctx.beginPath();
        ctx.arc(cx, cy, this.props.outerRadius * this.scaleRadius, 0, PI2, true); 
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.moveTo(cx, cy);
        ctx.beginPath();
        ctx.arc(cx, cy, this.props.innerRadius * this.scaleRadius, 0, PI2, true); 
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    render() {
        const canvas = document.getElementById("canvas");
        const offsetTop = canvas ? canvas.offsetTop: 0;
        this.relativeHeight = this.props.height - offsetTop;
        const maxRadius = Math.min(this.relativeHeight, this.props.width) * 0.5 * 0.7;
        this.scaleRadius = maxRadius / this.props.outerRadius;
        return (
            <canvas id="canvas" ref="canvas" width={this.props.width} height={this.relativeHeight}/>
        );
    }
}
