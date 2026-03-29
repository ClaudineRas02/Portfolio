export default function Contact({
  icon,
  label,
  sublabel,
  href,
  className = "",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:border-[#e63946]/40 hover:bg-white/8 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#e63946]">
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-xs text-gray-400">{sublabel}</p>
        </div>
      </div>
      <span className="text-gray-500 transition group-hover:text-[#e63946]">↗</span>
    </a>
  );
}
