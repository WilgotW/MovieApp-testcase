import { useState } from "react";
import FetchMovies from "./FetchMovies";

export default async function SearchForMovies(type, setState, searchTerm, filter, genre_ids) {
    const movieInformation = {
        type: type,
        filter: filter,
        searchTerm: searchTerm,
        genre_ids: genre_ids
    }
    const response = await FetchMovies(movieInformation);
    await setState([response]);
}
