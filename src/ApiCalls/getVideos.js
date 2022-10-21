export default async function getVideos(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    const video = await response.json();
    return await video.results[0].key;
}
