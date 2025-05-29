// options.js

const emailInput = document.getElementById('workEmail');
const saveButton = document.getElementById('saveButton');
const statusDisplay = document.getElementById('status');

/**
 * Guarda la dirección de correo en el almacenamiento.
 */
function saveOptions() {
    const email = emailInput.value;
    if (!email) {
        displayStatus("Por favor, introduce una dirección de correo.", "error");
        return;
    }
    // Validar formato de email (básico)
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        displayStatus("Por favor, introduce una dirección de correo válida.", "error");
        return;
    }

    browser.storage.sync.set({
        workEmail: email
    }).then(() => {
        displayStatus("Opciones guardadas.", "success");
    }).catch(err => {
        console.error("Error al guardar opciones:", err);
        displayStatus("Error al guardar. Revisa la consola.", "error");
    });
}

/**
 * Carga la dirección de correo desde el almacenamiento y la muestra.
 */
function loadOptions() {
    browser.storage.sync.get('workEmail').then(result => {
        if (result.workEmail) {
            emailInput.value = result.workEmail;
        }
    }).catch(err => {
        console.error("Error al cargar opciones:", err);
        displayStatus("Error al cargar la configuración previa.", "error");
    });
}

/**
 * Muestra un mensaje de estado al usuario.
 * @param {string} message - El mensaje a mostrar.
 * @param {'success'|'error'} type - El tipo de mensaje.
 */
function displayStatus(message, type) {
    statusDisplay.textContent = message;
    statusDisplay.className = `status-message ${type}`; // Asegura que la clase base siempre esté
    setTimeout(() => {
        statusDisplay.textContent = '';
        statusDisplay.className = 'status-message';
    }, 3000); // El mensaje desaparece después de 3 segundos
}

// Cargar las opciones guardadas cuando la página se carga
document.addEventListener('DOMContentLoaded', loadOptions);

// Guardar las opciones cuando se hace clic en el botón
saveButton.addEventListener('click', saveOptions);

