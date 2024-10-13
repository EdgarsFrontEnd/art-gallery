import { useError } from 'context/ErrorContext'

const ErrorDisplay = () => {
  const { errorMessage } = useError()

  return (
    <div
      className={`${errorMessage ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 z-50 w-full p-4 mb-4 text-center text-sm text-red-800 rounded-lg bg-red-50/95 dark:bg-gray-800/95 dark:text-red-400 transform transition-transform duration-500 ease-in-out`}
      role="alert"
    >
      {errorMessage && (
        <>
          <span className="font-medium">Error: </span>
          {errorMessage}
        </>
      )}
    </div>
  )
}

export default ErrorDisplay
