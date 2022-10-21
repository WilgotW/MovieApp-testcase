export default async function getMovieByExternialId(externalId) {
    const response = await fetch(`https://api.themoviedb.org/3/find/${externalId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&external_source=imdb_id`)
    const movie = await response.json();
    return await movie.movie_results[0];
}
