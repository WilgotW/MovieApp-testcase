import React from 'react'

export default function CreateCall(type, key, searchTerm, genreId, page) {
  const url = "https://api.themoviedb.org/3/" 
                + type + "api_key=" + key + "&language=en-US&query=" + searchTerm + "&page=" + page +
                "&with_genres=" + genreId + "&with_watch_monetization_types=flatrate";
  return url
}
