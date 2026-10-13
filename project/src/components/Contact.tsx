import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { siteConfig, socialLinks } from '@/config/site';
import { SocialIcon } from '@/components/SocialIcons';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3500);
    }
  };

  return (
    <section id="contacto" className="bg-gradient-to-b from-lavender-50 to-blush-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info + social */}
          <div className="reveal-fade-left" data-reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blush-500">
              Contacto
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-charcoal-800 sm:text-5xl text-balance">
              Hablemos de belleza
            </h2>
            <p className="mt-5 max-w-md text-lg font-light leading-relaxed text-charcoal-700/60">
              ¿Tienes preguntas sobre nuestros productos? ¿Quieres colaborar con nosotros?
              Escríbenos, nos encantará saber de ti.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 text-charcoal-700/70 transition-colors hover:text-blush-500"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blush-500 shadow-sm">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="text-sm font-light">{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 text-charcoal-700/70 transition-colors hover:text-blush-500"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blush-500 shadow-sm">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="text-sm font-light">{siteConfig.phone}</span>
              </a>
              <div className="flex items-center gap-4 text-charcoal-700/70">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blush-500 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-sm font-light">{siteConfig.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-charcoal-700/40">
                Síguenos
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.key}
                    href={siteConfig.social[s.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blush-500 shadow-sm transition-all duration-300 hover:bg-blush-500 hover:text-white hover:scale-110"
                  >
                    <SocialIcon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: newsletter card */}
          <div className="reveal-fade-right" data-reveal>
            <div className="rounded-3xl bg-white p-8 shadow-xl shadow-blush-500/10 lg:p-10">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800">
                Únete a nuestro boletín
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-charcoal-700/55">
                Recibe tips de belleza, lanzamientos exclusivos y descuentos especiales
                directamente en tu correo.
              </p>

              <form onSubmit={handleSubmit} className="mt-6">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="w-full rounded-full border border-blush-200 bg-blush-50/50 px-5 py-3.5 text-sm text-charcoal-800 placeholder:text-charcoal-700/30 focus:border-blush-400 focus:outline-none focus:ring-2 focus:ring-blush-300/50"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-blush-500 px-6 py-3.5 font-medium text-white shadow-lg shadow-blush-500/25 transition-all duration-300 hover:bg-blush-600 hover:shadow-xl"
                >
                  <Send className="h-4 w-4" />
                  Suscribirme
                </button>
                {submitted && (
                  <p
                    className="mt-3 text-center text-sm font-medium text-mint-500"
                    style={{ animation: 'fadeIn 0.4s ease-out' }}
                  >
                    ¡Gracias por suscribirte! Revisa tu correo.
                  </p>
                )}
              </form>

              <p className="mt-4 text-center text-xs font-light text-charcoal-700/35">
                Al suscribirte aceptas recibir correos de Lumière. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
