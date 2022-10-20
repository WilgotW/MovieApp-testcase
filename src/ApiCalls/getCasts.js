const key = "d3967aacd6e3ef518c42a75acde3d777";
export default async function getCasts(movieId) {
  const response = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/credits?api_key="+key)
  const casts = await response.json()
  console.log(await casts.cast);
  return await casts.cast;
}
