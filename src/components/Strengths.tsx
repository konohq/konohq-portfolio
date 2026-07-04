import { strengths } from "../data/strengths";

export default function Strengths() {
  return (
    <section id="strengths" className="section-band bg-white">
      <div className="container-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
          Strengths
        </p>
        <h2 className="section-title mt-3">強み</h2>
        <p className="section-lead">
          フロントエンドからバックエンド、品質改善まで、Webアプリケーション全体を意識して開発しています。
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((strength) => (
            <article
              key={strength.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-950">
                {strength.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {strength.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
