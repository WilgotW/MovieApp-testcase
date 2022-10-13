import { useState } from "react";
import FetchMovies from "./FetchMovies";

export default async function SearchForMovies(type, setState, searchTerm, filter, genre_ids, page) {
    const movieInformation = {
        type: type,
        filter: filter,
        searchTerm: searchTerm,
        genre_ids: genre_ids,
        page: page
    }
    const response = await FetchMovies(movieInformation);
    await setState([response]);
}
