import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-band bg-white">
      <div className="container-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
          Skills
        </p>
        <h2 className="section-title mt-3">使用技術</h2>
        <p className="section-lead">
          個人開発で扱っている言語、フレームワーク、インフラ、品質改善のためのツールです。
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-slate-50">
                <skill.icon
                  className="h-6 w-6"
                  style={{ color: skill.color }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-950">
                {skill.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
