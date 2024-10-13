import ToggleDarkButton from 'components/toggleDarkButton'
import ShuffleButton from 'components/ShuffleButton'
import debounce from 'utils/debounce'
import useHideNavOnScroll from 'hooks/useHideNavOnScroll'

interface HeaderProps {
  handleShuffle: () => void
  className?: string
}

const Header = ({ handleShuffle, className = '' }: HeaderProps) => {
  const handleShuffleDebounce = debounce(handleShuffle, 300)

  const showNavbar = useHideNavOnScroll()

  return (
    <header
      className={`${className} fixed z-10 top-0 left-0 w-full transition-transform duration-300 bg-white border-gray-200 dark:bg-gray-800 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className="relative flex justify-between items-center">
        <h1 className="self-center text-lg font-semibold whitespace-nowrap dark:text-white invisible sm:visible">
          Rijksmuseum Shuffle
        </h1>
        <ShuffleButton onClick={handleShuffleDebounce} />
        <ToggleDarkButton />
      </nav>
    </header>
  )
}

export default Header
