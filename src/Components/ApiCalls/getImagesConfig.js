const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getImagesConfig() {
    const respone = await fetch("https://api.themoviedb.org/3/configuration?api_key="+key)
    return respone.json();
}
