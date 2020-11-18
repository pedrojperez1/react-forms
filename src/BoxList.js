import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from "uuid";

const BoxList = ({boxes}) => {
    const [boxList, setBoxList] = useState(boxes);
    const addToBoxList = (newBox) => {
        setBoxList(boxList => [...boxList, newBox]);
    }
    const removeFromBoxList = (id) => {
        setBoxList(boxList => boxList.filter(b => b.id !== id));
    }
    return (
        <div>
            <NewBoxForm addToBoxList={addToBoxList}/>
            {boxList.map(box => (
                <Box
                    id={box.id}
                    backgroundColor={box.backgroundColor} 
                    height={Number(box.height)} 
                    width={Number(box.width)}
                    addToBoxList={addToBoxList}
                    removeFromBoxList={removeFromBoxList}
                />
                )
            )}
        </div>
    )
};

export default BoxList;