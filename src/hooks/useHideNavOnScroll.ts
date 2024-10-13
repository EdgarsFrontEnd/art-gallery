import { useEffect, useState } from 'react'

/**
 * Manages the visibility of a navigation based on the user's scroll position.
 *
 * The navigation remains visible at the top of the page or when user scrolls up, scrolling down hides the navigation.
 *
 * @returns {boolean} isVisible
 */
const useHideNavOnScroll = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY === 0)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return isVisible
}

export default useHideNavOnScroll
