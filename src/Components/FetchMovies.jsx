import React from 'react'

const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function FetchMovies(movieInformation) {
    switch(movieInformation.type) {
        case "movies": {
            const respone = await fetch("https://api.themoviedb.org/3/search/movie?api_key="+key+"&language=en-US&query=" + movieInformation.searchTerm +"&page=1&include_adult=false")
                .then(res=>res.clone().json());
            const movies = respone.results;
            if(movieInformation.filter == ""){
                return movies;
            }else{
                // const findGenre = movieInformation.genres.map(genre => genre.id == )
                const filteredMovies = movies.filter(movie => movie.genre_ids == movieInformation.genres)
                
                return movies;
            }
        }
        case "config": {
            const respone = await fetch("https://api.themoviedb.org/3/configuration?api_key=d3967aacd6e3ef518c42a75acde3d777")
                .then(res=>res.clone().json());
            return respone;
        }
        case "genres": {
            const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d3967aacd6e3ef518c42a75acde3d777&language=en-US")
                .then(res => res.clone().json());
            return response;
        }
        default: {
            alert("Error");
            return null;
        }
    }
    
}
