# Sapori

Sapori es una pequeña panadería y repostería con un enfoque artesanal, moderno y fácil de mantener. El sitio está preparado para publicarse directamente en GitHub Pages usando HTML, CSS y JavaScript vanilla.

## Estructura del proyecto

```text
sapori/
├── index.html
├── catalogo.html
├── producto.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── catalogo.js
│   ├── producto.js
│   └── whatsapp.js
├── data/
│   ├── categorias.js
│   └── productos.js
├── assets/
│   ├── img/
│   │   ├── logo/
│   │   ├── productos/
│   │   ├── banners/
│   │   └── general/
│   └── icons/
├── README.md
└── .gitignore
```

## Agregar un producto

1. Abre `data/productos.js`.
2. Agrega un nuevo objeto al arreglo `productos`.
3. Guarda la imagen en `assets/img/productos/`.

```javascript
{
    id: "polvorosa-01",
    nombre: "Polvorosa",
    categoria: "galletas",
    precio: 5,
    imagen: "assets/img/productos/polvorosa.svg",
    descripcion: "Deliciosa polvorosa artesanal.",
    disponible: true,
    destacado: false
}
```

## Editar un producto

1. Abre `data/productos.js`.
2. Modifica los campos necesarios del producto.
3. Guarda y recarga la página.

## Destacar un producto

Usa `destacado: true` para mostrar el producto en la sección de destacados.

## Deshabilitar un producto

Usa `disponible: false` para mostrar el producto como no disponible.

## Agregar una categoría

1. Abre `data/categorias.js`.
2. Añade un nuevo objeto con `id` y `nombre`.

## Cambiar el número de WhatsApp

El número está definido en `js/whatsapp.js`:

```javascript
const WHATSAPP_NUMBER = '50254590273';
```

## Desplegar en GitHub Pages

1. Sube el proyecto a GitHub.
2. Ve a Settings > Pages.
3. Selecciona la rama principal y la carpeta raíz.
4. Guarda para publicar.

No requiere backend ni base de datos.
