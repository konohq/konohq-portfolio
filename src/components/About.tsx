export default function About() {
  return (
    <section id="about" className="section-band bg-slate-50">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
            About
          </p>
          <h2 className="section-title mt-3">自己紹介</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              Webエンジニアを目指して、Rails API・React・TypeScript・Tailwind
              CSS・PostgreSQLを用いた個人開発に取り組んでいます。
            </p>
            <p>
              バックエンドだけでなく、フロントエンドも含めたWebアプリケーション全体の開発経験を積むため、認証機能・CRUD・カンバンUI・タスク管理・就活管理など、実務に近い機能を意識して開発してきました。
            </p>
            <p>
              現在は、ユーザー目線を大切にしながら、保守性の高い設計やチーム開発に貢献できるエンジニアを目指して就職活動中です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
