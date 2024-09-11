import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";

import { Dashboard } from ".";
import React from "react";
import { api } from "@services/api";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityApiResponse";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Screen: Dashboard", () => {
  it("should be show city weather", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const city = {
      id: "1",
      name: "Rio do Sul, BR",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    render(<Dashboard />);

    const cityName = await waitFor(() => screen.findByText(/sao paulo/i));

    expect(cityName).toBeTruthy();
  });
});
