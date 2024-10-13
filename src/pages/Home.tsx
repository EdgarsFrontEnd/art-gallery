import Header from 'components/Header'
import ArtGallery from 'components/ArtGallery'
import useGalleries from 'hooks/useGalleries'
import Footer from 'components/Footer'
import ErrorDisplay from 'components/ErrorDisplay'

const Home = () => {
  const { displayedGallery, handleShuffle } = useGalleries()

  return (
    <>
      <ErrorDisplay />
      <Header handleShuffle={handleShuffle} className="p-4 md:p-6 lg:p-8" />

      <main className="flex flex-col items-center p-4 mt-20 md:p-6 lg:p-8">
        <ArtGallery displayedGallery={displayedGallery} />
      </main>

      <Footer className="p-4 md:p-6 lg:p-8" />
    </>
  )
}

export default Home
