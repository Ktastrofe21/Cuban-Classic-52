const ItineraryTag = ({ title, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(title)}
      className={`
        border-b-2 text-center px-5 h-20 transition-all
        ${
          isSelected
            ? "border-emerald-400 bg-gradient-to-b from-[#42424218] to-[#0a3f1a5e]"
            : "border-transparent hover:bg-gradient-to-b hover:from-[#42424218] hover:to-[#1a1a1a3a]"
        }
      `}
    >
      <span className="text-gray-800 dark:text-gray-200 md:text-xl text-sm font-bold">
        {title}
      </span>
    </button>
  );
};

export default ItineraryTag;