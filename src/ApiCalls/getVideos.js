export default async function getVideos(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    const videos = await response.json();
    const videoKeys = await videos.results.map((video) => video.key);
    const firstFive = await videoKeys.splice(0, 5);
    return await firstFive;
}
