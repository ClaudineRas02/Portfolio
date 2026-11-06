import { ExternalLink, FileBadge, X } from "lucide-react";

// fenêtre listant les certificats d'un parcours, chacun ouvert dans un nouvel onglet
export default function CourseList({ certificate, onClose }) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-list-title"
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-[#f8e7cc] bg-[#171729] px-5 py-7 text-white shadow-2xl shadow-black/60 sm:px-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#f8e7cc] pb-4">
          <div>
            <h3
              id="course-list-title"
              className="about-title-sour-gummy text-3xl text-[#f8e7cc]"
            >
              {certificate.title}
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              {certificate.courses.length} certificats obtenus
            </p>
          </div>

          <button
            type="button"
            aria-label="Fermer la liste des certificats"
            className="text-[#f8e7cc] transition hover:text-[#e63946]"
            onClick={onClose}
          >
            <X size={28} />
          </button>
        </div>

        <ul className="mt-5 space-y-3">
          {certificate.courses.map((course) => (
            <li key={course.id}>
              <a
                href={course.file}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-gray-700 bg-[#131726] px-4 py-3 transition hover:border-[#e63946]"
              >
                <FileBadge size={20} className="shrink-0 text-[#e63946]" />
                <span className="flex-1 text-sm text-gray-100">
                  {course.title}
                </span>
                <ExternalLink
                  size={16}
                  className="shrink-0 text-gray-500 transition group-hover:text-[#e63946]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
