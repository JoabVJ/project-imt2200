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
// <br>
const projectContent = [
    { 
        title: 'Descripción de Problema', 
        content: 'La pandemia de COVID-19 produjo un cambio radical en los patrones de consulta por enfermedades respiratorias en los servicios de urgencia. Antes del 2020, la frecuencia con la que se presenciaban virus respiratorios como influenza, virus sincicial y adenovirus determinaba los flujos de pacientes. Sin embargo, tras las medidas de confinamiento, el uso de mascarillas y el cambio en conductas sociales, se observaron variaciones en la incidencia y distribución de estas patologías.<br>La motivación de este proyecto es analizar si, efectivamente, la pandemia alteró la cantidad de atenciones por enfermedades respiratorias en urgencias y si estas modificaciones se han mantenido en los años posteriores al confinamiento. El problema es relevante porque los servicios de urgencia deben planificar sus recursos humanos y materiales de acuerdo a la demanda, y comprender estas tendencias puede facilitar la preparación frente a futuras crisis sanitarias.',
        details: [
            { 
                subtitle: 'Objetivo General', 
                subcontent: 'Analizar la evolución de las consultas por enfermedades respiratorias en servicios de urgencia en Chile, comparando el periodo previo y posterior a la pandemia de COVID-19, para identificar tendencias y cambios significativos.'
            },
        ]
    },
    { 
        title: 'Preguntas de Investigación', 
        content: 'Para orientar el análisis de los datos, se define en primer lugar una pregunta de investigación principal, que actúa como eje central del proyecto y establece el foco del estudio. Sin embargo, para responderla de manera adecuada resulta necesario formular además un conjunto de preguntas secundarias, que permiten caracterizar en mayor detalle el fenómeno estudiado y aportar el contexto necesario para comprender por qué podría haberse producido (o no) un aumento en la demanda de atenciones por enfermedades respiratorias en los servicios de urgencias.',
        details: [
            { 
                subtitle: '<strong>Pregunta Principal</strong>', 
                subcontent: '¿Se ha observado un aumento de las enfermedades respiratorias que motivan consultas en urgencias tras la pandemia, en comparación con el periodo previo al COVID-19?'
            },
            {
                subtitle: 'Otras preguntas de investigación',
                subcontent: '    1.¿Cómo influye el tipo de patología en la clasificación del nivel de urgencia (leve, moderado, grave)?<br>    2.¿Existen regiones/comunas con una mayor incidencia de enfermedades respiratorias?<br>    3.¿Qué patologías respiratorias han sido más prevalentes en la última década y cómo ha cambiado su distribución a lo largo de los años?<br>    4.¿Cuál es la relación entre los rangos etarios y la prevalencia de enfermedades respiratorias, y qué patologías son más comunes en cada grupo de edad?'
            }
        ]
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Datos Utilizados', 
        content: 'Los datos utilizados provienen de la Plataforma de Datos Abiertos del Gobierno de Chile, específicamente del conjunto <strong>“Atenciones de Urgencia por Causas Respiratorias”</strong>.<br>El registro se realiza semanalmente e incluye información sobre las atenciones por enfermedades respiratorias en establecimientos de salud de todo el país, principalmente del sector público.<br>Cada fila del dataset representa un establecimiento en una semana específica, e incluye tanto variables administrativas como epidemiológicas.',
        // subtitle: 'Objetivos',
        // subcontent: ''
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Metodología', 
        content: 'A',
        // subtitle: 'Objetivos',
        // subcontent: ''
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Proceso de ETL / Procesamiento Info', 
        content: 'A',
        // subtitle: 'Objetivos',
        // subcontent: ''
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Análisis y Resultados', 
        content: 'A',
    },
    { 
        title: 'Interpretación', 
        content: 'A',
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
            <h1>Enfermades Respiratorias: <span class="gradient-text">PRE Y POST COVID-19</span></h1>
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
        if (section.details && Array.isArray(section.details)) {
            section.details.forEach(detail => {
                htmlContent += `
                    <div class="sub-section">
                        <h4>${detail.subtitle}</h4>
                        <p>${detail.subcontent}</p>
                    </div>
                `;
            });
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