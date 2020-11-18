import { render } from '@testing-library/react';
import Box from './Box';

it("should not go up in smoke when rendering", () => {
    render(<Box id={123} backgroundColor="red" height={100} width={100}/>);
});

it("should render the same each time", () => {
    const {asFragment} = render(<Box id={123} backgroundColor="red" height={100} width={100}/>);
    expect(asFragment()).toMatchSnapshot();
})