import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  // snapshot:
  const validProps = {
    date: 1525046400000,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 30,
    wind: {
      speed: 40,
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Mon Apr 30 2018")).toHaveClass("forecast-summary__date");
    expect(getByText("Max Temperature: 22°C")).toHaveClass(
      "forecast-summary__max-temperature"
    );
    expect(getByText("Min Temperature: 12°C")).toHaveClass(
      "forecast-summary__min-temperature"
    );
    expect(getByText("Humidity: 30%")).toHaveClass(
      "forecast-summary__humidity"
    );
    expect(getByText("Wind Speed: 40 mph")).toHaveClass(
      "forecast-summary__wind-speed"
    );
    expect(getByText("Wind Direction: s")).toHaveClass(
      "forecast-summary__wind-direction"
    );
  });
});
