export default function Post({
  image,
  alt,
  title,
  description,
  onImageClick,
  children,
}) {
  return (
    <article className="h-full w-full max-w-3xl overflow-hidden rounded-[1.6rem] border border-gray-700 bg-[#0d1117] text-white shadow-[0_0_0_1px_rgba(230,57,70,0.2)] md:max-w-[320px] md:block">
      <div className="flex h-full flex-col md:block">
        <button
          type="button"
          aria-label={`Ouvrir ${alt} en grand`}
          onClick={onImageClick}
          className="group block w-full cursor-zoom-in md:block"
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-48 w-full object-cover transition-transform duration-200 group-hover:scale-[1.01] md:h-44 md:min-h-0 md:w-full"
          />
        </button>

        <div className="flex min-h-45 w-full flex-col justify-center gap-3 p-4 text-left md:min-h-64 md:w-full md:p-5 md:text-center">
          <div>
            <h3 className="about-title-sour-gummy text-2xl leading-tight md:text-3xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {description}
            </p>
          </div>
          {children ? (
            <div className="flex justify-start md:justify-center">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
