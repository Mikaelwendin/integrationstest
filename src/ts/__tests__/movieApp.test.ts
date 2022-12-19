/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/Movie";
import { createHtml, displayNoResult } from "../movieApp";
import * as functions from "./../movieApp";
import * as sFunctions from "./../services/movieservice";

jest.mock("./../services/movieservice");

describe("init", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("Should fire submit", () => {
    // Arrange
    document.body.innerHTML = `
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>`;
    let spy = jest.spyOn(functions, "handleSubmit").mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve();
        })
    );
    functions.init();
    //Act
    document.getElementById("search")?.click();
    // Assert
    expect(spy).toHaveBeenCalled();
  });
});

describe("submit", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("Should fire creatHtml", async () => {
    // Arrange
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

    document.body.innerHTML = `
    <form id="searchForm">
      <input type="text" id="searchText" value="prupp" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    `;

    // Act
    await functions.handleSubmit();

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("create HTML", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should create HTML", async () => {
    // Arrange
    let searchText: string = "trollol";

    let data: IMovie[] = await sFunctions.getData(searchText);

    document.body.innerHTML = `<div id="movie-container"></div>`;

    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    container.innerHTML = "";

    // Act
    createHtml(data, container);
    // Assert
    expect(document.querySelectorAll(".movie").length).toBe(5);
    expect(document.querySelectorAll("h3").length).toBe(5);
    expect(document.querySelectorAll("img").length).toBe(5);
    expect(document.querySelectorAll("h3")[3].innerHTML).toBe("forrest gump");
  });
});

describe("Error-mess", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("Should add error-message html", () => {
    // Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    container.innerHTML = "";
    // Act
    displayNoResult(container);
    // Assert
    expect(document.querySelector("p")?.innerHTML).toBe(
      "Inga sökresultat att visa"
    );
  });
});
