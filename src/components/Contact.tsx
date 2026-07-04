import { contactLinks, email } from "../data/contactLinks";
import { FiExternalLink, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="section-band bg-slate-50">
      <div className="container-shell">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
            Contact
          </p>
          <h2 className="section-title mt-3">お問い合わせ</h2>
          <p className="section-lead">
            GitHub、メール、各種プロフィールリンクはこちらから確認できます。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`mailto:${email}`}
              className="focus-ring rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  Email
                  <FiMail className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </span>
              <span className="mt-2 block break-words text-sm font-semibold text-slate-900">
                {email}
              </span>
            </a>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    Link
                    <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </span>
                <span className="mt-2 block text-sm font-semibold text-slate-900">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
