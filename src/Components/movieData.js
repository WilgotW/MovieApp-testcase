export default function movieData(title, genreId, imagePath, releaseDate, id, size) {
    const movie = {
        title: title,
        genreId: genreId,
        releaseDate: releaseDate,
        imagePath: imagePath,
        id: id,
        size: size
    };
    return movie;
}
