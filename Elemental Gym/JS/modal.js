// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-imagen");
  const modalImg = document.getElementById("img-ampliada");
  const cerrarBtn = document.querySelector(".cerrar-modal");

  // Si no existen los elementos en la página actual, salimos para evitar errores
  if (!modal || !modalImg) return;

  // Evento para abrir el modal al hacer clic en cualquier imagen con la clase .img-ejercicio
  document.querySelectorAll(".img-ejercicio").forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  });

  // Evento para cerrar con el botón (X)
  if (cerrarBtn) {
    cerrarBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Evento para cerrar al hacer clic fuera de la imagen (en el fondo oscuro)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});