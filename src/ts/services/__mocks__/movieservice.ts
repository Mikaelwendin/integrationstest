import { IMovie } from "../../models/Movie";
export const mockData: IMovie[] = [
  {
    Title: "batman",
    imdbID: "123123123",
    Type: "action",
    Poster: "www.batman.com",
    Year: "1999",
  },
  {
    Title: "superman",
    imdbID: "123123123",
    Type: "action",
    Poster: "www.superman.com",
    Year: "1978",
  },
  {
    Title: "starwars",
    imdbID: "123123123",
    Type: "sci-fi",
    Poster: "www.starwars.com",
    Year: "1980",
  },
  {
    Title: "forrest gump",
    imdbID: "123123123",
    Type: "action",
    Poster: "www.bubbagump.com",
    Year: "2002",
  },
  {
    Title: "adam",
    imdbID: "123123123",
    Type: "romance",
    Poster: "www.whatevz.com",
    Year: "1999",
  },
];

let mockEmpty: IMovie[] = [];

export const getData = async (searchText: string): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    if (searchText.length !== 0) {
      if (searchText.length > 3) {
        resolve(mockData);
      } else {
        resolve(mockEmpty);
      }
    } else {
      reject(mockEmpty);
    }
  });
};
