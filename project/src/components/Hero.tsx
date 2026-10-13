import { Sparkles, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

const heroImage = 'https://images.pexels.com/photos/5632324/pexels-photo-5632324.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';
const heroPortrait = 'https://images.pexels.com/photos/1124833/pexels-photo-1124833.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blush-50 via-white to-lavender-50 pt-28 pb-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-blush-200/40 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-60 w-60 rounded-full bg-lavender-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10 lg:gap-8">
        {/* Text */}
        <div className="max-w-xl" style={{ animation: 'fadeUp 0.8s ease-out 0.2s both' }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blush-200 bg-blush-100/60 px-4 py-1.5 text-sm font-medium text-blush-600">
            <Sparkles className="h-3.5 w-3.5" />
            Cosmética natural · Cruelty-free
          </p>

          <h1 className="font-serif text-5xl font-bold leading-[1.08] text-charcoal-800 sm:text-6xl lg:text-7xl text-balance">
            Realza tu
            <span className="block gradient-text italic">belleza natural</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-charcoal-700/70">
            Maquillaje formulado con ingredientes naturales que cuidan tu piel.
            Descubre productos diseñados para resaltar lo mejor de ti.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#productos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blush-500 px-8 py-3.5 font-medium text-white shadow-lg shadow-blush-500/25 transition-all duration-300 hover:bg-blush-600 hover:shadow-xl hover:shadow-blush-500/35"
            >
              Ver productos
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center rounded-full border border-blush-300 px-8 py-3.5 font-medium text-blush-600 transition-all duration-300 hover:bg-blush-100"
            >
              Conoce la marca
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="font-serif text-3xl font-bold text-blush-500">50+</p>
              <p className="text-xs font-medium tracking-wide text-charcoal-700/50">Productos</p>
            </div>
            <div className="h-10 w-px bg-blush-200" />
            <div>
              <p className="font-serif text-3xl font-bold text-blush-500">100%</p>
              <p className="text-xs font-medium tracking-wide text-charcoal-700/50">Cruelty-free</p>
            </div>
            <div className="h-10 w-px bg-blush-200" />
            <div>
              <p className="font-serif text-3xl font-bold text-blush-500">Vegan</p>
              <p className="text-xs font-medium tracking-wide text-charcoal-700/50">Fórmulas</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative" style={{ animation: 'fadeIn 1s ease-out 0.4s both' }}>
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blush-200/50 to-lavender-200/50 blur-2xl" />
            <img
              src={heroPortrait}
              alt="Mujer con maquillaje natural y elegante"
              className="relative w-full rounded-[2rem] object-cover shadow-2xl shadow-blush-500/20"
              loading="eager"
            />
            {/* Floating card */}
            <div
              className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint-100 text-mint-500">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="font-serif text-lg font-bold text-charcoal-800">{siteConfig.name}</p>
                <p className="text-xs font-light text-charcoal-700/50">Belleza natural</p>
              </div>
            </div>
            {/* Floating tag */}
            <div
              className="absolute -top-4 -right-4 rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/30"
              style={{ animation: 'float 3.5s ease-in-out infinite 0.5s' }}
            >
              Nuevo lanzamiento
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
