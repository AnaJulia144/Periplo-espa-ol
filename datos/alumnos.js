// Alumnos y grupos. Por ahora es un archivo; más adelante vivirá en Firebase.
window.ALUMNOS = [
  {
    id: "david",
    nombre: "David",
    portal: "Portal de David",
    semanaActual: 19,
    codigo: null, // se define cuando construyamos su portal (entra con código + nombre)
    nota: "Modo experimental: con David se prueban actividades antes del curso nuevo.",
  },
];

window.GRUPOS = [
  { id: "curso-nuevo", nombre: "Curso nuevo", nota: "Para futuros alumnos. Se diseña desde cero." },
];

// Mecánicas de juego. "estado" dice en qué punto está cada una.
window.JUEGOS = [
  { id: "uno",        nombre: "UNO",                    estado: "En Gemini, por migrar", usa: "palabras" },
  { id: "serpientes", nombre: "Serpientes y escaleras", estado: "En Gemini, por migrar", usa: "preguntas" },
  { id: "flashcards", nombre: "Flashcards",             estado: "En Gemini, por migrar", usa: "palabras" },
  { id: "match",      nombre: "Match",                  estado: "En Gemini, por migrar", usa: "palabras" },
  { id: "completar",  nombre: "Completar oraciones",    estado: "En Gemini, por migrar", usa: "oraciones" },
];

window.IDEAS_JUEGOS = ["Oca", "Gato", "Conecta 4", "Ruleta", "Jeopardy", "Categorización"];
