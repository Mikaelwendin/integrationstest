import { movieSort } from "../functions";
import { IMovie } from "../models/Movie";
import { mockData } from "../services/__mocks__/movieservice";

test("should sort the list", () => {

// Arrange

// Act
let testlist:IMovie[] = movieSort(mockData);
// Assert
expect(testlist[0].Title).toBe("adam");
expect(testlist[1].Title).toBe("batman");
expect(testlist[2].Title).toBe("forrest gump");
expect(testlist[3].Title).toBe("starwars");
expect(testlist[4].Title).toBe("superman");
expect(testlist).toStrictEqual(movieSort(mockData));

});

test("should sort the list backwards", () => {

    // Arrange
    
    // Act
    let testlist:IMovie[] = movieSort(mockData, false);
    // Assert
    expect(testlist[0].Title).toBe("superman");
    expect(testlist[1].Title).toBe("starwars");
    expect(testlist[2].Title).toBe("forrest gump");
    expect(testlist[3].Title).toBe("batman");
    expect(testlist[4].Title).toBe("adam");
    expect(testlist).toStrictEqual(movieSort(mockData, false));
    
    });
