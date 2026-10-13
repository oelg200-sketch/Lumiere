import { Sparkles } from 'lucide-react';
import { siteConfig, socialLinks } from '@/config/site';
import { SocialIcon } from '@/components/SocialIcons';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-500 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-serif text-2xl font-bold text-white">
                Lumi<span className="font-light italic text-blush-400">ère</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-white/40">
              {siteConfig.tagline}. Maquillaje natural, cruelty-free y vegano.
            </p>
          </div>

          {/* Links */}
          <div className="md:justify-self-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-wide text-white/30">Navegación</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-white/55 transition-colors hover:text-blush-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:justify-self-end">
            <p className="mb-4 text-xs font-medium uppercase tracking-wide text-white/30">Síguenos</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.key}
                  href={siteConfig.social[s.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/50 transition-all hover:bg-blush-500 hover:text-white"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs font-light text-white/30">
            © {new Date().getFullYear()} {siteConfig.fullName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
