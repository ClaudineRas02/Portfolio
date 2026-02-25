export default function Card({ icon, title, description }) {
  return (
    <div className="group relative bg-[#13131f] border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-lg">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
