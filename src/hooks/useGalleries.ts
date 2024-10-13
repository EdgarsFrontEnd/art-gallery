/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { fetchGalleryObjects } from 'api/artGalleryApi'
import useLocalStorage from 'hooks/useLocalStorage'

const GALLERY_FETCH_COUNT = 50
const GALLERY_MIN_COUNT = 10
const GALLERY_DISPLAY_COUNT = 3

export interface GalleryObject {
  id: string
  title: string
  principalOrFirstMaker: string
  webImage: {
    url: string
  }
  objectNumber: string
}

/**
 * Custom hook for managing the art gallery objects.
 * This hook fetches gallery objects, stores them in local storage,
 * and provides a subset of these objects for display.
 *
 * Features:
 * - Fetches gallery objects from the API.
 * - Stores objects in local storage for data persistence & to reduce API calls.
 * - Displays a subset of objects, with a shuffle option.
 * - Automatically populates storage if the object count is low.
 *
 * @returns {Object} Contains:
 * - `displayedGallery` (GalleryObject[]): Currently displayed gallery objects.
 * - `handleShuffle` (function): Function to shuffle displayed objects.
 */
const useGalleries = () => {
  const [galleryObjects, setGalleryObjects] = useLocalStorage<GalleryObject[]>('galleryObjects', [])
  const [galleryObjectsCount, setGalleryObjectsCount] = useLocalStorage<number>('galleryObjectsCount', 0)
  const [displayedGallery, setDisplayedGallery] = useLocalStorage<GalleryObject[]>('displayedGallery', [])
  const [initDone, setInitDone] = useState(false)

  const storeInitialGalleryObjects = async () => {
    if (!galleryObjects.length) {
      const fetchedGallery = (await fetchGalleryObjects(GALLERY_FETCH_COUNT)).artObjects
      setGalleryObjects(fetchedGallery)
    }
    setInitDone(true)
  }

  useEffect(() => {
    storeInitialGalleryObjects()
  }, [])

  const updateDisplayedGallery = () => {
    const newDisplayedGallery = galleryObjects.slice(0, GALLERY_DISPLAY_COUNT)
    const remainingGallery = galleryObjects.slice(GALLERY_DISPLAY_COUNT)
    setGalleryObjects(remainingGallery)
    setGalleryObjectsCount(remainingGallery.length)
    setDisplayedGallery(newDisplayedGallery)
  }

  useEffect(() => {
    if (initDone) updateDisplayedGallery()
  }, [initDone])

  const populateGalleryStorage = async () => {
    const fetchedGallery = (await fetchGalleryObjects(GALLERY_FETCH_COUNT)).artObjects
    setGalleryObjects((prevGallery) => [...prevGallery, ...fetchedGallery])
  }

  useEffect(() => {
    if (galleryObjectsCount < GALLERY_MIN_COUNT) {
      populateGalleryStorage()
    }
  }, [galleryObjectsCount])

  const handleShuffle = async () => {
    updateDisplayedGallery()
  }

  return { displayedGallery, handleShuffle }
}

export default useGalleries
