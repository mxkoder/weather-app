import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description 1",
      icon: "stubIcon1",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: 2222222,
      description: "Stub description2",
      icon: "stubIcon2",
      temperature: {
        max: 24,
        min: 13,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

//   it("renders correct values for props", () => {
//     const { getByText, getByTestId } = render(
//       <ForecastSummary
//         date={validProps.date}
//         description={validProps.description}
//         icon={validProps.icon}
//         temperature={validProps.temperature}
//       />
//     );

//     expect(getByText("1111111")).toHaveClass("forecast-summary__date");
//     expect(getByText("Stub description")).toHaveClass(
//       "forecast-summary__description"
//     );
//     expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
//     expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
//   });
});
