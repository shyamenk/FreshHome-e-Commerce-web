const Spinner = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white bg-black z-1000">
      <div className="w-16 h-16 border-4 border-dashed rounded-full border-hover animate-ping"></div>
    </div>
  )
}

export default Spinner
