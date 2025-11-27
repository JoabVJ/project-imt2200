// Integrantes
const teamMembers = [
    { name: 'Fernanda Le Roy', email: 'fernanda.aros@uc.cl', role: 'Investigación y Documentación' },
    { name: 'Santiago González', email: 'santiago.gonzlez@estudiante.uc.cl', role: 'Investigación y Análisis' },
    { name: 'Joab Vivanco', email: 'joab.vj@estudiante.uc.cl', role: 'Diseño e Investigación' },
];

function generateContactModule() {
    let htmlContent = `
        <div class="contact-module">
            <h1>Integrantes</h1>
            <p>Puedes contactarnos directamente para consultas sobre la metodología:</p>
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
        title: 'Descripción del Problema', 
        content: 'Este proyecto de IMT2200 analiza las tendencias en las enfermedades respiratorias antes y después del impacto de la COVID-19, enfocándose en la infraestructura de salud pública y la respuesta social.',
        // subtitle: 'Objetivos',
        // subcontent: ''
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Datos Utilizados', 
        content: 'Este proyecto de IMT2200 analiza las tendencias en las enfermedades respiratorias antes y después del impacto de la COVID-19, enfocándose en la infraestructura de salud pública y la respuesta social.',
        // subtitle: 'Objetivos',
        // subcontent: ''
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Metodología', 
        content: 'Este proyecto de IMT2200 analiza las tendencias en las enfermedades respiratorias antes y después del impacto de la COVID-19, enfocándose en la infraestructura de salud pública y la respuesta social.',
        // subtitle: 'Objetivos',
        // subcontent: ''
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Proceso de ETL / Procesamiento Info', 
        content: 'Este proyecto de IMT2200 analiza las tendencias en las enfermedades respiratorias antes y después del impacto de la COVID-19, enfocándose en la infraestructura de salud pública y la respuesta social.',
        // subtitle: 'Objetivos',
        // subcontent: ''
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Análisis y Resultados', 
        content: 'El análisis muestra un claro descenso en las enfermedades respiratorias comunes durante el confinamiento (2020) y un aumento significativo en la sobrecarga del sistema en los años posteriores (2022). Se observó una correlación negativa del -0.75 entre el distanciamiento social y la incidencia de gripe.',
    },
    { 
        title: 'Interpretación', 
        content: 'Recibimos comentarios valiosos de profesores y expertos en salud pública, lo que llevó a recalcular las tasas ajustadas por población para mejorar la precisión del análisis.',
    },
    { 
        title: 'Links Relevantes', 
        links: [
            { text: 'Repositorio del Proyecto', url: 'https://github.com/JoabVJ/proyecto_imt2200' },
            { text: 'Datos Originales - Gob', url: 'https://datos.gob.cl/dataset/atenciones-de-urgencia-causas-respiratorias' },
            { text: 'Ministerio de Salud', url: 'https://www.minsal.cl/' },
        ]
    }
];

function generateProjectModule() {
    let htmlContent = `
        <div class="project-module">
            <h1>Enfermades Respiratorias: PRE Y POST <span class="gradient-text">COVID-19</span></h1>
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
        if (section.imageSrc) {
            htmlContent += `
                <figure class="media-container">
                    <img src="${section.imageSrc}" alt="Gráfico de ${section.title}" class="project-image">  
                    <figcaption>Figura 1.${index}: ${section.title} - Visualización de datos.</figcaption>
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
let initialHTML = null;

document.addEventListener('DOMContentLoaded', () => {
    const mainContentArea = document.getElementById('main-content');
    const initialCard = document.getElementById('initial-card');
    const logoLink = document.querySelector('.logo');

    initialHTML = initialCard ? initialCard.outerHTML : ''; 

    if (logoLink) {
        logoLink.addEventListener('click', (event) => {
            event.preventDefault();
            mainContentArea.innerHTML = initialHTML; 
        });
    }

    const contactLinkNav = document.getElementById('contact-link');
    if (contactLinkNav) {
        contactLinkNav.addEventListener('click', (event) => {
            event.preventDefault(); 
            mainContentArea.innerHTML = generateContactModule(); //Parte de Contactos
        });
    }

    mainContentArea.addEventListener('click', (event) => {

        if (event.target.id === 'project') {
            event.preventDefault(); 
            mainContentArea.innerHTML = generateProjectModule();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } 
    });
});