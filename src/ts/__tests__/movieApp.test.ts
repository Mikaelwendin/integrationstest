/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/Movie";
import { createHtml, displayNoResult, handleSubmit, init } from "../movieApp";
import { mockData } from "../services/__mocks__/movieservice";


test("should create HTML", async () => {
  // Arrange
  let data: IMovie[] = mockData;

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

// Kan för allt i världen inte lösa init/handleSubmit på egen hand. Sorry.

