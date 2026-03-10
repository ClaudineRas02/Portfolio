export default function Post({
  image,
  alt,
  title,
  description,
  onImageClick,
}) {
  return (
    <article className="w-full max-w-3xl overflow-hidden rounded-[1.6rem] border border-gray-700 bg-[#0d1117] text-white shadow-[0_0_0_1px_rgba(230,57,70,0.2)] md:max-w-[320px] md:block">
      <button
        type="button"
        aria-label={`Open ${alt} in full view`}
        onClick={onImageClick}
        className="group block w-full cursor-zoom-in md:block"
      >
        <div className="flex flex-col md:block">
          <img
            src={image}
            alt={alt}
            className="h-48 w-full object-cover transition-transform duration-200 group-hover:scale-[1.01] md:h-44 md:min-h-0 md:w-full"
          />

          <div className="flex min-h-[180px] w-full flex-col justify-center p-4 text-left md:min-h-[16rem] md:w-full md:p-5 md:text-center">
            <h3 className="about-title-sour-gummy text-2xl leading-tight md:text-3xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
          </div>
        </div>
      </button>
    </article>
  );
}
