const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getVideos(movieId) {
    const response = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key="+key+"&language=en-US")
    const video = await response.json();
    return await video.results[0].key;
}
