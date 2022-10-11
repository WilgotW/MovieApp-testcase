import React from 'react'

const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function FetchMovies(movieInformation) {
    switch(movieInformation.type) {
        case "movies": {
            const respone = await fetch("https://api.themoviedb.org/3/search/movie?api_key=d3967aacd6e3ef518c42a75acde3d777&language=en-US&query=" + movieInformation.searchTerm +"&page=1&include_adult=false")
                .then(res=>res.clone().json());
            return respone;
        }
        default: {
            alert("Error");
            return null;
        }
    }
    
}
