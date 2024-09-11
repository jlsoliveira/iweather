import { render, screen } from "@testing-library/react-native";

import React from "react";
import { WeatherItem } from ".";
import dropIcon from "@assets/drop.svg";

describe("Component: WeatherItem", () => {
  it("should be show title and value", () => {
    render(
      <WeatherItem icon={dropIcon} value="81%" title="Umidade do ar" isLast />
    );

    const title = screen.getByText("Umidade do ar");
    const value = screen.getByText("81%");

    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
