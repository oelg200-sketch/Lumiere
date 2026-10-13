import { useEffect, useState } from 'react';
import { Sparkles, Menu as MenuIcon, X } from 'lucide-react';
import { siteConfig, socialLinks } from '@/config/site';
import { SocialIcon } from '@/components/SocialIcons';

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-blush-50/95 backdrop-blur-md shadow-[0_2px_20px_rgba(208,132,159,0.1)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${
              scrolled ? 'bg-blush-500 text-white' : 'bg-white/80 text-blush-500 backdrop-blur-sm'
            } group-hover:scale-110 group-hover:rotate-12`}
          >
            <Sparkles className="h-5 w-5" />
          </span>
          <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-500 ${
            scrolled ? 'text-charcoal-800' : 'text-charcoal-800'
          }`}>
            Lumi<span className="font-light italic text-blush-500">ère</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-blush-500 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? 'text-charcoal-700 hover:text-blush-500' : 'text-charcoal-700 hover:text-blush-500'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop social icons */}
        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.slice(0, 3).map((s) => (
            <a
              key={s.key}
              href={siteConfig.social[s.key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blush-100 text-blush-600 transition-all duration-300 hover:bg-blush-500 hover:text-white hover:scale-110"
            >
              <SocialIcon name={s.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="text-charcoal-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-white/98 backdrop-blur-lg transition-all duration-400 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-7">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl font-medium text-charcoal-800 transition-colors hover:text-blush-500"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s, color 0.2s ease`,
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            className="mt-6 flex items-center gap-4"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${links.length * 0.07}s, transform 0.4s ease ${links.length * 0.07}s`,
            }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.key}
                href={siteConfig.social[s.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-100 text-blush-600 transition-all hover:bg-blush-500 hover:text-white"
              >
                <SocialIcon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
