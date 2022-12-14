export default async function getSearchedMovies(searchTerm, page, minRating) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`)
    const movies = await response.json();
    const ratedFilter = movies.results.filter(movie => movie.vote_average >= minRating)
    return await ratedFilter;
}
