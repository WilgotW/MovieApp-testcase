import React from 'react'

export default function getApiResponse(func, movieInformation) {
    let response;
    async function getMovies(){
        movieInformation.activeFilter == "" ? () => {
            movieInformation.activeFilter;        
            const genreId = movieInformation.genre_ids[0].genres.map(genre => {  
                if(genre.name == activeGenre){
                    console.log(genre.name + " has the id: " + genre.id + " and ")
                    return genre.id;
                }
            });
            // const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=d3967aacd6e3ef518c42a75acde3d777&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+movieInformation.searchTerm+"&with_genres="+genreId+"&with_watch_monetization_types=flatrate")
            //     .then(res=>res.clone().json());
            // const movies = response.results;
        } : () =>{

            response = await fetch("https://api.themoviedb.org/3/search/movie?api_key="+key+"&language=en-US&query=" + movieInformation.searchTerm +"&page="+movieInformation.page+"&include_adult=false")
        }
    }
   
    return response.json();
}
