const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getTopRated() {
   const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key="+key+"&language=en-US&page=1");
   const movies = await response.json();
   return await movies.results;
}
