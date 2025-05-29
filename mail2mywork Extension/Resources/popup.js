// popup.js

// Tu dirección de correo electrónico del trabajo
const workEmailAddress = "rodrigo.villamil@icloud.com"; // ¡¡IMPORTANTE: Cambia esto!!

/**
 * Función para obtener la URL del dominio.
 * @param {string} urlString - La URL completa.
 * @returns {string} El dominio de la URL o una cadena vacía si no se puede parsear.
 */
function getDomainFromUrl(urlString) {
    try {
        const url = new URL(urlString);
        return url.hostname;
    } catch (error) {
        console.error("Error parsing URL for domain:", error);
        return ""; // Devuelve una cadena vacía o maneja el error como prefieras
    }
}

/**
 * Función principal que se ejecuta cuando el popup se carga.
 */
async function initializePopup() {
    const urlDisplay = document.getElementById('url-display');
    const sendButton = document.getElementById('sendButton');

    if (!urlDisplay || !sendButton) {
        console.error("No se pudieron encontrar los elementos del DOM necesarios.");
        if (urlDisplay) urlDisplay.textContent = "Error al cargar.";
        return;
    }

    try {
        // Obtener la pestaña activa y su URL
        // En Manifest V3, browser.tabs.query es la forma estándar.
        // Safari podría tener algunas diferencias sutiles, pero esto debería funcionar.
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });

        if (tabs && tabs.length > 0 && tabs[0].url) {
            const currentUrl = tabs[0].url;
            urlDisplay.textContent = currentUrl; // Muestra la URL completa

            sendButton.addEventListener('click', () => {
                const domain = getDomainFromUrl(currentUrl);
                const subject = `mail2work: ${domain}`;
                const body = `Hola,\n\nAquí tienes la URL que quería enviarte:\n\n${currentUrl}\n\nSaludos.`;

                // Codificar los componentes para la URL mailto
                const encodedSubject = encodeURIComponent(subject);
                const encodedBody = encodeURIComponent(body);

                // Crear el enlace mailto
                const mailtoLink = `mailto:${workEmailAddress}?subject=${encodedSubject}&body=${encodedBody}`;

                // Abrir el cliente de correo por defecto
                // En extensiones, es mejor usar browser.tabs.create para abrir nuevas URLs
                browser.tabs.create({ url: mailtoLink }).catch(err => {
                    console.error("Error al abrir el enlace mailto:", err);
                    // Podrías mostrar un mensaje al usuario aquí si falla
                    urlDisplay.textContent = "Error al abrir el correo.";
                });
            });
        } else {
            urlDisplay.textContent = "No se pudo obtener la URL.";
            console.warn("No se pudo obtener la URL de la pestaña activa:", tabs);
            sendButton.disabled = true; // Deshabilitar el botón si no hay URL
        }
    } catch (error) {
        console.error("Error al obtener la URL de la pestaña activa:", error);
        urlDisplay.textContent = "Error al obtener la URL.";
        if (sendButton) sendButton.disabled = true;
    }
}

// Ejecutar la función de inicialización cuando el DOM esté completamente cargado.
// Para popups de extensión, el script se ejecuta después de que el DOM esté listo,
// pero usar DOMContentLoaded es una buena práctica.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePopup);
} else {
    initializePopup();
}

// El archivo background.js y content.js no necesitan modificaciones
// para la funcionalidad descrita, así que puedes dejarlos como están
// o vacíos si no tienen otra funcionalidad.
// Por ejemplo, background.js podría estar vacío o solo con un console.log inicial.
// console.log("Background script for mail2mywork loaded.");

// content.js generalmente se usa para interactuar con el contenido de la página,
// lo cual no es necesario para esta funcionalidad específica.
// console.log("Content script for mail2mywork loaded (if matches conditions).");

