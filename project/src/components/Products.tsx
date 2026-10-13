import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { products, type Product } from '@/data/products';

const categories = ['Todos', 'Labios', 'Ojos', 'Rostro', 'Accesorios'];

export default function Products() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos' ? products : products.filter((p) => p.category === active);

  return (
    <section id="productos" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="reveal-fade-up mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blush-500" data-reveal>
            Nuestra colección
          </p>
          <h2 className="reveal-fade-up font-serif text-4xl font-bold text-charcoal-800 sm:text-5xl" data-reveal>
            Productos destacados
          </h2>
          <p className="reveal-fade-up mt-4 text-lg font-light text-charcoal-700/60" data-reveal>
            Fórmulas naturales que cuidan tu piel mientras realzan tu belleza.
          </p>
        </div>

        {/* Category filter */}
        <div className="reveal-fade-up mb-12 flex flex-wrap items-center justify-center gap-3" data-reveal>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-blush-500 text-white shadow-md shadow-blush-500/25'
                  : 'bg-blush-50 text-charcoal-700/60 hover:bg-blush-100 hover:text-blush-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product: Product) => (
            <article
              key={product.name}
              className="reveal-scale group relative flex flex-col overflow-hidden rounded-2xl bg-blush-50/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blush-500/10"
              data-reveal
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blush-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {product.tag && (
                  <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-blush-600 shadow-sm backdrop-blur-sm">
                    {product.tag}
                  </span>
                )}
                {/* Quick add button */}
                <button className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-12 rounded-full bg-white/95 px-5 py-2.5 text-sm font-medium text-blush-600 shadow-lg opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Añadir al carrito
                  </span>
                </button>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-blush-400">{product.category}</p>
                <h3 className="font-serif text-lg font-bold text-charcoal-800">{product.name}</h3>
                <p className="mt-1.5 flex-1 text-sm font-light leading-relaxed text-charcoal-700/55">
                  {product.description}
                </p>
                <p className="mt-4 font-serif text-xl font-bold text-blush-500">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
