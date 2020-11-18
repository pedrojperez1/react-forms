import React from "react";
import "./Box.css";

const Box = ({id, backgroundColor, height, width, removeFromBoxList}) => {
    const handleRemove = () => {
        removeFromBoxList(id);
    }
    return (
        <div className="Box">
            <div className="Box-box" style={{backgroundColor, height, width}}></div>
            <button onClick={handleRemove}>X</button>
        </div>
    )
};

export default Box;