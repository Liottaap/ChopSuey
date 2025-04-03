

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".menu-icons");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Encuentra el `li` padre del botón clickeado
            const li = this.closest("li");

            // Remueve 'active' de todos los `li`
            document.querySelectorAll(".aside li").forEach(item => item.classList.remove("active"));

            // Agrega 'active' solo al `li` del botón clickeado
            li.classList.add("active");

            // Aquí puedes agregar la lógica de filtrado si lo necesitas
        });
    });
});


/* Menu 🍔 */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".burger-menu").addEventListener("click", function() {
        document.querySelector(".aside-container").classList.toggle("active");
    });
});


/* Productsos */
import { Products } from './products.js'; // Asegúrate de que el nombre coincida

const menuContainer = document.querySelector('.menu-grid');
const filterButtons = document.querySelectorAll('.filter-buttons button');

// Función para renderizar productos
function renderProductos(filterProducts) {
    menuContainer.innerHTML = ""; // Limpiar la lista antes de mostrar nuevos elementos

    filterProducts.forEach(producto => { // Aquí corregimos el forEach
        const li = document.createElement("li");
        li.classList.add("menu-grid-item");

        li.innerHTML = `
            <a href="/" class="menu-grid--text">
                <h3>${producto.nombre}</h3>
                <p><span class="price">$</span>${producto.precio}</p>
                <img src="${producto.img}" alt="Plato de ${producto.nombre}">
            </a>
        `;

        menuContainer.appendChild(li);
    });
}

// Mostrar todos los productos al cargar la página
renderProductos(Products);

// Evento para los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const category = e.target.dataset.filter; // Obtiene el filtro del botón

        if (category === "todos") {
            renderProductos(Products);
        } else {
            const filtered = Products.filter(prod => prod.type === category); // Filtra por type
            renderProductos(filtered);
        }
    });
});