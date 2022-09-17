import { getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import App from "../../components/App";
// import forecast from "../../data/forecast.json";

describe("App", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();

    /* expect(getByTestId("h1-LocationDetails")).toBeInstanceOf(
      HTMLHeadingElement
    ); */
  });
});

// render(<App />);
// const h1Element = screen.getByText(/Manchester, UK/i);

// expect(h1Element).toBeInTheDocument();
