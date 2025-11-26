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

document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contact-link');
    const mainContentArea = document.getElementById('main-content');
    const initialCard = document.getElementById('initial-card');
    
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