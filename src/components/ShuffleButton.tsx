type ShuffleButtonProps = {
  onClick: () => void
}

const ShuffleButton = ({ onClick }: ShuffleButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute left-1/2 transform -translate-x-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-lg px-5 py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Shuffle Art Pieces
    </button>
  )
}

export default ShuffleButton
