import axios from "axios";
import { IMovie } from "../models/Movie";
import { getData } from "../services/movieservice";
import { mockData } from "../services/__mocks__/movieservice";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("Get data", () => {
  test("should get mock data", async () => {
    // Arrange
    mockedAxios.get.mockResolvedValue({ data: { Search: mockData } });
    let searchText: string = "test";
    // Act
    let data: IMovie[] = await getData(searchText);
    // Assert
    expect(data.length).toBe(5);
    expect(data[0].Title).toBe("batman");
  });
});
describe("Get NO data", () => {
  test("should return empty list", async () => {
    // Arrange
    mockedAxios.get.mockRejectedValue({
      data: { mockData },
    });
    let searchText: string = "";
    // Act
    let rejectResponse: IMovie[] = await getData(searchText);
    // Assert
    expect(rejectResponse).toEqual([]);
    expect(rejectResponse.length).toBe(0);
  });
});
