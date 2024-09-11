import { fireEvent, render, screen } from "@testing-library/react-native";

import React from "react";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      {
        id: "1",
        name: "Campinas",
        latitude: 123,
        longitude: 456,
      },
      {
        id: "2",
        name: "Caxias do Sul",
        latitude: 798,
        longitude: 987,
      },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/campinas/i);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[0]);
  });

  it("not should be options when data props is empity.", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
