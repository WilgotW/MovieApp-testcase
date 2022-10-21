export default async function getTrendingMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
    const movies = await response.json();
    return await movies.results;
}
