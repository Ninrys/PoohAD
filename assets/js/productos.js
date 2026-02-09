const DB = {
    bikinis:[
    { id: 101, nombre: "Bikini Neon", precio: 25000, img: "assets/img/productos/bikinis/bikini_placeholder.webp", descripcion: "Bikini color neon ideal para el verano." },
    { id: 102, nombre: "Bikini Dark", precio: 28000, img: "assets/img/productos/bikinis/bikini_placeholder.webp", descripcion: "Estilo elegante y oscuro con detalles en plata." },
    { id: 103, nombre: "Bikini Flores", precio: 22000, img: "assets/img/productos/bikinis/bikini_placeholder.webp", descripcion: "Estampado floreado con tela resistente." },
    { id: 104, nombre: "Bikini Pooh", precio: 30000, img: "assets/img/productos/bikinis/bikini_placeholder.webp", descripcion: "Bikini con diseño exclusivo de Puchito bebechito." }
],

poleras : [
    { id: 201, nombre: "Polera Neon", precio: 25000, img: "assets/img/productos/poleras/polera_placeholder.jpg", descripcion: "Polera color neon ideal para el verano." },
    { id: 202, nombre: "Polera Dark", precio: 28000, img: "assets/img/productos/poleras/polera_placeholder.jpg", descripcion: "Estilo elegante y oscuro con detalles en plata." },
    { id: 203, nombre: "Polera Flores", precio: 22000, img: "assets/img/productos/poleras/polera_placeholder.jpg", descripcion: "Estampado floreado con tela resistente." },
    { id: 204, nombre: "Polera Pooh", precio: 30000, img: "assets/img/productos/poleras/polera_placeholder.jpg", descripcion: "Polera con diseño exclusivo de Puchito bebechito." }
],

vestidos : [
    { id: 301, nombre: "Vestido Neon", precio: 25000, img: "assets/img/productos/vestidos/vestido_placeholder.jpg", descripcion: "Vestido color neon ideal para el verano." },
    { id: 302, nombre: "Vestido Dark", precio: 28000, img: "assets/img/productos/vestidos/vestido_placeholder.jpg", descripcion: "Estilo elegante y oscuro con detalles en plata." },
    { id: 303, nombre: "Vestido Flores", precio: 22000, img: "assets/img/productos/vestidos/vestido_placeholder.jpg", descripcion: "Estampado floreado con tela resistente." },
    { id: 304, nombre: "Vestido Pooh", precio: 30000, img: "assets/img/productos/vestidos/vestido_placeholder.jpg", descripcion: "Vestido con diseño exclusivo de Puchito bebechito." }
]

}
//para poder manipular los datos de los productos en otras partes del proyecto, los guardamos en el localStorage
localStorage.setItem('tienda_db', JSON.stringify(DB));
