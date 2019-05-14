import { get, getIdFromUrl } from './_helper';

const BASE_URL = 'films';

export const getResources = async () => {
  const { results, count } = await get(BASE_URL);

  const movies = results.map(item => {
    return {
      ...item, 
      id: getIdFromUrl(item.url)
    }
  })

  return {movies, count}
}

export const getResourceItemById = (id) => {
  return get(`${BASE_URL}/${id}`)
}
