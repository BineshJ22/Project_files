import { API_KEY } from "./constants/constants";


export const Top_Rated_Movies=`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const Popular=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const Trending=`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
export const Upcoming=`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;


export const Top_Rated_Series=`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`