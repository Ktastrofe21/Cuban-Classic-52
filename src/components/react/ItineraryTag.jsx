
const ItineraryTag = ({ title, onClick, isSelected }) => {
    const buttonStyle = isSelected
    ? "border-palete-blue-light bg-gradient-to-b from-[#42424218] to-[#030a3f5e]"
    : "border-transparent";
  return (
    <button
      onClick={() => onClick(title)}
      className={`${buttonStyle} border-b-2 text-center px-5  h-20 transition-all hover:bg-gradient-to-b hover:from-[#42424218] hover:to-[#030a3f5e] `}
    >
      <span className="text-paleta-blue-900 md:text-xl text-sm font-bold ">{title}</span>
    </button>
  )
}

export default ItineraryTag