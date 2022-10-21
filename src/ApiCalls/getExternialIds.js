export default async function getExternialId(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/external_ids?api_key=${process.env.REACT_APP_API_KEY}`)
    const id = await response.json();
    return await id.imdb_id;
}
