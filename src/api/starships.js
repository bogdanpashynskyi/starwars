const BASE_API_URL = 'https://swapi.co/api/'

export const getAll = (url) => { 
  return fetch(BASE_API_URL + url)
    .then(response => {
      return response.json()
    })
}

