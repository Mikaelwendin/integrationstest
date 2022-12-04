import { IMovie } from "../../models/Movie";
export let mockData: IMovie[] = [
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

 export const getData = async (searchText: string): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    if (searchText !== "") {
      resolve(mockData);
    } else {
      reject(() => {
        return [];
      });
    }
  });
}; 



