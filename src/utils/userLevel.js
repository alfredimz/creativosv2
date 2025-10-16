/**
 * Utilidad para gestionar el nivel de experiencia del usuario
 * con localStorage - FASE 3
 */

// Niveles de usuario disponibles
export const USER_LEVELS = {
  NUEVO: 'nuevo',           // Usuario sin experiencia - Home educativo
  INTERMEDIO: 'intermedio', // Usuario con algo de experiencia - Home servicios
  TECNICO: 'tecnico'        // Usuario experto - Home profesional
};

// Key para localStorage
const STORAGE_KEY = 'creativos_user_level';

/**
 * Obtener el nivel actual del usuario desde localStorage
 * @returns {string} - Nivel del usuario o 'intermedio' por defecto
 */
export const getUserLevel = () => {
  try {
    const level = localStorage.getItem(STORAGE_KEY);
    // Si no existe nivel guardado, retornar intermedio como defecto
    if (!level || !Object.values(USER_LEVELS).includes(level)) {
      return USER_LEVELS.INTERMEDIO;
    }
    return level;
  } catch (error) {
    console.error('Error al leer nivel de usuario:', error);
    return USER_LEVELS.INTERMEDIO;
  }
};

/**
 * Guardar el nivel del usuario en localStorage
 * @param {string} level - Nivel a guardar (nuevo, intermedio, tecnico)
 * @returns {boolean} - true si se guardó exitosamente
 */
export const setUserLevel = (level) => {
  try {
    // Validar que el nivel sea válido
    if (!Object.values(USER_LEVELS).includes(level)) {
      console.error('Nivel inválido:', level);
      return false;
    }
    localStorage.setItem(STORAGE_KEY, level);
    return true;
  } catch (error) {
    console.error('Error al guardar nivel de usuario:', error);
    return false;
  }
};

/**
 * Limpiar el nivel guardado (resetear a default)
 */
export const clearUserLevel = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error al limpiar nivel de usuario:', error);
    return false;
  }
};

/**
 * Determinar nivel basado en respuestas del perfilador
 * @param {Object} respuestas - Objeto con las respuestas del perfilador
 * @returns {string} - Nivel sugerido (nuevo, intermedio, tecnico)
 */
export const determinarNivelPorRespuestas = (respuestas) => {
  // Análisis de respuestas para determinar nivel
  let puntajeNuevo = 0;
  let puntajeIntermedio = 0;
  let puntajeTecnico = 0;

  // Analizar pregunta 2 (tamaño)
  if (respuestas[2] === 'No estoy seguro') {
    puntajeNuevo += 2;
  } else {
    puntajeTecnico += 1;
  }

  // Analizar pregunta 3 (comprar o rentar)
  if (respuestas[3] === 'No estoy seguro') {
    puntajeNuevo += 2;
  } else {
    puntajeIntermedio += 1;
  }

  // Analizar pregunta 4 (modificaciones)
  if (respuestas[4] === 'Sin modificaciones') {
    puntajeNuevo += 1;
  } else if (respuestas[4] === 'Sí, muchas modificaciones') {
    puntajeTecnico += 2;
  } else {
    puntajeIntermedio += 1;
  }

  // Determinar nivel con mayor puntaje
  const maxPuntaje = Math.max(puntajeNuevo, puntajeIntermedio, puntajeTecnico);

  if (maxPuntaje === puntajeNuevo) {
    return USER_LEVELS.NUEVO;
  } else if (maxPuntaje === puntajeTecnico) {
    return USER_LEVELS.TECNICO;
  } else {
    return USER_LEVELS.INTERMEDIO;
  }
};

/**
 * Obtener nombre legible del nivel
 * @param {string} level - Nivel del usuario
 * @returns {string} - Nombre legible
 */
export const getNombreNivel = (level) => {
  switch (level) {
    case USER_LEVELS.NUEVO:
      return 'Nuevo Usuario';
    case USER_LEVELS.INTERMEDIO:
      return 'Usuario Intermedio';
    case USER_LEVELS.TECNICO:
      return 'Usuario Técnico';
    default:
      return 'Usuario';
  }
};
