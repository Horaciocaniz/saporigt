const productos = [
    
    {
        id: "alfajor-01",
        nombre: "Alfajor",
        categoria: "galletas",
        precio: 25,
        imagen: "assets/img/productos/Alfajores.png",
        descripcion: "8 onz de Alfajores artesanal relleno con dulce de leche y textura suave.",
        disponible: true,
        destacado: true
    },
    {
        id: "alfajor-03",
        nombre: "Alfajor Decorado",
        categoria: "galletas",
        precio: 60,
        imagen: "assets/img/productos/AlfajoresNavidad.JPG",
        imagenes: [
            "assets/img/productos/AlfajorDecorado2.JPG",
            "assets/img/productos/AlfajorDecorado3.JPG",
            "assets/img/productos/AlfajorDecorado4.JPG"
        ],
        descripcion: "8 unidades de Alfajor artesanal relleno con dulce de leche decorado de Navidad.",
        disponible: true,
        destacado: true
    },
    {
        id: "alfajor-chocolate-02",
        nombre: "Alfajor bañado en chocolate",
        categoria: "galletas",
        precio: 50,
        imagen: "assets/img/productos/AlfajoresChocolate.png",
        descripcion: "8 onz de Alfajor húmedo y cubierto con chocolate para un sabor intenso y balanceado.",
        disponible: true,
        destacado: false
    },
    {
        id: "corona-bollos-03",
        nombre: "Corona de Bollos",
        categoria: "temporada",
        precio: 50,
        imagen: "assets/img/productos/CoronaBollos.JPG",
        imagenes: [
            "assets/img/productos/CoronaBollos2.JPG",
            "assets/img/productos/CoronaBollos3.JPG"
        ],
        descripcion: "Corona de bollos suave y aromática, ideal para compartir en la mesa.",
        disponible: true,
        destacado: true
    },
    {
        id: "zepelin-navideno-04",
        nombre: "Zepelin Navideño",
        categoria: "temporada",
        precio: 75,
        imagen: "assets/img/productos/ZepelinNavideño.png",
        imagenes: [
            "assets/img/productos/ZepelinNavideño2.JPG",
            "assets/img/productos/ZepelinNavideño3.JPG"
        ],
        descripcion: "Zepelin navideño tradicional con sabor festivo y textura esponjosa.",
        disponible: true,
        destacado: true
    },
    
    {
        id: "galleta-avena-05",
        nombre: "Galleta de Avena",
        categoria: "galletas",
        precio: 0,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Galleta de avena nutriente y deliciosa.",
        disponible: false,
        destacado: false
    }, 

    {
        id: "polovorosa-06",
        nombre: "Polovorosa",
        categoria: "galletas",
        precio: 5,
        imagen: "assets/img/productos/Polvorosa.jpeg",
        descripcion: "Polovorosa deliciosa y textura suave.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "galleta-newyork-07",
        nombre: "Galleta Tipo New York",
        categoria: "galletas",
        precio: 40,
        imagen: "assets/img/productos/GalletaNewYork.jpeg",
        descripcion: "Bolsa de 6 unidades de galleta tipo New York con textura esponjosa y sabor delicioso.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "galleta-jengibre-08",
        nombre: "Galleta de Jengibre",
        categoria: "temporada",
        precio: 10,
        imagen: "assets/img/productos/GalletaJengibre.JPG",
        imagenes: [
            "assets/img/productos/GalletaJengibre2.png"
        ],
        descripcion: "4 onz de galleta de jengibre con sabor intenso y textura crocante.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "galleta-bolita-colores-09",
        nombre: "Bolitas de Colores",
        categoria: "galletas",
        precio: 15,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "4 onz de Bolitas de colores con sabor dulce y textura suave.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Empanada-Salada-10",
        nombre: "Empanada Salada",
        categoria: "reposteria",
        precio: 15,
        imagen: "assets/img/productos/EmpanadaRellenaPollo1.jpeg",
        imagenes: [
            "assets/img/productos/EmpanadaRellenaPollo2.jpeg",
            "assets/img/productos/EmpanadaRellenaPollo3.jpeg"
        ],
        descripcion: "Bolsa de 2 Empanadas saladas con relleno delicioso de pollo, jamón y queso o atún y corteza crujiente.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Empanada-Leche-11",
        nombre: "Empanada de Leche",
        categoria: "reposteria",
        precio: 10,
        imagen: "assets/img/productos/EmpanadaLeche.jpeg",
        imagenes: [
            "assets/img/productos/EmpanadaLeche2.jpeg",
            "assets/img/productos/EmpanadaLeche3.jpeg"
            ],
        descripcion: "Empanada de leche con relleno cremoso y corteza crujiente.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pie-Dulce-12",
        nombre: "Pie Dulce",
        categoria: "reposteria",
        precio: 15,
        imagen: "assets/img/productos/PieDulce.jpeg",
        descripcion: "Pie dulce con relleno delicioso y corteza crujiente. Rellenos: Manzana, Piña, Queso, Calabaza",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Rol-Canela-13",
        nombre: "Rol de Canela",
        categoria: "reposteria",
        precio: 0,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Rol de corteza crujiente con relleno de canela.",
        disponible: false,
        destacado: false
    }, 

    {
        id: "Pasteles-Hojaldre-14",
        nombre: "Pasteles de Hojaldre",
        categoria: "reposteria",
        precio: 0,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pasteles de hojaldre.",
        disponible: false,
        destacado: false
    }, 

    {
        id: "Tartaletas-Manzana-15",
        nombre: "Tartaletas de Manzana",
        categoria: "reposteria",
        precio: 15,
        imagen: "assets/img/productos/TartaletaManzana1.jpeg",
        imagenes: [
            "assets/img/productos/TartaletaManzana2.jpeg",
            "assets/img/productos/TartaletaManzana3.jpeg"
        ],
        descripcion: "Tartaletas con relleno de manzana y corteza crujiente.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Tartaletas-Fresa-36",
        nombre: "Tartaletas de Fresa",
        categoria: "reposteria",
        precio: 15,
        imagen: "assets/img/productos/TartaletaFresa1.jpeg",
        imagenes: [
            "assets/img/productos/TartaletaFresa2.jpeg",
            "assets/img/productos/TartaletaFresa3.jpeg"
        ],
        descripcion: "Tartaletas con relleno de fresa y corteza crujiente.",
        disponible: true,
        destacado: false
    },

    {
        id: "Cupcakes-Decorados-16",
        nombre: "Cupcakes Decorados",
        categoria: "reposteria",
        precio: 90,
        imagen: "assets/img/productos/Cupcake1.jpeg",
        imagenes: [
            "assets/img/productos/Cupcake2.jpeg",
            "assets/img/productos/Cupcake3.jpeg"
        ],
        descripcion: "Bandeja de 6 unidades de cupcakes decorados.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Bomba-de-Chocolate-17",
        nombre: "Bomba de Chocolate",
        categoria: "temporada",
        precio: 20,
        imagen: "assets/img/productos/ChocoBomba.jpeg",
        descripcion: "Chocolate relleno de cocoa dulce y marshmallows.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Barra-Con-Semillas-18",
        nombre: "Barra con Semillas",
        categoria: "reposteria",
        precio: 25,
        imagen: "assets/img/productos/BarraChocolate.jpeg",
        descripcion: "Barra de chocolate con semillas.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Espumillas-19",
        nombre: "Espumillas de Menta",
        categoria: "reposteria",
        precio: 60,
        imagen: "assets/img/productos/Espumillas.jpeg",
        imagenes: [
            "assets/img/productos/Espumillas2.jpeg"
            
        ],
        descripcion: "100 unidades de merengue frances con sabor a menta",
        disponible: true,
        destacado: true
    },

    {
        id: "Corona-Reyes-20",
        nombre: "Corona de Reyes",
        categoria: "panaderia",
        precio: 0,
        imagen: "assets/img/productos/RoscaReyes.jpeg",
        descripcion: "Pan dulce tradicional para celebrar el Día de Reyes, con figura del Niño Jesus.",
        disponible: false,
        destacado: true
    }, 

    {
        id: "Pan-de-Muerto-21",
        nombre: "Pan de Muerto",
        categoria: "panaderia",
        precio: 10,
        imagen: "assets/img/productos/PanMuerto.jpeg",
        imagenes: [
            "assets/img/productos/PanMuerto2.jpeg",
            "assets/img/productos/PanMuerto3.jpeg"
        ],
        descripcion: "Pan dulce tradicional con textura suave sabor a naranja cubierto de azúcar.",
        disponible: true,
        destacado: false
    }, 
    {
        id: "Pan-de-Muerto-Relleno-33",
        nombre: "Pan de Muerto Relleno",
        categoria: "panaderia",
        precio: 12,
        imagen: "assets/img/productos/PanMuertoRelleno1.jpeg",
        imagenes: [
            "assets/img/productos/PanMuertoRelleno2.jpeg",
            "assets/img/productos/PanMuertoRelleno3.jpeg"
        ],
        descripcion: "Pan dulce tradicional con textura suave sabor a naranja cubierto de azúcar.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Pan-de-Muerto-Chocolate-34",
        nombre: "Pan de Muerto Bañado en Chocolate",
        categoria: "panaderia",
        precio: 15,
        imagen: "assets/img/productos/PanMuertoChocolate1.jpeg",
        imagenes: [
            "assets/img/productos/PanMuertoChocolate2.jpeg",
            "assets/img/productos/PanMuertoChocolate3.jpeg"
        ],
        descripcion: "Pan dulce tradicional con textura suave sabor a naranja cubierto de azúcar.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Trensa-Rellena-Pollo-22",
        nombre: "Trenza Rellena de Pollo",
        categoria: "panaderia",
        precio: 10,
        imagen: "assets/img/productos/TrenzaRellena1.jpeg",
        imagenes: [
            "assets/img/productos/TrenzaRellena2.jpeg",
            "assets/img/productos/TrenzaRellena3.jpeg"
        ],
        descripcion: "Pan blanco entrelazado rellena de pollo o jamon y queso",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Champurrada-23",
        nombre: "Champurrada Integrales",
        categoria: "panaderia",
        precio: 10,
        imagen: "assets/img/productos/Champurrada.jpeg",
        imagenes: [
            "assets/img/productos/Champurrada2.jpeg"
        ],
        descripcion: "Bolsa de 5 unidades de Pan dulce tradicional, redondo, con consistencia tostada y crujiente.",
        disponible: true,
        destacado: true
    }, 

    {
        id: "Pan-en-Barra-24",
        nombre: "Pan en Barra",
        categoria: "panaderia",
        precio: 10,
        imagen: "assets/img/productos/PanBarra1.jpeg",
        imagenes: [
            "assets/img/productos/PanBarra2.jpeg",
            "assets/img/productos/PanBarra3.jpeg"
        ],
        descripcion: "Bolsa de 4 unidades de pan blanco tradicional con forma alargada y cortes en diagonal.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Pan-en-Molde-25",
        nombre: "Pan en Molde",
        categoria: "panaderia",
        precio: 30,
        imagen: "assets/img/productos/PanMolde.jpeg",
        descripcion: "Pan blanco tradicional con forma de molde y corteza crujiente.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Volovanes-26",
        nombre: "Volovanes",
        categoria: "panaderia",
        precio: 10,
        imagen: "assets/img/productos/Volovanes1.jpeg",
        imagenes: [
            "assets/img/productos/Volovanes2.jpeg",
            "assets/img/productos/Volovanes3.jpeg"
        ],
        descripcion: "Masa hojaldre horneada en recipiente cilindrico relleno de Carne.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Pan-de-Zanahoria-27",
        nombre: "Pan de Zanahoria",
        categoria: "panaderia",
        precio: 10,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Porcion de Pan esponjoso elaborado con zanahoria rallada y con textura humeda",
        disponible: false,
        destacado: true
    }, 

    {
        id: "Pan-de-Banano-28",
        nombre: "Pan de Banano",
        categoria: "panaderia",
        precio: 100,
        imagen: "assets/img/productos/PanBanano.jpeg",
        imagenes: [
            "assets/img/productos/PanBanano2.jpeg",
            "assets/img/productos/PanBanano3.jpeg"
        ],
        descripcion: "Pan de 10 porciones, esponjoso preparado con bananos frescos, Consistencia humeda, miga suave y dulzor natural.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Pan-de-Calabaza-29",
        nombre: "Pan de Calabaza",
        categoria: "panaderia",
        precio: 150,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Bizcocho casero, suave y humedo, preparado con calabaza fresca.",
        disponible: true,
        destacado: false
    }, 

    {
        id: "Pan-Masa-Madre-30",
        nombre: "Pan de masa Madre",
        categoria: "panaderia",
        precio: 0,
        imagen: "assets/img/productos/NoImage.jpg",
        descripcion: "Pan artesanal elaborado con masa madre y un proceso de fermentacion de 24-48 horas.",
        disponible: false,
        destacado: false
    }, 

    {
        id: "Casa-de-Jengibre-31",
        nombre: "Casa de Jengibre",
        categoria: "temporada",
        precio: 0,
        imagen: "assets/img/productos/CasaJengibre.png",
        imagenes: [
            "assets/img/productos/CasaJengibre2.png",
            "assets/img/productos/CasaJengibre3.jpeg"
        ],
        descripcion: "Casa elaborada con galleta de jengibre crocante y sabor intenso.",
        disponible: false,
        destacado: false
    }, 

    {
        id: "Casa-de-Chocolate-32",
        nombre: "Casa de Chocolate",
        categoria: "temporada",
        precio: 20,
        imagen: "assets/img/productos/ChocoCasaNavidad1.jpeg",
        imagenes: [
            "assets/img/productos/ChocoCasaNavidad2.jpeg"            
        ],
        descripcion: "Casa elaborada con chocolate, rellena de cocoa y marshmallows",
        disponible: false,
        destacado: false
    },

    {
        id: "Arbol-Navidad-Chocolate-35",
        nombre: "Arbol de Navidad de Chocolate",
        categoria: "temporada",
        precio: 45,
        imagen: "assets/img/productos/ChocoArbolNavidad1.jpeg",
        imagenes: [
            "assets/img/productos/ChocoArbolNavidad2.jpeg",
            "assets/img/productos/ChocoArbolNavidad3.jpeg"
        ],
        descripcion: "Arbol de navidad elaborado con chocolate.",
        disponible: true,
        destacado: false
    }











    





    
    
    
];

window.productos = productos;

