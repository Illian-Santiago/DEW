// URL de la API de Naruto en español
const apiUrl = 'https://naruto-api-rsl3.onrender.com/api/v1/characters';

// Función para obtener datos de la API
async function obtenerDatosNaruto() {
    try {
        const respuesta = await fetch(apiUrl);
        if (!respuesta.ok) {
            throw new Error('Error en la red');
        }
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// Llamar a la función
obtenerDatosNaruto();