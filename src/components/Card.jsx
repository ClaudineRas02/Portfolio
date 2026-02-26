const Card = ({ icon, title, description, className = "" }) => {
  return (
    <div
      className={`group bg-[#111827] border border-gray-800 rounded-2xl p-6 flex flex-col gap-4
                 transition-all duration-300
                 hover:border-[#e63946]/40
                 hover:shadow-lg hover:shadow-[#e63946]/10 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl
                     bg-[#e63946]
                     flex items-center justify-center
                     text-white text-xl
                     shadow-md shadow-[#e63946]/20
                     group-hover:scale-110
                     transition-transform duration-300"
        >
          {icon}
        </div>

        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
