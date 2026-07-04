import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-shell flex min-h-16 items-center justify-between">
        <a
          href="#top"
          className="focus-ring rounded-md text-base font-bold tracking-normal text-slate-950"
          onClick={closeMenu}
        >
          My Portfolio
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md transition-colors hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white md:hidden"
          aria-label="モバイルナビゲーション"
        >
          <div className="container-shell grid gap-1 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-2 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
