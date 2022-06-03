import TMDB from './TMDB';

export async function getPopularMovies(page, genreId) {
  let data = []
  try{
    const response = await fetch(`${TMDB.api_base_url}movie/popular?api_key=${TMDB.api_key}&page=${page}`)
    const responseData = await response.json()


    if (genreId === undefined)
      data = responseData?.results
    else
      data = responseData?.results.filter( (m) => {
        return m.genre_ids.includes(Number(genreId))
      })
  }catch (error) {
      
  }
  return data
}

export async function getNowMovies(page, genreId) {
  let data = []
  try{
    const response = await fetch(`${TMDB.api_base_url}movie/now_playing?api_key=${TMDB.api_key}&page=${page}`)
    const responseData = await response.json()

    console.log('genero id a buscar: ' + genreId)
    
    if (genreId === undefined)
      data = responseData?.results
    else
      data = responseData?.results.filter( (m) => {
        return m.genre_ids.includes(Number(genreId))
      })    
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