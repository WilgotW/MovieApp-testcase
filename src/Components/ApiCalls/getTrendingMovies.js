const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getTrendingMovies() {
    const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key="+key)
    return response.json();
}
