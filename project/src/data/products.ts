export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  category: string;
}

export const products: Product[] = [
  {
    name: 'Labial Mate Velvet',
    description: 'Acabado mate aterciopelado de larga duración. Fórmula hidratante con vitamina E.',
    price: '$19.90',
    image: 'https://images.pexels.com/photos/17806623/pexels-photo-17806623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Bestseller',
    category: 'Labios',
  },
  {
    name: 'Paleta de Sombras Rose',
    description: '12 tonos pastel mates y satinados. Alta pigmentación y blendado suave.',
    price: '$34.50',
    image: 'https://images.pexels.com/photos/6233285/pexels-photo-6233285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Nuevo',
    category: 'Ojos',
  },
  {
    name: 'Base Líquida Glow',
    description: 'Cobertura natural con efecto luminoso. Disponible en 20 tonos. Libre de parabenos.',
    price: '$26.90',
    image: 'https://images.pexels.com/photos/1776331/pexels-photo-1776331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Rostro',
  },
  {
    name: 'Set de Brochas Premium',
    description: '12 brochas de pelo sintético suave. Funda de cuero vegano incluida.',
    price: '$48.00',
    image: 'https://images.pexels.com/photos/29285934/pexels-photo-29285934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Edición limitada',
    category: 'Accesorios',
  },
  {
    name: 'Gloss de Labios Cristal',
    description: 'Brillo transparente con efecto espejo. Sabor a frutos rojos y textura no pegajosa.',
    price: '$15.50',
    image: 'https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Labios',
  },
  {
    name: 'Iluminador Polvo Aura',
    description: 'Destellos rosados con reflejos perlados. Aporta luz natural al rostro.',
    price: '$23.90',
    image: 'https://images.pexels.com/photos/7256074/pexels-photo-7256074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Rostro',
  },
  {
    name: 'Colorete Polvo Petal',
    description: 'Rubor en polvo de fusión sedosa. Tonos coral y rosa para un look fresco.',
    price: '$17.90',
    image: 'https://images.pexels.com/photos/7256147/pexels-photo-7256147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Rostro',
  },
  {
    name: 'Máscara de Pestañas Volume',
    description: 'Cepillo curvo que separa y multiplica el volumen. Fórmula resistente al agua.',
    price: '$21.90',
    image: 'https://images.pexels.com/photos/8558518/pexels-photo-8558518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Ojos',
  },
];
