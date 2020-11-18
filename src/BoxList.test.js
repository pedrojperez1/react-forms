import { fireEvent, getByPlaceholderText, render } from '@testing-library/react';
import BoxList from './BoxList';

const boxes = [
    // {
    //     id: 123,
    //     backgroundColor: "blue",
    //     height: 200,
    //     width: 250
    // },
    // {
    //     id: 456,
    //     backgroundColor: "salmon",
    //     height: 100,
    //     width: 150
    // }
]

it("should not go up in smoke when rendering", () => {
    render(<BoxList boxes={boxes}/>);
});

it("should render the same each time", () => {
    const {asFragment} = render(<BoxList boxes={boxes}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("should render a new box when form is submitted and delete it when X is pressed", () => {
    const { getByPlaceholderText, getByText, queryAllByText } = render(<BoxList boxes={boxes}/>);
    const backgroundColorInput = getByPlaceholderText("Background color");
    const heightInput = getByPlaceholderText("height");
    const widthInput = getByPlaceholderText("width");
    const submitBtn = getByText("Add");
    fireEvent.change(backgroundColorInput, {target: {value: "green"}});
    fireEvent.change(heightInput, {target: {value: 200}});
    fireEvent.change(widthInput, {target: {value: 200}});
    fireEvent.click(submitBtn);
    expect(queryAllByText("X").length).toBe(1); //first check
    fireEvent.click(getByText("X"));
    expect(queryAllByText("X").length).toBe(0);
});