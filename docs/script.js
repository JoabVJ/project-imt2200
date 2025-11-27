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
        content: 'En esta etapa se realizará un análisis de los datos para poder responder las <strong>preguntas de investigación secundarias</strong> y la <strong>pregunta principal</strong> de nuestro proyecto:',
        details: [
            { 
                subtitle: '¿Cómo influye el tipo de patología en la clasificación del nivel de urgencia (leve, moderado, grave)?', 
                subcontent: 'Notamos que no existe una relación fija entre tipo de patología y nivel de urgencia. Esto puede sugerir que la gravedad de la atención no depende directamente del diagnóstico, sino de otros factores externos. Concluimos entonces que el tipo de patología respiratoria no determina de forma directa el nivel de urgencia con que se atiende a un paciente.Existen factores contextuales, demográficos y sanitarios que inciden en la gravedad de las atenciones. Por tanto, la planificación hospitalaria no debería basarse solo en el tipo de enfermedad, sino también en el perfil de la población atendida y el contexto de la población.',
                media: [
                    { 
                        src: "graficos/bronquitis año complejidad.png", 
                        caption: "Figura 1" 
                    },
                    { 
                        src: "graficos/covid no identificador por año y complejiadd.png", 
                        caption: "Figura 2" 
                    },
                    { 
                        src: "graficos/ira por ño y complejiadd.png", 
                        caption: "Figura 3" 
                    }
                ],

            },
            {
                subtitle: '¿Existen regiones/comunas con una mayor incidencia de enfermedades respiratorias?',
                subcontent: 'Chile cuenta con 16 regiones y más de 340 comunas, por lo que un análisis comunal sería demasiado extenso. Para simplificar el estudio, se decidió realizar el análisis a nivel regional.<br><br>Tras filtrar estos registros, se determinó que la IRA Alta (J00-J06) es la causa respiratoria más frecuente en todas las regiones del país.<br>Al comparar los totales acumulados por región, la Región Metropolitana de Santiago presenta el mayor número absoluto de hospitalizaciones respiratorias, seguida por Biobío, Maule y Valparaíso. No obstante, esta diferencia puede estar influenciada por el tamaño poblacional.<br><br>Esto evidencia que, aunque los casos absolutos se concentran en las zonas más pobladas, la incidencia proporcional es mayor en regiones dentro del país, que en la capital y Regiones cercanas a la capital.',
                media: [
                    { 
                        src: "graficos/outputcausas por region(total hospitalizaciones).png", 
                        caption: "Figura 4" 
                    },
                    { 
                        src: "graficos/top 2 causas por region.png", 
                        caption: "Figura 5" 
                    },
                    { 
                        src: "graficos/hospitalizaciones por region.png", 
                        caption: "Figura 6" 
                    },
                    { 
                        src: "graficos/causas por region.png", 
                        caption: "Figura 7" 
                    }
                ],
            },
            {
                subtitle: '¿Qué patologías respiratorias han sido más prevalentes en la última década y cómo ha cambiado su distribución a lo largo de los años?',
                subcontent: 'Para este análisis se consideraron los años 2017–2019 (periodo pre-COVID) y 2023–2025 (periodo post-COVID). Los años intermedios (2020–2022) fueron excluidos debido a la fuerte alteración que produjo la pandemia en la atención de urgencias y la disponibilidad de registros.<br><br>Las patologías <strong>IRA Alta (J00–J06) y Bronquitis/Bronquiolitis aguda (J20–J21)</strong> se mantienen como las más frecuentes tanto antes como después del COVID-19<br><br>Algunas patologías, como <strong>Neumonía (J12–J18)</strong>, muestran un <strong>aumento leve en el periodo post-COVID</strong>, lo que podría reflejar secuelas o mayor susceptibilidad respiratoria.En cambio, las crisis obstructivas bronquiales y las “otras causas respiratorias” disminuyen ligeramente, situándose bajo la diagonal.<br><br>En conjunto, el gráfico evidencia que, aunque la distribución general de patologías respiratorias se mantiene, la pandemia introdujo un cambio importante en la magnitud y composición de las atenciones respiratorias.',
                media: [
                    { 
                        src: "graficos/comparacion patologias pre-post covid.png", 
                        caption: "Figura 8" 
                    }
                ],
            },
            {
                subtitle: '¿Cuál es la relación entre los rangos etarios y la prevalencia de enfermedades respiratorias, y qué patologías son más comunes en cada grupo de edad?',
                subcontent: 'La patología IRA Alta (J00–J06) se mantiene como la más prevalente en todos los grupos etarios, tanto en el período pre-COVID (2017–2019) como en el post-COVID (2023–2025), evidenciando su persistencia como causa dominante entre las otras causas respiratorias.<br><br>Aunque antes de la pandemia los casos se concentraban principalmente en niños menores de 4 años, en el período posterior se observa un aumento de atenciones en grupos mayores, especialmente entre 5 y 64 años, lo que indica un cambio en el perfil etario afectado<br><br>Este desplazamiento podría explicarse por efectos inmunológicos post-COVID, cambios en la exposición a virus respiratorios tras el fin de las medidas sanitarias, y ajustes en los patrones de atención en el sistema de salud.<br><br>En general, en este objetivo podemos notar que resultados muestran que, si bien la causa predominante no varía, la pandemia modificó la distribución etaria de las enfermedades respiratorias, ampliando su impacto hacia edades mayores y resaltando la importancia de estrategias preventivas más integrales.',
                media: [
                    { 
                        src: "graficos/causa-gurpoetario-pre.png", 
                        caption: "Figura 9" 
                    },
                    { 
                        src: "graficos/causa-grupoetario.png", 
                        caption: "Figura 10" 
                    }
                ],
            }
        ]
    },
    { 
        title: 'Conclusión', 
        content: 'En base a todas las preguntas anteriores, junto con el análisis de hospitalizaciones pre y post pandemia, concluimos lo siguiente:<br><br><strong>1.</strong> Los resultados muestran un incremento significativo en la cantidad total de hospitalizaciones y atenciones respiratorias en el período post-pandemia (2023–2025) respecto al pre-pandemia (2017–2019).<br><br> - Pre-pandemia: 350.745 atenciones de baja complejidad y 51.222 de alta.<br>- Post-pandemia: 767.660 de baja y 82.580 de alta complejidad. <br><br><strong>Esto refleja un aumento sostenido tanto en el volumen total como en los casos de mayor gravedad.</strong><br><br><strong>2.</strong>Aunque la IRA Alta (J00–J06) se mantiene como la patología predominante en todo el país, los análisis previos muestran que la pandemia modificó la composición y distribución de los casos, generando:<br>- Mayor impacto en grupos etarios mayores, especialmente entre 5 y 64 años.<br>- Un aumento de patologías más severas, como la Neumonía (J12–J18) y las hospitalizaciones asociadas a COVID-19 (U07.1 y U07.2)<br>- Cambios geográficos relevantes, destacando que las regiones del sur del país presentan las tasas más altas de incidencia proporcional por habitante.<br><br><strong>3.</strong> Sobre el nivel de urgencia, se concluye no existe una relación fija entre diagnóstico y gravedad; sin embargo, los años de mayor carga sanitaria (2020–2021) y sus efectos posteriores incrementaron los casos de alta complejidad, tendencia que se mantiene en los años siguientes.<br><br> En conjunto, los resultados evidencian que <strong>tras la pandemia aumentaron tanto la frecuencia como la severidad de las enfermedades respiratorias atendidas en urgencias en Chile</strong>. Si bien las causas más comunes se mantienen, la pandemia amplió su <strong>impacto etario, geográfico y de complejidad</strong>, marcando un cambio estructural en el perfil de las atenciones respiratorias del país',
        details: [
            { 
                subtitle: 'Interpretación de Correlaciones', 
                subcontent: 'La mayor parte del tiempo, nuestra predicción es bastante buena (error de aprox 1364), pero en ciertas semanas o regiones, la demanda se dispara o cae de una manera que no puede predecir tan bien, y en esos momentos, el error puede ser de 2818 o más.<br><br>Sí, vemos la diferencia entre el <strong>MAE</strong> y el <strong>RMSE</strong> que demuestra estadísticamente que la volatilidad de la demanda aumentó tras la pandemia, ahora existen "picos" de demanda mucho más agresivos que en el pasado, lo que valida que los patrones de consulta sufrieron una modificación estructural post-COVID."',
                media: [
                    { 
                        src: "graficos/heatmap.png", 
                        caption: "Figura 11" 
                    },
                    { 
                        src: "graficos/output.png", 
                        caption: "Figura 12" 
                    }
                ]

            },
            {
                subtitle: 'Sesgos del Modelo',
                subcontent: 'La demanda por enfermedades respiratorias según lo visto en la exploración de los datos suele estar dominada por niños pequeños (menores de 5 años) y adultos mayores (65 años o más).<br><br>Entonces, por ejemplo si un año tiene un aumento de niños pequeños en una región en particular, el modelo va a predecir de todas formas el aumento estacional basado en la semana, pero no podrá capturar la magnitud adicional del pico impulsada por esa demografía. El modelo va a predecir un pico alto, pero no va a entender por qué.<br><br>Otro sesgo puede ser con la región, el modelo solo aprende el patrón promedio de la región. Ignora que las subpoblaciones dentro de una región pueden variar drásticamente en susceptibilidad y patrones de consulta.'
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
            <h1>Enfermedades Respiratorias: <span class="gradient-text">PRE Y POST COVID-19</span></h1>
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
            `;
                // AÑADIMOS LA LÓGICA DE LA IMAGEN AQUÍ (DENTRO DEL BUCLE)
                if (detail.media && Array.isArray(detail.media)) {
                    detail.media.forEach((item, mediaIndex) => {
                        htmlContent += `
                            <figure class="media-container">
                                <img src="${item.src}" alt="Gráfico ${detail.subtitle} ${mediaIndex + 1}" class="project-image">  
                                ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ''}
                            </figure>
                        `;
                    }); 
                }
                
                htmlContent += `
                    </div>
                `;
            });
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