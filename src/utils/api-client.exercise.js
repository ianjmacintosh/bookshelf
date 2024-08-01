async function client(endpoint, customConfig = {}) {
  // 🐨 create the config you'll pass to window.fetch
  //    make the method default to "GET"
  const config = {
    method: 'GET',
    ...customConfig,
  }
  const fullURL = `${process.env.REACT_APP_API_URL}/${endpoint}`

  let response = await window.fetch(fullURL, config)

  if (!response.ok) {
    throw new Error('Bad response')
  }

  let books = await response.json()

  return books
}

export {client}
