import ImageWithSpinner from 'components/ImageWithSpinner'
import { Link } from 'react-router-dom'

interface ArtGalleryCardProps {
  art: {
    id: string
    title: string
    principalOrFirstMaker: string
    webImage: { url: string }
    objectNumber: string
  }
}

const ArtGalleryCard = ({ art }: ArtGalleryCardProps) => {
  const modifyImgSrcToResize = (imgSrc: string, modifier: number = 1000): string => {
    return imgSrc.replace(/(s\d+)$/, `s${modifier}`)
  }

  return (
    <Link
      to={`/details-page/${art.objectNumber}`}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <ImageWithSpinner
        className="rounded-t-lg w-full h-72 object-cover"
        src={modifyImgSrcToResize(art.webImage.url)}
        alt={art.title}
      />
      <div className="flex flex-col justify-between items-start h-56 p-5">
        <div>
          <h3 className="overflow-hidden text-ellipsis line-clamp-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {art.title}
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{art.principalOrFirstMaker}</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </Link>
  )
}

export default ArtGalleryCard
