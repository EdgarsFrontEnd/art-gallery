import { useEffect } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'

const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage<boolean>('isDark', false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleDark = () => {
    setIsDark(!isDark)
  }

  return { isDark, toggleDark }
}

export default useDarkMode
