import { get, getIdFromUrl } from './_helper';

const BASE_URL = 'people';

export const getResources = async ({ page = 1 }) => {
  const urlParams = new URLSearchParams()
  urlParams.set('page', page)
  const { results, count } = await get(`${BASE_URL}?${urlParams.toString()}`);

  const people = results.map(item => {
    return {
      ...item, 
      id: getIdFromUrl(item.url)
    }
  })

  return {people, count}
}

export const getResourceItemById = (id) => {
  return get(`${BASE_URL}/${id}`)
}