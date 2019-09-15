import React from "react";
import PropTypes from "prop-types";
import Resizer from "./Resizer";

// draggable Component

export default class Draggable extends React.Component {
    constructor(props) {
        super(props);
    }

    onMouseDown(e) {
        console.log("Draggable.onMouseDown");
        // TODO:もっとちゃんと比較する
        var elm = document.elementFromPoint(e.clientX, e.clientY);
        if (elm.className != "resizer") {
            this.props.updateStateDragging(this.props.id, true);
        }
    }
    onMouseUp(e) {
        console.log("Draggable.onMouseUp");
        this.props.updateStateDragging(this.props.id, false);
    }
    // Drag開始イベント
    onDragStart(e) {
        console.log("Draggable.onDragStart");

        const nodeStyle = this.refs.node.style;
        // var crt = this.refs.node.cloneNode(true);
        //this.refs.node.style.width = `${this.props.width * this.props.zoom}px`;
        //this.refs.node.style.height = `${this.props.height * this.props.zoom}px`;
        // e.dataTransfer.setDragImage(crt, 0, 0);
        e.dataTransfer.setData(
            "application/json",
            JSON.stringify({
                id: this.props.id,
                // mouse position in a draggable element
                x: e.clientX - parseInt(nodeStyle.left),
                y: e.clientY - parseInt(nodeStyle.top)
            })
        );
    }
    onDragEnd(e) {
        console.log("Draggable.onDragEnd");
        debugger
        //this.refs.node.style.width = `${this.props.width}px`;
        //this.refs.node.style.height = `${this.props.height}px`;
        this.props.updateStateDragging(this.props.id, false);
    }
    render() {
        const styles = {
            top: this.props.top,
            left: this.props.left,
            width: this.props.width,
            height: this.props.height,
            background: this.props.isDragging ? "red" : "yellow"
        };
        return (
            <div
                ref={"node"}
                draggable={this.props.isDragging}
                data-zoom={this.props.zoom}
                id={"item_" + this.props.id}
                className="item unselectable"
                style={styles}
                onMouseDown={this.onMouseDown.bind(this)}
                onMouseUp={this.onMouseUp.bind(this)}
                onDragStart={this.onDragStart.bind(this)}
                onDragEnd={this.onDragEnd.bind(this)}
            >
                {"item_" + this.props.id}
                <Resizer
                    ref={"resizerNode"}
                    id={this.props.id}
                    isResizing={this.props.isResizing}
                    resizerWidth={16}
                    resizerHeight={16}
                    updateStateResizing={this.props.updateStateResizing}
                    funcResizing={this.props.funcResizing}
                />
            </div>
        );
    }
}
Draggable.propTypes = {
    id: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    isResizing: PropTypes.bool.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    updateStateDragging: PropTypes.func.isRequired,
    updateStateResizing: PropTypes.func.isRequired,
    funcResizing: PropTypes.func.isRequired
};