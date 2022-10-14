const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getImagesConfig() {
    const response = await fetch("https://api.themoviedb.org/3/configuration?api_key="+key)
    const config = response.json();
    return config.images;
}
