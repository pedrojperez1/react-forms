import {v4 as uuid} from "uuid";

const boxes = [
    {
        id: uuid(),
        backgroundColor: "pink",
        height: 100,
        width: 100
    },
    {
        id: uuid(),
        backgroundColor: "salmon",
        height: 200,
        width: 200
    },
    {
        id: uuid(),
        backgroundColor: "lightblue",
        height: 50,
        width: 80
    }
]

export default boxes;