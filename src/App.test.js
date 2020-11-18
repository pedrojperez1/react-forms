import { render, screen } from '@testing-library/react';
import App from './App';

it("renders without going up in smoke", () => {
  render(<App />);
});

it("renders the same each time", () => {
  const {asFragment} = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
})