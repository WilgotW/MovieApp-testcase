export default async function getFilteredMovies(genreName, genreIds, page) {
    const id = genreIds.genres.map(genre => {  
        if(genre.name == genreName){
            console.log(genre.name + " has the id: " + genre.id + " and ")
            return genre.id;
        }
    });
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`)
    const movies = await response.json();
    return await movies.results;
}
