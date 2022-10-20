const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getExternialId(movieId) {
    const response = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/external_ids?api_key="+key)
    const id = await response.json();
    return await id.imdb_id;
}
