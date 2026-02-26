import { useState } from "react";
import "./App.css";

// datos de los productos
const productos = {
  tarjetas: [
    {
      img: "tarjetas.jpg",
      alt: "Tarjetas personalizadas",
      nombre: "Tarjetas Premium",
      desc: "Diseño personalizado en alta calidad",
      precio: "Desde $150.000",
    },
    {
      img: "tarjetas2.jpg",
      alt: "Tarjetas corporativas",
      nombre: "Tarjetas Corporativas",
      desc: "Perfectas para tu empresa",
      precio: "Desde $200.000",
    },
    {
      img: "tarjetas3.jpg",
      alt: "Tarjetas especiales",
      nombre: "Tarjetas Especiales",
      desc: "Acabados únicos y exclusivos",
      precio: "Desde $250.000",
    },
  ],
  volantes: [
    {
      img: "volantes.jpg",
      alt: "Volantes publicitarios",
      nombre: "Volantes Publicitarios",
      desc: "Impacto visual garantizado",
      precio: "Desde $160.000",
    },
    {
      img: "volantes2.jpg",
      alt: "Volantes promocionales",
      nombre: "Volantes Promocionales",
      desc: "Ideales para eventos y ofertas",
      precio: "Desde $200.000",
    },
  ],
  afiches: [
    {
      img: "afiches.jpg",
      alt: "Afiches gran formato",
      nombre: "Afiches Gran Formato",
      desc: "Máxima visibilidad para tu marca",
      precio: "Desde $180.000",
    },
    {
      img: "afiches2.jpg",
      alt: "Afiches para eventos",
      nombre: "Afiches para Eventos",
      desc: "Diseños llamativos y modernos",
      precio: "Desde $160.000",
    },
    {
      img: "afiches3.jpg",
      alt: "Afiches promocionales",
      nombre: "Afiches Promocionales",
      desc: "Perfectos para campañas",
      precio: "Desde $200.000",
    },
    {
      img: "afiches4.jpg",
      alt: "Afiches personalizados",
      nombre: "Afiches Personalizados",
      desc: "Adaptados a tus necesidades",
      precio: "Desde $250.000",
    },
  ],
  camisas: [
    {
      img: "poloSENA.jpg",
      alt: "Camisa polo 1 bordado",
      nombre: "Camisa Polo 1 Bordado",
      desc: "Bordado personalizado de alta calidad",
      precio: "Desde $40.000",
    },
    {
      img: "poloSENA2.png",
      alt: "Camisa polo 2 bordados",
      nombre: "Camisa Polo 2 Bordados",
      desc: "Doble bordado para mayor personalización",
      precio: "Desde $45.000",
    },
  ],
};

function App() {
  // estado para guardar qué producto eligió el usuario
  const [seleccion, setSeleccion] = useState("");

  // lista de items según lo que eligió
  const items = seleccion ? productos[seleccion] : [];

  return (
    <div className="container">
      <h1>📚IMPRESOS AKAGAMY</h1>
      <h2>🛄 MIRA NUESTRO PORTAFOLIO</h2>

      <div className="content-wrapper">
        <div className="card panel-gestion">
          <h2>Productos</h2>

          <label htmlFor="productos">Seleccione un producto</label>
          <select
            id="productos"
            value={seleccion}
            onChange={(e) => setSeleccion(e.target.value)}
          >
            <option value="" disabled>
              Elija una opción
            </option>
            <option value="camisas">Camisas Bordadas</option>
            <option value="tarjetas">Tarjetas</option>
            <option value="volantes">Volantes</option>
            <option value="afiches">Afiches</option>
          </select>

          {/* galería de productos */}
          <div id="galeria">
            {items.map((item, index) => (
              <div className="producto-item" key={index}>
                <img src={`/img/${item.img}`} alt={item.alt} />
                <div className="producto-info">
                  <h3>{item.nombre}</h3>
                  <p>{item.desc}</p>
                  <span className="precio">{item.precio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* botón de whatsapp */}
        <a
          href="https://wa.me/573218793414?text=Hola%20quiero%20información"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/whatsapp.png" width="50" height="50" alt="WhatsApp" />
        </a>

        {/* botón de github */}
        <a
          href="https://github.com/TU_USUARIO_AQUI"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/github.png" width="50" height="50" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default App;