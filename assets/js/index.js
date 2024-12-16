import { propiedadesVenta, propiedadesAlquiler } from "./data.js";

function renderizarPropiedades(propiedades, contenedorId, limite = propiedades.length) {
  const contenedor = document.getElementById(contenedorId);
  let contenidoHtml = "";

  propiedades.slice(0, limite).forEach((propiedad) => {
    contenidoHtml += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img
            src="${propiedad.src}"
            class="card-img-top"
            alt="${propiedad.nombre}"
          />
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p>
              <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${propiedad.habitaciones} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
              ${propiedad.smoke 
                ? '<i class="fas fa-smoking"></i> Permitido fumar' 
                : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
              ${propiedad.pets 
                ? '<i class="fas fa-paw"></i> Mascotas permitidas' 
                : '<i class="fas fa-ban"></i> No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
  });

  contenedor.innerHTML = contenidoHtml;
}


window.onload = () => {
  renderizarPropiedades(propiedadesVenta, "venta-container", 3);
  renderizarPropiedades(propiedadesAlquiler, "alquiler-container", 3);

  document.getElementById("btn-venta").addEventListener("click", () => {
    window.location.href = "propiedades_venta.html";
  });

  document.getElementById("btn-alquiler").addEventListener("click", () => {
    window.location.href = "propiedades_alquiler.html";
  });
};
