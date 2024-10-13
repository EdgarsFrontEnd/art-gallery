const apiClient = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  })

  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error(`HTTP error! Status: ${response.status}`)
  }

  return response.json()
}

export default apiClient
