import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityApiResponse";

describe("Service: getCityByNameService", () => {
  it("should return city details", async () => {
    // const data = {
    //   id: "1",
    //   name: "São Paulo",
    //   sys: {
    //     country: "BR",
    //   },
    //   coord: {
    //     lat: 123,
    //     lon: 456,
    //   },
    // };
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });
    const response = await getCityByNameService("São Paulo");

    expect(response.length).toBeGreaterThan(0);
  });
});
