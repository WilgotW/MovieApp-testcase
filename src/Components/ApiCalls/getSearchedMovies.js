const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getSearchedMovies(searchTerm, page) {
    const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key="+key+"&language=en-US&query=" + searchTerm +"&page="+page+"&include_adult=false")
    return response.json();
}
