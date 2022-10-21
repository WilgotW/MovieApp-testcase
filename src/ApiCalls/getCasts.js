export default async function getCasts(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
  const casts = await response.json()
  return await casts.cast;
}
