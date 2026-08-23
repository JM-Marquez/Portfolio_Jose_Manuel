// =====================================================
// PORTFOLIO - MAIN.JS
// José Manuel
// =====================================================


// =====================================================
// PROYECTOS
// =====================================================

const projectsData = {

    p1: {

        title: "Administrator Analytics Platform",

        description:
            "Aplicación Full Stack para la administración y monitorización de servidores. Permite gestionar usuarios, servidores y registros (logs) mediante una API REST desarrollada con Express y PostgreSQL.",

        image: "./assets/imagen_SysCore2.png",
       


        tags: [
            '<i class="bi bi-filetype-html"></i> HTML5',
    '<i class="bi bi-filetype-css"></i> CSS3',
    '<i class="bi bi-filetype-js"></i> JavaScript ES6',
    '<i class="bi bi-bootstrap-fill"></i> Bootstrap 5',
    '<i class="bi bi-diagram-3"></i> Express.js',
    '<i class="bi bi-box"></i> Node.js',
    '<i class="bi bi-database-fill"></i> PostgreSQL',
    '<i class="bi bi-hdd-network-fill"></i> REST API',
    '<i class="bi bi-git"></i> Git'
        ],

        features: [
            "Dashboard interactivo.",
            "Gráficos en tiempo real.",
            "Diseño responsive.",
            "Filtros dinámicos.",
            "Optimizado para escritorio y móvil."
        ],

        demoUrl: "#",
        githubUrl: "https://github.com/JM-Marquez/SysCore"
        

    },



    p2: {

    title: "Farma-Reverse",

    description:
        "Proyecto intermodular de 1.º de ASIR orientado a la logística inversa farmacéutica. Incluye el diseño de la infraestructura IT necesaria, desarrollo web y gestión de datos, junto con la planificación de redes, sistemas, hardware y una parte de servicios cloud.",

    image:
        "./assets/imagen_pharma_reverse2.png",

    tags: [
    '<i class="bi bi-filetype-html"></i> HTML',
    '<i class="bi bi-filetype-css"></i> CSS',
    '<i class="bi bi-bootstrap-fill"></i> Bootstrap',
    '<i class="bi bi-filetype-xml"></i> XML',
    '<i class="bi bi-braces"></i> JSON',
    '<i class="bi bi-database-fill"></i> SQL / phpMyAdmin',
    '<i class="bi bi-diagram-3-fill"></i> Redes',
    '<i class="bi bi-cloud-fill"></i> Cloud'
],

    features: [
        "Aplicación web para la gestión de logística inversa farmacéutica.",
        "Diseño y configuración de la infraestructura de red.",
        "Planificación del hardware y sistemas necesarios para la empresa.",
        "Gestión de datos mediante SQL y phpMyAdmin.",
        "Integración de servicios y recursos cloud.",
        "Proyecto intermodular de 1.º de ASIR."
    ],

    demoUrl:
        "https://jm-marquez.github.io/Pharma_Reverse_web/XML/datos.xml#",

    githubUrl:
        "https://github.com/JM-Marquez/PharmaLogist"

},

p3: {

        title: "Transformación de espacio de estudio",

    description:
        "Proyecto personal de transformación y acondicionamiento de un trastero situado en la azotea, convirtiéndolo en un espacio de estudio cómodo, funcional y optimizado. El proyecto surgió de la necesidad de disponer de un lugar tranquilo donde continuar mi formación y estudio, aprovechando al máximo un espacio que inicialmente no estaba preparado para ello.",

    image: "./assets/trastero_final.jpg",

    tags: [
        '<i class="bi bi-lightbulb"></i> Proactividad',
        '<i class="bi bi-puzzle"></i> Resolución de problemas',
        '<i class="bi bi-kanban"></i> Planificación',
        '<i class="bi bi-grid-3x3-gap"></i> Organización',
        '<i class="bi bi-tools"></i> Gestión de recursos',
        '<i class="bi bi-arrow-repeat"></i> Adaptabilidad',
        '<i class="bi bi-person-check"></i> Autonomía'
    ],

    features: [
        "Planificación y distribución del espacio.",
        "Acondicionamiento y mejora del aislamiento.",
        "Aplicación de masilla de corcho como material aislante.",
        "Instalación de suelo de tarima.",
        "Pintura y acondicionamiento general.",
        "Optimización del mobiliario y almacenamiento.",
        "Aprovechamiento máximo del espacio disponible.",
        "Creación de un entorno funcional orientado al estudio."
    ],

    demoUrl: "#",

    githubUrl: "#"
        

    },

p4: {

    title: "En construcción",

    description:
        "Proximamente.",

    image:
         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    tags: [
   
],

    features: [
        "Nuevo proyecto actualmente en desarrollo. Próximamente compartiré los detalles, tecnologías utilizadas y los retos abordados durante su implementación. "
    ],


    githubUrl:"https://github.com/JM-Marquez"
        

},

};



// =====================================================
// ELEMENTOS DEL MODAL
// =====================================================

const modalElement = document.getElementById("projectModal");

const modal = new bootstrap.Modal(modalElement);

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const modalTags = document.getElementById("modalTags");
const modalFeatures = document.getElementById("modalFeatures");

const modalLiveDemo = document.getElementById("modalLiveDemo");
const modalGithub = document.getElementById("modalGithub");



// =====================================================
// ABRIR PROYECTO
// =====================================================

function openProjectModal(projectId) {

    const project = projectsData[projectId];

    if (!project) {

        console.warn("Proyecto no encontrado:", projectId);

        return;

    }

    // -------------------
    // Información
    // -------------------

    modalTitle.textContent = project.title;

    modalDescription.textContent = project.description;

    modalImage.src = project.image;
    modalImage.alt = project.title;


    // -------------------
    // Tecnologías
    // -------------------

    modalTags.innerHTML = project.tags
        .map(tag => `
            <span class="badge badge-tech rounded-pill me-2 mb-2">
                ${tag}
            </span>
        `)
        .join("");


    // -------------------
    // Características
    // -------------------

    modalFeatures.innerHTML = project.features
        .map(item => `
            <li class="mb-2">
                ${item}
            </li>
        `)
        .join("");


    // -------------------
    // Botones (opcionales)
    // -------------------

    if (modalLiveDemo) {

        modalLiveDemo.href = project.demoUrl;

    }

    if (modalGithub) {

        modalGithub.href = project.githubUrl;

    }


    // -------------------
    // Mostrar modal
    // -------------------

    modal.show();

}



// =====================================================
// CERRAR MODAL AL CAMBIAR DE PROYECTO
// =====================================================

modalElement.addEventListener("hidden.bs.modal", () => {

    modalImage.src = "";

    modalTags.innerHTML = "";

    modalFeatures.innerHTML = "";

});



// =====================================================
// SCROLL SUAVE PARA ENLACES
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (!destino) return;

        e.preventDefault();

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ======================================
// MENÚ MÓVIL
// ======================================

const mainMenu = document.getElementById("mainMenu");
const menuToggle = document.querySelector(".navbar-toggler");

if (mainMenu && menuToggle) {

    const menuCollapse =
        bootstrap.Collapse.getOrCreateInstance(mainMenu, {
            toggle: false
        });


    // --------------------------------------
    // CERRAR AL PULSAR CUALQUIER ENLACE
    // --------------------------------------

    mainMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                menuCollapse.hide();

            });

        });


    // --------------------------------------
    // ABRIR / CERRAR CON LA HAMBURGUESA
    // --------------------------------------

    menuToggle.addEventListener("click", () => {

        if (mainMenu.classList.contains("show")) {

            menuCollapse.hide();

        } else {

            menuCollapse.show();

        }

    });


    // --------------------------------------
    // ACTUALIZAR ARIA
    // --------------------------------------

    mainMenu.addEventListener("shown.bs.collapse", () => {

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Cerrar menú");

    });


    mainMenu.addEventListener("hidden.bs.collapse", () => {

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");

    });

}