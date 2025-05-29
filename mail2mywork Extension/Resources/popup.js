// popup.js

// Ya no necesitamos la constante workEmailAddress aquí.

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
    const mainText = document.querySelector('#container p:first-child'); // Para mensajes de estado o errores

    if (!urlDisplay || !sendButton || !mainText) {
        console.error("No se pudieron encontrar los elementos del DOM necesarios en popup.html.");
        if (urlDisplay) urlDisplay.textContent = "Error al cargar.";
        return;
    }

    sendButton.disabled = true; // Deshabilitar por defecto hasta que se cargue el email y la URL

    try {
        // Cargar la dirección de correo guardada
        // 'browser.storage.sync.get' es la API estándar para extensiones web.
        // Safari la soporta.
        const storageResult = await browser.storage.sync.get('workEmail');
        const workEmailAddress = storageResult.workEmail;

        if (!workEmailAddress) {
            // Si no hay email configurado, mostrar un mensaje y un enlace a las opciones.
            mainText.innerHTML = 'Por favor, configura tu <a href="#" id="openOptionsLink">correo del trabajo</a> en las opciones de la extensión.';
            urlDisplay.textContent = ""; // Limpiar el display de URL
            const openOptionsLink = document.getElementById('openOptionsLink');
            if (openOptionsLink) {
                openOptionsLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    // 'browser.runtime.openOptionsPage()' abre la página de opciones definida en manifest.json
                    browser.runtime.openOptionsPage();
                });
            }
            sendButton.disabled = true; // Mantener el botón deshabilitado
            return; // No continuar si no hay email configurado
        }

        // Si hay email, proceder a obtener la URL de la pestaña activa
        // 'browser.tabs.query' es la API estándar.
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });

        if (tabs && tabs.length > 0 && tabs[0].url) {
            const currentUrl = tabs[0].url;
            urlDisplay.textContent = currentUrl; // Mostrar la URL actual
            sendButton.disabled = false; // Habilitar el botón ahora que tenemos email y URL

            sendButton.addEventListener('click', () => {
                const domain = getDomainFromUrl(currentUrl);
                const subject = `mail2work: ${domain}`;
                const body = `Hola,\n\nAquí tienes la URL que quería enviarte:\n\n${currentUrl}\n\nSaludos.`;

                // Codificar los componentes para la URL mailto
                const encodedSubject = encodeURIComponent(subject);
                const encodedBody = encodeURIComponent(body);

                // Crear el enlace mailto usando la dirección de correo guardada
                const mailtoLink = `mailto:${workEmailAddress}?subject=${encodedSubject}&body=${encodedBody}`;

                // Abrir el cliente de correo por defecto
                // 'browser.tabs.create' para abrir nuevas URLs desde la extensión
                browser.tabs.create({ url: mailtoLink }).catch(err => {
                    console.error("Error al abrir el enlace mailto:", err);
                    mainText.textContent = "Error al intentar abrir el cliente de correo.";
                    urlDisplay.textContent = ""; // Limpiar por si acaso
                });
            });
        } else {
            urlDisplay.textContent = "No se pudo obtener la URL de la pestaña actual.";
            console.warn("No se pudo obtener la URL de la pestaña activa:", tabs);
            sendButton.disabled = true; // Deshabilitar si no hay URL
        }
    } catch (error) {
        console.error("Error en la inicialización del popup:", error);
        mainText.textContent = "Error al cargar la extensión. Revisa la consola.";
        urlDisplay.textContent = "";
        if (sendButton) sendButton.disabled = true;
    }
}

// Ejecutar la función de inicialización cuando el DOM del popup esté completamente cargado.
if (document.readyState === 'loading') { // Aunque los scripts de popup suelen ejecutarse después, es buena práctica.
    document.addEventListener('DOMContentLoaded', initializePopup);
} else {
    initializePopup(); // Si el DOM ya está listo
}

