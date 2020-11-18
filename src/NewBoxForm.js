import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const NewBoxForm = ({addToBoxList}) => {
    const INITIAL_STATE = {
        backgroundColor: '',
        height: '',
        width: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = {
            ...formData,
            id: uuid()
        };
        setFormData(INITIAL_STATE);
        addToBoxList(newBox);
    }
    return (
        <div className="NewBoxForm">
            <form onSubmit={handleSubmit}>
                <input 
                    className="NewBoxForm-input"
                    name="backgroundColor"
                    type="text" 
                    placeholder="Background color"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                ></input>
                <input 
                    className="NewBoxForm-input" 
                    name="height"
                    type="text" 
                    placeholder="height"
                    value={formData.height}
                    onChange={handleChange}
                ></input>
                <input 
                    className="NewBoxForm-input"
                    name="width"
                    type="text" 
                    placeholder="width"
                    value={formData.width}
                    onChange={handleChange}
                ></input>
                <button>Add</button>
            </form>
        </div>
    )
};

export default NewBoxForm;