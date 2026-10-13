import { Leaf, Rabbit, Droplet, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Ingredientes naturales',
    text: 'Formulado con extractos botánicos y aceites esenciales que nutren tu piel.',
  },
  {
    icon: Rabbit,
    title: 'Cruelty-free',
    text: 'Nunca testamos en animales. Certificado por Leaping Bunny.',
  },
  {
    icon: Droplet,
    title: 'Hidratación profunda',
    text: 'Ácido hialurónico y vitamina E en cada producto para piel radiante.',
  },
  {
    icon: ShieldCheck,
    title: 'Dermatológicamente testado',
    text: 'Apto para piel sensible. Sin parabenos, sin sulfatos, sin ftalatos.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-gradient-to-b from-blush-50 to-lavender-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="reveal-fade-up mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blush-500" data-reveal>
            Por qué elegirnos
          </p>
          <h2 className="reveal-fade-up font-serif text-4xl font-bold text-charcoal-800 sm:text-5xl" data-reveal>
            Belleza que cuida tu piel
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal-fade-up group rounded-2xl bg-white/70 p-7 text-center shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-blush-500/10 hover:-translate-y-1"
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blush-100 text-blush-500 transition-all duration-500 group-hover:bg-blush-500 group-hover:text-white group-hover:scale-110">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-charcoal-800">{b.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-charcoal-700/55">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
