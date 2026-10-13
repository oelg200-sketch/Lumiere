const aboutImage = 'https://images.pexels.com/photos/1066109/pexels-photo-1066109.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';
const aboutImage2 = 'https://images.pexels.com/photos/7256109/pexels-photo-7256109.jpeg?auto=compress&cs=tinysrgb&h=600&w=500';
const aboutImage3 = 'https://images.pexels.com/photos/5616974/pexels-photo-5616974.jpeg?auto=compress&cs=tinysrgb&h=400&w=350';

export default function About() {
  return (
    <section id="nosotros" className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div className="reveal-fade-left relative" data-reveal>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Retrato de mujer con maquillaje natural"
                className="w-full rounded-[2rem] object-cover shadow-2xl shadow-blush-500/15"
                loading="lazy"
              />
              <img
                src={aboutImage2}
                alt="Productos de maquillaje en fondo rosa"
                className="absolute -bottom-10 -right-6 hidden w-48 rounded-2xl object-cover shadow-xl border-4 border-white sm:block lg:w-56"
                loading="lazy"
              />
              <img
                src={aboutImage3}
                alt="Mujer con maquillaje suave"
                className="absolute -top-6 -left-6 hidden w-32 rounded-xl object-cover shadow-lg border-4 border-white lg:block"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-10 -left-10 -z-10 h-44 w-44 rounded-full bg-blush-200/40 blur-3xl" />
            <div className="absolute -bottom-20 right-10 -z-10 h-40 w-40 rounded-full bg-lavender-200/40 blur-3xl" />
          </div>

          {/* Text */}
          <div className="reveal-fade-right" data-reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blush-500">
              Nuestra historia
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-charcoal-800 sm:text-5xl text-balance">
              Nacimos para redefinir la belleza
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-charcoal-700/70">
              Lumière nació en 2019 con una misión clara: crear maquillaje que haga sentir
              bien por dentro y por fuera. Creemos que la belleza no es un estándar, sino
              una expresión personal.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-charcoal-700/55">
              Cada producto se formula con ingredientes de origen natural, respetando tu
              piel y el planeta. Trabajamos con proveedores locales y empaquetamos todo
              en materiales reciclables.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-blush-50 p-5 text-center">
                <p className="font-serif text-3xl font-bold text-blush-500">2019</p>
                <p className="mt-1 text-xs font-medium text-charcoal-700/50">Año de fundación</p>
              </div>
              <div className="rounded-2xl bg-lavender-50 p-5 text-center">
                <p className="font-serif text-3xl font-bold text-lavender-500">15+</p>
                <p className="mt-1 text-xs font-medium text-charcoal-700/50">Países</p>
              </div>
              <div className="rounded-2xl bg-mint-50 p-5 text-center">
                <p className="font-serif text-3xl font-bold text-mint-500">200k</p>
                <p className="mt-1 text-xs font-medium text-charcoal-700/50">Clientas felices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
