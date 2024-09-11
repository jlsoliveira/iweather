import { render, screen } from "@testing-library/react-native";

import { NextDays } from ".";
import React from "react";
import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be render day", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30 c",
            max: "34 C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "34 c",
            max: "35 C",
            icon: clearDay,
            weather: "Céu nublabo",
          },
          {
            day: "20/07",
            min: "21 c",
            max: "25 C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "21/07",
            min: "26 c",
            max: "34 C",
            icon: clearDay,
            weather: "Chuva",
          },
          {
            day: "22/07",
            min: "30 c",
            max: "34 C",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />
    );
    expect(screen.getByText("19/07")).toBeTruthy();
  });
});
