export default function movieData(title, genreId, imagePath, releaseDate, id) {
    const movie = {
        title: title,
        genreId: genreId,
        releaseDate: releaseDate,
        imagePath: imagePath,
        id: id,
    };
    return movie;
}
