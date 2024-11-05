document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('nav ul li a');

    const secciones = {
        inicio: `
            <section>
                <h2>Bienvenido a mi Portafolio</h2>
                <p>Selecciona una guía del menú para ver los proyectos.</p>
            </section>
        `,
        guia1: `
            <section class="guia">
                <h2>Guía 1</h2>
                <ul>
                    <li><a href="20235866_guia1/Mi_pagina.html">Ver mi página</a></li>
                    <li><a href="20235866_guia1/estilos_embebidos.html">Estilos Base</a></li>
                    <li><a href="20235866_guia1/estilos_embebidoswcss.html">Estilos con CSS</a></li>
                    <li><a href="20235866_guia1/paises.html">Centroamérica</a></li>
                    <li><a href="20235866_guia1/ejemplo2.html">Ejercicio 2</a></li>
                </ul>
            </section>
        `,
        guia2: `
            <section class="guia">
                <h2>Guía 2</h2>
                <ul>
                    <li><a href="20235866_Guia2/pelicula.HTML">Película</a></li>
                    <li><a href="20235866_Guia2/Tablero.html">Tablero de Damas</a></li>
                    <li><a href="20235866_Guia2/Mi_Biografía.html">Biografía</a></li>
                </ul>
            </section>
        `,
        guia3: `
            <section class="guia">
                <h2>Guía 3</h2>
                <ul>
                    <li><a href="20235866_Guia3/Oscares.html">Oscares</a></li>
                    <li><a href="20235866_Guia3/Menu_Horizontal.html">Menú Horizontal</a></li>
                    <li><a href="20235866_Guia3/Index.html">Index</a></li>
                    <li><a href="20235866_Guia3/galeria.html">Galería</a></li>
                    <li><a href="20235866_Guia3/planes.html">Planes</a></li>
                    <li><a href="20235866_Guia3/Cartas.html">Cartas Ejercicio 1</a></li>
                    <li><a href="20235866_Guia3/Cartas2.html">Cartas Ejercicio 2</a></li>
                </ul>
            </section>
        `,
        guia4: `
        <section class="guia">
            <h2>Guía 4</h2>
            <p>Contenido próximamente...</p>
        </section>
        `,
        guia5: `
            <section class="guia">
                <h2>Guía 5</h2>
                <ul>
                    <li><a href="Guia5_20235866/index.html">Página de inicio</a></li>
                </ul>
            </section>
        `,
        guia6: `
            <section class="guia">
                <h2>Guía 6</h2>
                <p>Contenido próximamente...</p>
            </section>
        `,
        guia7: `
            <section class="guia">
                <h2>Guía 7</h2>
                <ul>
                    <li><a href="Guia7_20235866/index.html">Página de inicio</a></li>
                </ul>
            </section>
        `
    };

    function loadSection(sectionName) {
        mainContent.innerHTML = secciones[sectionName] || secciones['inicio'];
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.getAttribute('data-section');
            loadSection(sectionName);
        });
    });

    loadSection('inicio');
});
