const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getNowPlaying() {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key="+key+"&language=en-US&page=1")
    const movies = await response.json();
    return await movies.results;
}
