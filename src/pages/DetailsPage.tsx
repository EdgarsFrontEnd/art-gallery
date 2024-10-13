import ErrorDisplay from 'components/ErrorDisplay'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchGalleryDetails } from 'api/artGalleryApi'
import { useError } from 'context/ErrorContext'

interface ArtObject {
  title: string
  description: string
  longTitle: string
  webImage: {
    url: string
  }
  dimensions: {
    type: string
    value: string
    unit: string
  }[]
  physicalMedium: string
  materials: string[]
  productionPlaces: string[]
  dating: {
    presentingDate: string
  }
}

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [artObject, setArtObject] = useState<ArtObject | null>(null)

  const { setErrorMessage } = useError()

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setErrorMessage('No ID provided.')
        return
      }

      try {
        const data = await fetchGalleryDetails(id)
        setArtObject(data.artObject)
      } catch (error) {
        setErrorMessage(`Error fetching art object: ${error}`)
      }
    }

    fetchData()
  }, [id, setErrorMessage])

  if (!artObject) {
    return <div className="text-center text-lg">Loading...</div>
  }

  const { title, description, longTitle, webImage, dimensions, materials, productionPlaces, dating, physicalMedium } =
    artObject

  const modifyImgSrcToResize = (imgSrc: string, modifier: number = 1000): string => {
    return imgSrc.replace(/(s\d+)$/, `s${modifier}`)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ErrorDisplay />

      <h1 className="text-3xl font-bold mb-4">{longTitle}</h1>
      <section className="flex gap-4 py-8">
        <figure className="max-w-sm">
          <img className="h-auto max-w-full rounded-lg" src={modifyImgSrcToResize(webImage.url)} alt={title} />
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{title}</figcaption>
        </figure>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Details:</h3>
          <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
            <li>
              <strong>Physical Medium:</strong> {physicalMedium}
            </li>
            <li>
              <strong>Presenting Date:</strong> {dating.presentingDate}
            </li>
            <li>
              <strong>Dimensions:</strong> {dimensions.map((dim) => `${dim.type}: ${dim.value}${dim.unit}`).join(', ')}
            </li>
            <li>
              <strong>Materials:</strong> {materials.join(', ')}
            </li>
            <li>
              <strong>Production Places:</strong> {productionPlaces.join(', ')}
            </li>
          </ul>
        </div>
      </section>
      <p className="text-lg mb-6">{description}</p>
      <button
        type="button"
        onClick={handleGoBack}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Go Back
      </button>
    </div>
  )
}

export default DetailsPage
