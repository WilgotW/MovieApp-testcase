const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getMovieByExternialId(externalId) {
    const response = await fetch("https://api.themoviedb.org/3/find/"+externalId+"?api_key="+key+"&language=en-US&external_source=imdb_id")
    const movie = await response.json();
    return await movie.movie_results[0];
}
