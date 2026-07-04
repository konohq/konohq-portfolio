export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="container-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Full Stack Web Application
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            Web Developer Portfolio
          </h1>
          <p className="mt-6 text-lg font-semibold leading-8 text-slate-700">
            Rails API / React / TypeScript / PostgreSQL を用いたWebアプリケーション開発に取り組んでいます。
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            ユーザーに価値を届けるWebアプリケーションを開発したいと考え、日々学習と個人開発に取り組んでいます。
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-blue-800"
            >
              制作実績を見る
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 shadow-soft">
          <div className="grid gap-4">
            {[
              { name: "Rails API", detail: "API設計・認証・CRUD" },
              { name: "React", detail: "SPA UI・状態管理" },
              { name: "TypeScript", detail: "型を活かした実装" },
              { name: "PostgreSQL", detail: "リレーショナルデータ設計" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-950">
                  {item.name}
                </p>
                <p className="mt-2 text-xs font-medium text-slate-500">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
