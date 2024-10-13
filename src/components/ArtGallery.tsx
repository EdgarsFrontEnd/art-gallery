import ArtGalleryCard from 'components/ArtGalleryCard'
import { GalleryObject } from 'hooks/useGalleries'

interface ArtGalleryProps {
  displayedGallery: GalleryObject[]
}

const ArtGallery = ({ displayedGallery }: ArtGalleryProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayedGallery.map((artObj: GalleryObject) => (
        <ArtGalleryCard key={artObj.id} art={artObj} />
      ))}
    </section>
  )
}

export default ArtGallery
