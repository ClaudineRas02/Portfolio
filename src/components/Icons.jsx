export default function Icons({ icons = [] }) {
  return (
    <div className="flex items-center justify-center gap-5">
      {icons.map((icon, index) => {
        const key = `${icon.alt || "icon"}-${index}`;
        const isMail = icon.href?.startsWith("mailto:");

        if (icon.href) {
          return (
            <a
              key={key}
              href={icon.href}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noreferrer"}
              className="w-14 h-14 rounded-lg border border-gray-700 bg-[#111827] hover:border-[#e63946] transition flex items-center justify-center"
              aria-label={icon.alt}
            >
              <img src={icon.src} alt={icon.alt} className="w-7 h-7 object-contain" />
            </a>
          );
        }

        return (
          <div
            key={key}
            className="w-14 h-14 rounded-lg border border-gray-700 bg-[#111827] flex items-center justify-center"
          >
            <img src={icon.src} alt={icon.alt} className="w-10 h-7 object-contain" />
          </div>
        );
      })}
    </div>
  );
}
