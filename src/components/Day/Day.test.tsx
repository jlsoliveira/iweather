import { render, screen } from "@testing-library/react-native";

import { Day } from ".";
import React from "react";
import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should be render day", () => {
    render(
      <Day
        data={{
          day: "18/07",
          min: "30",
          max: "34",
          icon: clearDay,
          weather: "Céu limpo",
        }}
      />
    );

    expect(screen.getByText("18/07")).toBeTruthy();
  });
});
