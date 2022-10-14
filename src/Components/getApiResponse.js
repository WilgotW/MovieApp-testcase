export default function getApiResponse(movieInformation) {
    let response;
    function getMovies(){
        movieInformation.activeFilter == "" ? async () => {
            const genreId = movieInformation.genre_ids[0].genres.map(genre => {  
                if(genre.name == activeGenre){
                    return genre.id; 
                } 
            });
            response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key="+key+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+movieInformation.searchTerm+"&with_genres="+genreId+"&with_watch_monetization_types=flatrate")
        } : async () =>{
            response = await fetch("https://api.themoviedb.org/3/search/movie?api_key="+key+"&language=en-US&query=" + movieInformation.searchTerm +"&page="+movieInformation.page+"&include_adult=false")
        }
    }
    
    return response.json();
}
