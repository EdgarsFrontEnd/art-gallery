import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'

interface ErrorContextType {
  errorMessage: string | null
  setErrorMessage: (message: string | null) => void
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined)

export const ErrorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [errorMessage])

  const value = useMemo(() => ({ errorMessage, setErrorMessage }), [errorMessage])

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
}

export const useError = () => {
  const context = useContext(ErrorContext)
  if (context === undefined) {
    throw new Error('useError must be used within an ErrorProvider')
  }
  return context
}
