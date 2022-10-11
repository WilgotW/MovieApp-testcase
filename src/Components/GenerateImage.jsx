import React from 'react'

export default function GenerateImage({baseUrl, size, path}) {
    console.log(size)
    return (baseUrl + size + path);
}
