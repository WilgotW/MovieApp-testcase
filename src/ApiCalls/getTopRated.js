export default async function getTopRated() {
   const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
   const movies = await response.json();
   return await movies.results;
}
