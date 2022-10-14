import React from 'react'

export default function GetApiResponse(movieInformation) {
    let response;
    async function getMovies(){
        response = await fetch("https://api.themoviedb.org/3/search/movie?api_key="+key+"&language=en-US&query=" + movieInformation.searchTerm +"&page="+movieInformation.page+"&include_adult=false")
    }
    return response.json();
}
