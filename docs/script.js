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
                subtitle: 'Pregunta Principal', 
                subcontent: '<strong>¿Se ha observado un aumento de las enfermedades respiratorias que motivan consultas en urgencias tras la pandemia, en comparación con el periodo previo al COVID-19?</strong>'
            },
            {
                subtitle: 'Otras preguntas de investigación',
                subcontent: '    <strong>1.</strong> ¿Cómo influye el tipo de patología en la clasificación del nivel de urgencia (leve, moderado, grave)?<br>    <strong>2.</strong> ¿Existen regiones/comunas con una mayor incidencia de enfermedades respiratorias?<br>    <strong>3.</strong> ¿Qué patologías respiratorias han sido más prevalentes en la última década y cómo ha cambiado su distribución a lo largo de los años?<br>    <strong>4.</strong> ¿Cuál es la relación entre los rangos etarios y la prevalencia de enfermedades respiratorias, y qué patologías son más comunes en cada grupo de edad?'
            }
        ]
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Datos Utilizados', 
        content: 'Los datos utilizados provienen de la Plataforma de Datos Abiertos del Gobierno de Chile, específicamente del conjunto <strong>“Atenciones de Urgencia por Causas Respiratorias”</strong>.<br>El registro se realiza semanalmente e incluye información sobre las atenciones por enfermedades respiratorias en establecimientos de salud de todo el país, principalmente del sector público.<br>Cada fila del dataset representa un <strong>establecimiento en una semana específica</strong>, e incluye tanto <strong>variables administrativas</strong> como <strong>epidemiológicas</strong>.<br><br>En términos generales, el dataset contiene múltiples años (2013 en adelante) y permite analizar la <strong>evolución temporal</strong>, <strong>distribución geográfica y diferencias por edad o tipo de patología</strong> en las consultas de urgencia respiratoria en Chile.<br>Antes de realizar el análisis exploratorio, es necesario definir la estrategia de procesamiento que seguiremos con los datos',
        details: [
            { 
                subtitle: 'Variables Principales', 
                subcontent: '<strong>EstablecimientoCodigo:</strong> Identificador único del establecimiento.<br><strong>RegionGlosa / ComunaGlosa:</strong> Región y comuna donde se ubica el establecimiento.<br><strong>Causa:</strong> Tipo de enfermedad respiratoria (ej. influenza, virus sincicial, adenovirus).<br><strong>Anio / SemanaEstadistica:</strong> Año y semana epidemiológica del registro.<br><strong>NumTotal:</strong> Número total de consultas por causas respiratorias.<br><strong>NumMenor1Anio, Num1a4Anios, Num5a14Anios, Num15a64Anios, Num65Mas:</strong> Distribución de consultas por grupo etario.<br><strong>NivelAtencion / TipoEstablecimiento / NivelComplejidad:</strong> Clasificación administrativa y operativa del centro de salud.'
            },
        ]
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Metodología', 
        content: 'El proyecto comenzó con la búsqueda de una fuente confiable de datos crudos, seleccionando finalmente los registros oficiales del Gobierno de Chile sobre enfermedades respiratorias desde 2013. Para facilitar el análisis y enfocar la comparación entre el período pre y post COVID-19, se acotó el trabajo a los años 2017-2025.<br>Luego se aplicó un proceso ETL para limpiar y preparar la base de datos. Con el dataset ya depurado, se realizó un Análisis Exploratorio de Datos (EDA) orientado a responder la pregunta principal mediante diversas visualizaciones y subpreguntas que permitieron identificar ciertas tendencias, con la cuál se obtienen conclusiones.<br>A partir del EDA se evaluaron correlaciones entre variables, lo que permitió determinar que no era viable construir un modelo predictivo directo sobre la pregunta inicial. Por ello, se decidió desarrollar un modelo alternativo enfocado en predecir el flujo de enfermedades respiratorias según la época del año, aprovechando la estacionalidad observada en los datos.',
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Proceso de ELT', 
        content: 'Antes de realizar el análisis exploratorio, es necesario definir la estrategia de procesamiento que seguiremos con los datos.<br>Estrategia de procesamiento: ELT vs ETL<br>Existen dos enfoques comunes para trabajar con datos:<br><br>ETL (Extract → Transform → Load):<br>ELT (Extract → Load → Transform):<br><br>En este proyecto utilizaremos ELT<br>Optamos por ELT porque:<br><br>El dataset es público, estructurado y grande, con posibles ajustes menores (nulos, formato de texto, nombres).<br>Nos permite mantener una copia cruda en la carpeta /data/raw/ y trabajar las transformaciones directamente en el notebook.<br>Facilita la reproducibilidad y trazabilidad del proceso, mostrando cada paso de limpieza dentro del análisis.',
        // imageSrc: "IMAGES/grafico.png"
    },
    { 
        title: 'Análisis y Resultados', 
        content: 'En esta etapa se realizará un análisis de los datos para poder responder las <strong>preguntas de investigación secundarias</strong> y la <strong>pregunta principal</strong> de nuestro proyecto.',
        details: [
            { 
                subtitle: '¿Cómo influye el tipo de patología en la clasificación del nivel de urgencia (leve, moderado, grave)?', 
                imageSrc: "graficos/bronquitis año complejidad.png",
                imageCaption: "Bronquitis",
                subcontent: 'FerLeRua',
            },
            {
                subtitle: '¿Existen regiones/comunas con una mayor incidencia de enfermedades respiratorias?',
                subcontent: ''
            },
            {
                subtitle: '¿Qué patologías respiratorias han sido más prevalentes en la última década y cómo ha cambiado su distribución a lo largo de los años?',
                subcontent: ''
            },
            {
                subtitle: '¿Cuál es la relación entre los rangos etarios y la prevalencia de enfermedades respiratorias, y qué patologías son más comunes en cada grupo de edad?',
                subcontent: ''
            }
        ]
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
                if (detail.imageSrc) {
                    htmlContent += `
                        <figure class="media-container">
                            <img src="${detail.imageSrc}" alt="Gráfico de ${detail.subtitle}" class="project-image">  
                            ${detail.imageCaption ? `<figcaption>${detail.imageCaption}</figcaption>` : ''}
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