import apiClient from 'api/apiClient'

const BASE_URL = import.meta.env.VITE_RIJKSMUSEUM_API_ENDPOINT
const API_KEY = import.meta.env.VITE_RIJKSMUSEUM_API_KEY

export const fetchGalleryObjects = async (count = 3) => {
  const url = `${BASE_URL}?key=${API_KEY}&format=json&imgonly=true&ps=${count}`
  return apiClient(url)
}

export const fetchGalleryDetails = async (id: string) => {
  const url = `${BASE_URL}/${id}?key=${API_KEY}`
  return apiClient(url)
}
