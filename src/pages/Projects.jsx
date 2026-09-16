import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiExternalLink, FiX } from "react-icons/fi";
import projects from "../data/projects";

function FeatureList({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map(item => (
        <li key={item} className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-orange" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);
  const links = project.links?.length ? project.links : project.link ? [{ label: "Buka Link", url: project.link }] : [];

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-title"
      onCancel={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
        }
      }}
      className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-[920px] overflow-y-auto rounded-[20px] border border-gray-200 bg-gray-50 p-0 text-gray-900 shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm dark:border-white/10 dark:bg-[#0b0d12] dark:text-soft-white"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-200 bg-gray-50 px-5 py-3 dark:border-white/10 dark:bg-[#0b0d12]">
        <p className="text-xs text-gray-500 dark:text-gray-400">Projects / {project.title}</p>
        <button type="button" onClick={onClose} aria-label="Tutup detail proyek" className="shrink-0 rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-white/10">
          <FiX size={20} />
        </button>
      </div>
      <div className="p-4 sm:p-7">
        <header className="rounded-[20px] border border-gray-200 bg-white bg-gradient-to-b from-accent-orange/5 to-transparent p-5 shadow-lg dark:border-white/10 dark:bg-[#121620] sm:p-7">
          <span className="inline-flex rounded-full border border-accent-orange/30 bg-accent-orange/10 px-3 py-1.5 text-xs font-semibold text-amber-800 dark:text-accent-orange">
            {project.category || "Portfolio Project"}
          </span>
          <h2 id="project-title" className="mb-3 mt-4 break-words text-3xl font-bold text-accent-orange sm:text-4xl">{project.title}</h2>
          {project.images?.map((image, index) => (
            <img key={image.url} src={image.url} alt={index === 0 ? project.title : `${project.title} - gambar ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} className="mt-5 h-auto w-full rounded-xl border border-gray-200 dark:border-white/10" />
          ))}
          {project.technologies?.length > 0 && (
            <ul aria-label="Teknologi proyek" className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map(technology => <li key={technology} className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 text-xs dark:border-white/10 dark:bg-white/5">{technology}</li>)}
            </ul>
          )}
        </header>
        <div className="mt-6 grid gap-6 min-[900px]:grid-cols-3">
          <section className="min-w-0 min-[900px]:col-span-2">
            {project.description && <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>}
            <h3 className="text-xl font-bold">Fitur & Tampilan</h3>
            {project.features?.length > 0 ? (
              <div className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><FeatureList items={project.features} /></div>
            ) : (
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Detail fitur belum ditambahkan.</p>
            )}
          </section>
          <aside className="min-w-0 space-y-4">
            {project.summary?.length > 0 && (
              <section className="rounded-2xl border border-dashed border-gray-300 p-4 dark:border-white/20">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-orange">Ringkasan</h3>
                <div className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><FeatureList items={project.summary} /></div>
              </section>
            )}
            <section className="rounded-2xl border border-dashed border-gray-300 p-4 dark:border-white/20">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-orange">Tautan Proyek</h3>
              {links.length > 0 ? (
                <div className="mt-4 flex flex-col items-start gap-3">
                  {links.map(link => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-accent-orange px-4 py-2.5 text-sm font-bold text-[#0b0d12] hover:brightness-110">
                      {link.label} <FiExternalLink className="shrink-0" />
                    </a>
                  ))}
                </div>
              ) : (
                <>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">URL tidak tersedia untuk project ini.</p>
                  <button type="button" disabled className="mt-4 rounded-xl bg-gray-200 px-3 py-2 text-sm opacity-60 dark:bg-white/10">Link Tidak Tersedia</button>
                </>
              )}
            </section>
          </aside>
        </div>
        <footer className="mt-7 flex justify-end border-t border-gray-200 pt-4 dark:border-white/10">
          <button type="button" onClick={onClose} className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-semibold hover:bg-gray-200 dark:border-white/20 dark:hover:bg-white/10">Tutup</button>
        </footer>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <DashboardLayout>
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">
        &quot; <span className="text-accent-orange">Projects</span>
      </h1>
      {projects.length === 0 && <p>Belum ada proyek tersedia.</p>}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map(item => (
          <article key={item.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-md transition duration-300 hover:border-accent-orange/60 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
            <button type="button" aria-label={"Lihat detail " + item.title} onClick={() => setSelectedProject(item)} className="group flex h-full w-full flex-col text-left focus-visible:outline-offset-[-4px]">
              {item.images?.length > 0 && <img src={item.images[0].url} alt={item.title} loading="lazy" className="aspect-video w-full bg-black/5 object-contain" />}
              <div className="flex w-full flex-1 flex-col p-4">
                {item.category && <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-table-heading">{item.category}</p>}
                <h2 className="text-xl font-bold">{item.title}</h2>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-orange">
                  Lihat detail <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </DashboardLayout>
  );
}
