// Integrantes
const teamMembers = [
    { name: 'Fernanda Le Roy', email: 'fernanda.aros@uc.cl', role: 'Investigación y Documentación' },
    { name: 'Santiago González', email: 'santiago.gonzlez@estudiante.uc.cl', role: 'Investigación y Análisis' },
    { name: 'Joab Vivanco', email: 'joab.vj@estudiante.uc.cl', role: 'Diseño e Investigación' },
];

function generateContactModule() {
    let htmlContent = `
        <div class="contact-module">
            <h2>👥 Integrantes del Proyecto</h2>
            <p>Puedes contactarnos directamente para consultas sobre la metodología y los datos.</p>
            <div class="contact-list">
    `;

    teamMembers.forEach(member => {
        htmlContent += `
            <div class="member-card">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
                <a href="mailto:${member.email}">${member.email}</a>
            </div>
        `;
    });

    htmlContent += `
            </div>
        </div>
    `;

    return htmlContent;
}
// PROYECTO COMOT AL
const projectContent = [
    { 
        title: 'Introducción', 
        content: 'Este proyecto de IMT2200 analiza las tendencias en las enfermedades respiratorias antes y después del impacto de la COVID-19, enfocándose en la infraestructura de salud pública y la respuesta social.',
        subtitle: 'Objetivos',
        subcontent: 'Determinar los cambios en la tasa de hospitalización y analizar la correlación entre las políticas de distanciamiento social y la incidencia de enfermedades comunes (gripe, VRS).'
    },
    { 
        title: 'Procesamiento de Información', 
        content: `La recolección de datos se realizó a través de fuentes públicas (Ministerio de Salud) para los años 2018 a 2022. Utilizamos **JavaScript** para limpiar y normalizar los conjuntos de datos, asegurando la coherencia entre las métricas PRE y POST pandemia.`,
        mediaPlaceholder: true // Indicador para colocar una imagen o gráfico
    },
    { 
        title: 'Análisis y Resultados', 
        content: 'El análisis muestra un claro descenso en las enfermedades respiratorias comunes durante el confinamiento (2020) y un aumento significativo en la sobrecarga del sistema en los años posteriores (2022). Se observó una correlación negativa del -0.75 entre el distanciamiento social y la incidencia de gripe.',
    },
    { 
        title: 'Retroalimentación', 
        content: 'Recibimos comentarios valiosos de profesores y expertos en salud pública, lo que llevó a recalcular las tasas ajustadas por población para mejorar la precisión del análisis.',
    },
    { 
        title: 'Repositorios', 
        links: [
            { text: 'Código Fuente (GitHub)', url: 'https://github.com/tu_usuario/proyecto_imt2200' },
            { text: 'Conjunto de Datos Original', url: 'https://data.gob.cl/ejemplo' }
        ]
    }
];

function generateProjectModule() {
    let htmlContent = `
        <div class="project-module">
            <h2>🔬 Detalles y Metodología del Proyecto</h2>
            <div class="section-container">
    `;

    projectContent.forEach((section, index) => {
        htmlContent += `
            <section class="project-section glass-card" data-index="${index}">
                <h3 class="section-title">${section.title}</h3>
        `;
        
        // TITULO CONTENIDO PRINCIPAL
        if (section.content) {
            htmlContent += `<p class="main-content">${section.content}</p>`;
        }

        // SUBTITULO PARA INTRODUCCION
        if (section.subtitle && section.subcontent) {
            htmlContent += `
                <div class="sub-section">
                    <h4>${section.subtitle}</h4>
                    <p>${section.subcontent}</p>
                </div>
            `;
        }

        // PROCESAMIENTO DE INFORMACION
        if (section.mediaPlaceholder) {
            htmlContent += `
                <figure class="media-placeholder">
                    
                    <figcaption>Visualización de la normalización de los datos (Pre y Post COVID-19).</figcaption>
                </figure>
            `;
        }
        
        // REPOSITORIOS / LINKS
        if (section.links) {
            htmlContent += `<ul class="repo-list">`;
            section.links.forEach(link => {
                htmlContent += `
                    <li>
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-repo">
                            🔗 ${link.text}
                        </a>
                    </li>
                `;
            });
            htmlContent += `</ul>`;
        }

        htmlContent += `</section>`;
    });

    htmlContent += `
            </div>
        </div>
    `;
    return htmlContent;
}

document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contact-link');
    const mainContentArea = document.getElementById('main-content');
    const initialCard = document.getElementById('initial-card');
    const projectStartBtn = document.getElementById('project'); 

    if (projectStartBtn) {
        projectStartBtn.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            // SE CAMBIA EL CONTENIDO PRINCIPAL
            mainContentArea.innerHTML = generateProjectModule();
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    const initialHTML = initialCard ? initialCard.outerHTML : ''; 

    contactLink.addEventListener('click', (event) => {
        event.preventDefault(); // No recarga la página
        mainContentArea.innerHTML = '';
        mainContentArea.innerHTML = generateContactModule();
    });
    
    // VOLVER AL MENU PRINCIPAL
    const logoLink = document.querySelector('.logo');
    logoLink.addEventListener('click', (event) => {
        event.preventDefault();
        mainContentArea.innerHTML = initialHTML;
    });
});