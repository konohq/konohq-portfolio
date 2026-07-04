import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-band bg-slate-50">
      <div className="container-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
          Projects
        </p>
        <h2 className="section-title mt-3">制作実績</h2>
        <p className="section-lead">
          認証、CRUD、カンバンUI、タスク管理など、実務を意識して開発したWebアプリケーションです。
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-xl font-bold tracking-normal text-slate-950">
                  {project.title}
                </h3>
                <span
                  className={
                    project.status === "デプロイ済み"
                      ? "rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                      : "rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                  }
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.highlights && (
                <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50/50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                    工夫した点
                  </p>
                  <ul className="mt-3 space-y-2 text-xs leading-6 text-slate-700">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.testUsers && (
                <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    テストユーザー
                  </p>
                  <div className="mt-3 grid gap-3">
                    {project.testUsers.map((user) => (
                      <div
                        key={user.email}
                        className="rounded-md border border-slate-200 bg-white p-3 text-xs leading-6 text-slate-600"
                      >
                        <p className="font-semibold text-slate-900">
                          {user.label}
                        </p>
                        <p className="break-all">
                          Email:{" "}
                          <span className="font-medium text-slate-800">
                            {user.email}
                          </span>
                        </p>
                        <p>
                          Pass:{" "}
                          <span className="font-medium text-slate-800">
                            {user.password}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={
                  project.githubUrl
                    ? "mt-auto grid gap-3 pt-6 sm:grid-cols-2"
                    : "mt-auto grid gap-3 pt-6"
                }
              >
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center justify-center rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                  >
                    デモを見る
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-md bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-400"
                  >
                    デモ未公開
                  </button>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  >
                    GitHubを見る
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
