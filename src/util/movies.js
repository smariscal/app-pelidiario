import TMDB from './TMDB';

export async function getPopularMovies(page) {
  let data = []
  try{
    const response = await fetch(`${TMDB.api_base_url}movie/popular?api_key=${TMDB.api_key}&page=${page}`)
    const responseData = await response.json()

    data = responseData?.results
  }catch (error) {
      
  }
  return data
}

export async function getNowMovies(page) {
  let data = []
  try{
    const response = await fetch(`${TMDB.api_base_url}movie/now_playing?api_key=${TMDB.api_key}&page=${page}`)
    const responseData = await response.json()
    
    data = responseData?.results    
  }catch (error) {
      
  }
  return data
}

export async function getMovieDetail(id) {
  try{
    const response = await fetch(`${TMDB.api_base_url}movie/${id}?api_key=${TMDB.api_key}&language=es-ES`)
    const responseData = await response.json()
    return responseData
  }catch (error) {
      
  }
}