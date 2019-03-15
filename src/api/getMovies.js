import { get, getIdFromUrl } from './_helper';

const BASE_URL = 'films';

export const getResources = async () => {
  const { results } = await get(BASE_URL);

  return results.map(item => {
    return {
      ...item, 
      id: getIdFromUrl(item.url)
    }
  })
}

export const getResourceItemById = (id) => {
  return get(`${BASE_URL}/${id}`)
}
