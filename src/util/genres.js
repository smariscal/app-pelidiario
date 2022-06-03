import TMDB from './TMDB';

export async function getGenres() {
  let data = []
  try{
    const response = await fetch(`${TMDB.api_base_url}genre/movie/list?api_key=${TMDB.api_key}&language=es-ES`)
    const responseData = await response.json()
    data = responseData?.genres
  }catch (error) {
      
  }
  return data
}