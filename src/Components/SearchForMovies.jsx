import { useState } from "react";
import FetchMovies from "./FetchMovies";

export default async function SearchForMovies(type, setState, searchTerm, filter) {
    const movieInformation = {
        type: type,
        filter: filter,
        searchTerm: searchTerm
    }
    const response = await FetchMovies(movieInformation);
    setState([response]);
}
