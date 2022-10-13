import React from 'react'

const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function FetchMovies(movieInformation) {
    switch(movieInformation.type) {
        case "movies": {
            const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key="+key+"&language=en-US&query=" + movieInformation.searchTerm +"&page="+movieInformation.page+"&include_adult=false")
                .then(res=>res.clone().json());
            const movies = response.results;
            console.log(response);
            return movies;
        }
        case "trending" : {
            const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key="+key)
                .then(res=>res.clone().json());
            
            return response;
        }
        case "filter": {
            const activeGenre = movieInformation.filter;        
            const genreId = movieInformation.genre_ids[0].genres.map(genre => {  
                if(genre.name == activeGenre){
                    console.log(genre.name + " has the id: " + genre.id + " and ")
                    return genre.id;
                }
            });
            const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=d3967aacd6e3ef518c42a75acde3d777&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+movieInformation.searchTerm+"&with_genres="+genreId+"&with_watch_monetization_types=flatrate")
                .then(res=>res.clone().json());
            const movies = response.results;
            return movies;
        }
        case "config": {
            const respone = await fetch("https://api.themoviedb.org/3/configuration?api_key="+key)
                .then(res=>res.clone().json());
            return respone;
        }
        case "genres": {
            const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key="+key+"&language=en-US")
                .then(res => res.clone().json());
            return response;
        }
        default: {
            alert("Error");
            return null;
        }
    }
    
}
