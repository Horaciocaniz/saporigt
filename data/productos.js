const productos = [
    
    {
        id: "alfajor-01",
        nombre: "Alfajor",
        categoria: "galletas",
        precio: 14,
        imagen: "assets/img/productos/Alfajores.png",
        descripcion: "Alfajor artesanal relleno con dulce de leche y textura suave.",
        disponible: true,
        destacado: true
    },
    {
        id: "alfajor-03",
        nombre: "Alfajor Decorado",
        categoria: "galletas",
        precio: 25,
        imagen: "assets/img/productos/AlfajorNavidad.JPG",
        descripcion: "Alfajor artesanal relleno con dulce de leche decorado de Navidad.",
        disponible: true,
        destacado: true
    },
    {
        id: "alfajor-chocolate-02",
        nombre: "Alfajor bañado en chocolate",
        categoria: "galletas",
        precio: 18,
        imagen: "assets/img/productos/AlfajoresChocolate.png",
        descripcion: "Alfajor húmedo y cubierto con chocolate para un sabor intenso y balanceado.",
        disponible: true,
        destacado: true
    },
    {
        id: "corona-bollos-03",
        nombre: "Corona de Bollos",
        categoria: "temporada",
        precio: 22,
        imagen: "assets/img/productos/CoronaBollos.JPG",
        descripcion: "Corona de bollos suave y aromática, ideal para compartir en la mesa.",
        disponible: true,
        destacado: true
    },
    {
        id: "zepelin-navideno-04",
        nombre: "Zepelin Navideño",
        categoria: "temporada",
        precio: 35,
        imagen: "assets/img/productos/ZepelinNavideño.png",
        descripcion: "Zepelin navideño tradicional con sabor festivo y textura esponjosa.",
        disponible: true,
        destacado: true
    },
    
    {
        id: "galleta-avena-05",
        nombre: "Galleta de Avena",
        categoria: "galletas",
        precio: 15,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Galleta de avena nutriente y deliciosa.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "polovorosa-06",
        nombre: "Polovorosa",
        categoria: "galletas",
        precio: 15,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Polovorosa deliciosa y textura suave.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "galleta-newyork-07",
        nombre: "Galleta Tipo New York",
        categoria: "galletas",
        precio: 15,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Galleta tipo New York con textura esponjosa y sabor delicioso.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "galleta-jengibre-08",
        nombre: "Galleta de Jengibre",
        categoria: "temporada",
        precio: 15,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Galleta de jengibre con sabor intenso y textura crocante.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "galleta-bolita-colores-09",
        nombre: "Bolitas de Colores",
        categoria: "galletas",
        precio: 15,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Bolitas de colores con sabor dulce y textura suave.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Empanada-Salada-10",
        nombre: "Empanada Salada",
        categoria: "reposteria",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Empanada salada con relleno delicioso y corteza crujiente.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Empanada-Leche-11",
        nombre: "Empanada de Leche",
        categoria: "reposteria",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Empanada de leche con relleno cremoso y corteza crujiente.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pie-Dulce-12",
        nombre: "Pie Dulce",
        categoria: "reposteria",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pie dulce con relleno delicioso y corteza crujiente. Rellenos: Manzana, Piña, Quezo, Calabaza",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Rol-Canela-13",
        nombre: "Rol de Canela",
        categoria: "reposteria",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Rol de corteza crujiente con relleno de canela.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pasteles-Hojaldre-14",
        nombre: "Pasteles de Hojaldre",
        categoria: "reposteria",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pasteles de hojaldre.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Tartaletas-15",
        nombre: "Tartaletas",
        categoria: "reposteria",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Tartaletas con relleno delicioso y corteza crujiente.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Cupcakes-Decorados-16",
        nombre: "Cupcakes Decorados",
        categoria: "reposteria",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Cupcakes decorados.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Bomba-de-Chocolate-17",
        nombre: "Bomba de Chocolate",
        categoria: "temporada",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Chocolate relleno de cocoa dulce y marshmallows.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Barra-Con-Semillas-18",
        nombre: "Barra con Semillas",
        categoria: "reposteria",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Barra de chocolate con semillas.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Espumillas-19",
        nombre: "Espumillas de Menta",
        categoria: "reposteria",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Merengue frances con sabor a menta",
        disponible: true,
        destacado: true
    },

    {
        id: "Corona-Reyes-20",
        nombre: "Corona de Reyes",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan dulce tradicional para celebrar el Día de Reyes, con figura del Niño Jesus.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pan-de-Muerto-21",
        nombre: "Pan de Muerto",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan dulce tradicional con textura suave sabor a naranja cubierto de azúcar.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Trensa-Rellena-Pollo-22",
        nombre: "Trenza Rellena de Pollo",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan suave entrelazada rellena de pollo",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Champurrada-23",
        nombre: "Champurrada",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan dulce tradicional, redondo, con consistencia tostada y crujiente.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pan-en-Barra-24",
        nombre: "Pan en Barra",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan blanco tradicional con forma alargada y cortes en diagonal.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pan-en-Molde-25",
        nombre: "Pan en Molde",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan blanco tradicional con forma de molde y corteza crujiente.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Volovanes-26",
        nombre: "Volovanes",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Masa hojaldre horneada en recipiente cilindrico relleno de Carne.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pan-de-Zanahoria-27",
        nombre: "Pan de Zanahoria",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan esponjoso elaborado con zanahoria rallada y con textura humeda",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pan-de-Banano-28",
        nombre: "Pan de Banano",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan esponjoso preparado con bananos frescos, Consistencia humeda, miga suave y dulzor natural.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pan-de-Calabaza-29",
        nombre: "Pan de Calabaza",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Bizcocho casero, suave y humedo, preparado con calabaza fresca.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pan-Masa-Madre-30",
        nombre: "Pan de masa Madre",
        categoria: "panaderia",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan artesanal elaborado con masa madre y un proceso de fermentacion de 24-48 horas.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Casa-de-Jengibre-31",
        nombre: "Casa de Jengibre",
        categoria: "temporada",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Casa elaborada con galleta de jengibre crocante y sabor intenso.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Casa-de-Chocolate-32",
        nombre: "Casa de Chocolate",
        categoria: "temporada",
        precio: 20,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Casa elaborada con chocolate.",
        disponible: true,
        destacado: true
    }











    





    
    
    
];

window.productos = productos;

