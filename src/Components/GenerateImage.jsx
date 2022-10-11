import React from 'react'

export default function GenerateImage({path, size}) {
    return ("http://image.tmdb.org/t/p/" + size + path);
}
