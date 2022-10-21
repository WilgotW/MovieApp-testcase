export default async function getImagesConfig() {
    const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
    const config = await response.json();
    return await config.images;
}
