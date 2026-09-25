

const projectsData = {

    p1: {

        title: "Administrator Analytics Platform",

        description:
            "Aplicación para la administración y monitorización de infraestructuras Windows/Linux. SysCore centraliza la gestión de servidores y equipos, permitiendo consultar su estado y visualizar métricas del sistema desde un dashboard web. El sistema incorpora un agente de monitorización que recopila periódicamente información como uso de CPU, memoria RAM, disco, dirección IP y hostname, y la envía mediante una API REST al backend desarrollado con Node.js y Express. Los datos son procesados y almacenados en PostgreSQL para su posterior consulta y visualización.",

        image:
            "./assets/imagen_SysCore2.png",

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

            "Dashboard centralizado para la monitorización.",

            "Gestión de servidores, equipos y usuarios.",

            "Agente de monitorización para sistemas Linux.",
         
            "Recopilación de métricas de CPU, RAM y disco.",

            "Envío periódico de métricas mediante API REST.",

            "Registro y consulta de logs y eventos.",

            "Visualización de métricas mediante gráficos.",

            "Persistencia de datos mediante PostgreSQL.",

            "Arquitectura Full Stack basada en Node.js, Express y JavaScript.",

        ],

        demoUrl: "#",

        githubUrl:
            "https://github.com/JM-Marquez/SysCore"

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
            "Proyecto personal de transformación y acondicionamiento de un trastero situado en la azotea, convirtiéndolo en un espacio de estudio cómodo, funcional y optimizado. El proyecto surgió de la necesidad de disponer de un lugar tranquilo donde continuar mi formación y estudio, aprovechando al máximo un espacio que inicialmente no estaba preparado para ello, este proyecto refleja mi capacidad para analizar limitaciones, diseñar soluciones eficientes con recursos contenidos y gestionar un proyecto de principio a fin para alcanzar un objetivo concreto.",

        images: [

            "./assets/trastero1.png",

            "./assets/trastero2.png",

            "./assets/trastero3.png",

            "./assets/trastero4.png",

            "./assets/trastero5.png",

            "./assets/trastero6.png",

            "./assets/trastero7.png"

        ],

        imageCaptions: [

            "Estado inicial del trastero y análisis del espacio disponible.",

            "Aplicación de masilla de corcho para mejorar el aislamiento.",

            "Aplicación de masilla de corcho y lijado.",

            "Espacio acondicionado y preparado para la instalación del suelo.",

            "Instalación de tarima SPC aislante de frio, calor y ruido.",

            "Organización del mobiliario y creación de la zona de trabajo.",

            "Resultado final: espacio de estudio funcional, organizado y optimizado."

        ],

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

            "Estado inicial y análisis del espacio.",

            "Planificación y distribución del espacio.",

            "Acondicionamiento y mejora del aislamiento.",

            "Aplicación de masilla de corcho como material aislante.",

            "Instalación de suelo de tarima.",

            "Pintura y acondicionamiento general.",

            "Optimización del mobiliario y almacenamiento.",

            "Creación de un entorno funcional orientado al estudio."

        ],

        demoUrl: "#",

        githubUrl: "#"

    }

};

const modalElement =
    document.getElementById("projectModal");

const modal =
    new bootstrap.Modal(modalElement);

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalImage =
    document.getElementById("modalImage");

const modalTags =
    document.getElementById("modalTags");

const modalFeatures =
    document.getElementById("modalFeatures");

const modalLiveDemo =
    document.getElementById("modalLiveDemo");

const modalGithub =
    document.getElementById("modalGithub");

const galleryCounter =
    document.getElementById("galleryCounter");

const galleryCaption =
    document.getElementById("galleryCaption");


const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");

let currentProject = null;

let currentImageIndex = 0;

function getProjectImages(project) {
    return project.images?.length
        ? project.images
        : project.image
            ? [project.image]
            : [];
}

function updateGalleryControls() {

    if (!currentProject) return;

    const hasGallery =
        getProjectImages(currentProject).length > 1;

    const display =
        hasGallery ? "" : "none";

    [galleryPrev, galleryNext, galleryCounter, galleryCaption]
        .forEach(element => {
            element.style.display = display;
        });
}

function showGalleryImage(index) {

    if (!currentProject) return;

    const images =
        getProjectImages(currentProject);

    if (!images.length) return;

    if (index < 0) {
        index = images.length - 1;
    }

    if (index >= images.length) {
        index = 0;
    }

    currentImageIndex =
        index;

    modalImage.src =
        images[currentImageIndex];

    modalImage.alt =
        `${currentProject.title} - imagen ${currentImageIndex + 1}`;

    const hasGallery =
        images.length > 1;

    if (hasGallery) {

        galleryCounter.textContent =
            `${currentImageIndex + 1} / ${images.length}`;

    }

    if (
        hasGallery &&
        currentProject.imageCaptions &&
        currentProject.imageCaptions[currentImageIndex]
    ) {

        galleryCaption.textContent =
            currentProject.imageCaptions[currentImageIndex];

    } else {

        galleryCaption.textContent =
            "";

    }
}



function openProjectModal(projectId) {

    const project =
        projectsData[projectId];

    if (!project) {

        console.warn(
            "Proyecto no encontrado:",
            projectId
        );

        return;

    }

    currentProject =
        project;

    currentImageIndex =
        0;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;

    modalTags.innerHTML =
        project.tags

            .map(
                tag => `

                    <span class="badge badge-tech rounded-pill">

                        ${tag}

                    </span>

                `
            )

            .join("");

    modalFeatures.innerHTML =
        project.features

            .map(
                feature => `

                    <li>
                        ${feature}
                    </li>

                `
            )

            .join("");

    updateGalleryControls();

    showGalleryImage(0);

    if (
        modalLiveDemo &&
        project.demoUrl &&
        project.demoUrl !== "#"
    ) {

        modalLiveDemo.href =
            project.demoUrl;

        modalLiveDemo.style.display =
            "inline-flex";

    } else if (modalLiveDemo) {

        modalLiveDemo.style.display =
            "none";

    }

    if (
        modalGithub &&
        project.githubUrl &&
        project.githubUrl !== "#"
    ) {

        modalGithub.href =
            project.githubUrl;

        modalGithub.style.display =
            "inline-flex";

    } else if (modalGithub) {

        modalGithub.style.display =
            "none";

    }

    modal.show();

}

galleryPrev.addEventListener("click", () => {
    showGalleryImage(currentImageIndex - 1);
});

galleryNext.addEventListener("click", () => {
    showGalleryImage(currentImageIndex + 1);
});

document.addEventListener(
    "keydown",
    event => {

        if (
            !modalElement.classList.contains("show")
        ) {

            return;

        }

        if (!currentProject) return;

        const images =
            getProjectImages(currentProject);

        if (images.length <= 1) return;

        if (
            event.key === "ArrowLeft"
        ) {

            showGalleryImage(
                currentImageIndex - 1
            );

        }

        if (
            event.key === "ArrowRight"
        ) {

            showGalleryImage(
                currentImageIndex + 1
            );

        }

    }
);

modalElement.addEventListener(
    "hidden.bs.modal",
    () => {

        modalImage.src =
            "";

        modalImage.alt =
            "";

        modalTags.innerHTML =
            "";

        modalFeatures.innerHTML =
            "";



        galleryCaption.textContent =
            "";

        currentProject =
            null;

        currentImageIndex =
            0;

    }
);

const mainMenu = document.getElementById("mainMenu");
const navbar = document.querySelector(".site-header .navbar");

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            
            // Si no hay href, es solo "#" o ya NO empieza por "#" (es una URL externa), no hacemos nada
            if (!href || href === "#" || !href.startsWith("#")) return;

            const destino = document.querySelector(href);
            if (!destino) return;

            e.preventDefault();
            destino.scrollIntoView({ behavior: "smooth" });

            if (mainMenu && mainMenu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(mainMenu).hide();
            }
        });
    });

// Evita que la X del modal conserve el foco al cerrarlo.
modalElement.addEventListener("hide.bs.modal", () => {
    document.activeElement?.blur();
});
