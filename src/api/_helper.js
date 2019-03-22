const BASE_API_URL = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api/'

export const get = url => { 
  return fetch(BASE_API_URL + url)
    .then(response => {
      return response.json()
    })
}

export const getIdFromUrl = url => {
  const regExp = /(\d+)\/$/
  const [, id] = url.match(regExp)

  return id;
}

