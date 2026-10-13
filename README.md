# Lumière Cosmetics — Sitio Web

Sitio web de cosméticos en HTML, CSS y JavaScript puro. Sin frameworks, sin npm, sin pasos de compilación.

## Como usar

1. Abre la carpeta `standalone/` en Visual Studio Code.
2. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.
3. La página se abrira en tu navegador.

## Estructura

```
standalone/
├── index.html        ← Estructura de la página
├── css/
│   └── styles.css    ← Todos los estilos
├── js/
│   └── main.js       ← Interactividad y datos
└── README.md         ← Este archivo
```

## Como editar

### Redes sociales, email, teléfono y dirección

Abre `js/main.js` y busca `CONFIG` al inicio del archivo:

```javascript
const CONFIG = {
  email: 'hola@lumiere-cosmetics.com',
  phone: '+503 2000 0000',
  address: 'Centro Comercial Galerías, Local 25, San Salvador, El Salvador',
  social: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    facebook: 'https://facebook.com',
    pinterest: 'https://pinterest.com',
    youtube: 'https://youtube.com',
  },
};
```

Cambia los valores por los de tu negocio.

### Productos

En el mismo archivo `js/main.js`, busca `PRODUCTS`. Cada producto tiene nombre, descripción, precio, imagen, etiqueta opcional y categoría:

```javascript
{
  name: 'Labial Mate Velvet',
  description: 'Acabado mate aterciopelado...',
  price: '$19.90',
  image: 'https://...',
  tag: 'Bestseller',     // opcional
  category: 'Labios',    // Labios, Ojos, Rostro o Accesorios
}
```

### Colores

Abre `css/styles.css` y busca `:root` al inicio. Ahí están todas las variables de color:

```css
--blush-500: #D0849F;
--lavender-500: #8270CA;
--mint-500: #38A877;
```

## Subir a GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube la carpeta `standalone/` (puedes subir solo su contenido o la carpeta completa).
3. Si activas **GitHub Pages** en Settings > Pages, la página se publicará automaticamente.

No necesitas instalar nada ni ejecutar comandos. Solo abrir `index.html` con Live Server.
