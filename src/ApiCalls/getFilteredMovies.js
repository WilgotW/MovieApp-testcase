export default async function getFilteredMovies(genreName, genreIds, page, minRating) {
    const id = genreIds.genres.map(genre => {  
        if(genre.name == genreName){
            console.log(genre.name + " has the id: " + genre.id)
            return genre.id;
        }
    });
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`)
    const movies = await response.json();
    const ratedFilter = movies.results.filter(movie => movie.vote_average >= minRating)
    console.log(await movies)
    return await ratedFilter;
}
