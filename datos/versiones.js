// =====================================================================
//  VERSIONES DE LOS JUEGOS — el "stock" de Anita
// =====================================================================
//  Cada versión = un juego (motor) + su contenido.
//  Por ahora viven aquí; más adelante se guardarán en Firebase y se
//  crearán desde el panel.
//
//  UNO
//    grupos        de 2 a 5. Cada carta pertenece a un grupo y la ruleta
//                  elige qué grupo se juega. Los colores van por posición:
//                  1 añil · 2 terracota · 3 ocre · 4 olivo · 5 ciruela
//    conjugacion   (opcional) arma las cartas solas a partir de verbos:
//                    formas        una por grupo, en el mismo orden
//                    complementos  se elige uno al azar
//                    tiempos       expresión de tiempo, una al azar
//                    tiempoAlInicio  true = la expresión va al principio
//                  negativas = qué parte de las cartas lleva "no" (0.2 = 20 %)
//    cartas        (opcional, en vez de conjugacion) lista fija:
//                  { texto: "la mesa", grupo: "la" }
// =====================================================================

window.VERSIONES = [
  {
    id: "uno-s19-preterito",
    juego: "uno",
    semana: 20,
    titulo: "Pretérito indefinido",
    subtitulo: "Verbos regulares · La vida de una persona",
    grupos: [
      { id: "yo", nombre: "Yo" },
      { id: "tu", nombre: "Tú" },
      { id: "el", nombre: "Él / Ella / Ud." },
      { id: "nosotros", nombre: "Nosotros/as" },
      { id: "ellos", nombre: "Ellos / Ellas / Uds." },
    ],
    conjugacion: {
      negativas: 0.2,
      verbos: [
        { verbo: "mudarse", formas: ["me mudé", "te mudaste", "se mudó", "nos mudamos", "se mudaron"], complementos: ["a otra casa", "de ciudad"], tiempos: ["hace dos años", "en invierno", "durante el verano"] },
        { verbo: "graduarse", formas: ["me gradué", "te graduaste", "se graduó", "nos graduamos", "se graduaron"], complementos: ["de la preparatoria", "de la universidad"], tiempos: ["hace 3 años", "en 1998", "del 2015 al 2019", "en mayo"] },
        { verbo: "casarse", formas: ["me casé", "te casaste", "se casó", "nos casamos", "se casaron"], complementos: ["en la playa"], tiempos: ["hace dos años", "en 1998", "durante la primavera"] },
        { verbo: "estudiar", formas: ["estudié", "estudiaste", "estudió", "estudiamos", "estudiaron"], complementos: ["para el examen", "español"], tiempos: ["de lunes a viernes", "desde el martes hasta el jueves", "por la noche", "durante 5 horas"] },
        { verbo: "trabajar", formas: ["trabajé", "trabajaste", "trabajó", "trabajamos", "trabajaron"], complementos: ["hasta muy tarde", "en la oficina"], tiempos: ["de 8 a 5", "desde 2018 hasta 2020", "por 10 años", "del 5 al 10 de mayo"] },
        { verbo: "viajar", formas: ["viajé", "viajaste", "viajó", "viajamos", "viajaron"], complementos: ["a Europa", "por negocios"], tiempos: ["de enero a marzo", "por 3 semanas", "durante las vacaciones", "del 10 al 20 de julio"] },
        { verbo: "ganar", formas: ["gané", "ganaste", "ganó", "ganamos", "ganaron"], complementos: ["el partido", "el premio"], tiempos: ["hace una semana", "en 2022", "durante el torneo"] },
        { verbo: "celebrar", formas: ["celebré", "celebraste", "celebró", "celebramos", "celebraron"], complementos: ["el cumpleaños", "la fiesta"], tiempos: ["durante toda la noche", "de 9 a 12", "por horas"] },
        { verbo: "regresar", formas: ["regresé", "regresaste", "regresó", "regresamos", "regresaron"], complementos: ["a casa", "muy tarde"], tiempos: ["hace dos horas", "en la madrugada", "por la tarde"] },
        { verbo: "visitar", formas: ["visité", "visitaste", "visitó", "visitamos", "visitaron"], complementos: ["el museo", "a sus abuelos"], tiempos: ["durante el fin de semana", "de viernes a domingo", "por dos días"] },
        { verbo: "tomar / beber", formas: ["tomé / bebí", "tomaste / bebiste", "tomó / bebió", "tomamos / bebimos", "tomaron / bebieron"], complementos: ["un café", "mucha agua"], tiempos: ["en la mañana", "durante la comida", "por la tarde"] },
        { verbo: "aprender", formas: ["aprendí", "aprendiste", "aprendió", "aprendimos", "aprendieron"], complementos: ["a bailar", "algo nuevo"], tiempos: ["por 2 años", "desde 2010 hasta 2012", "durante la secundaria"] },
        { verbo: "comer", formas: ["comí", "comiste", "comió", "comimos", "comieron"], complementos: ["tacos", "pescado", "pollo con arroz"], tiempos: ["de 2 a 3", "durante el viaje", "hace dos días"] },
        { verbo: "recibir", formas: ["recibí", "recibiste", "recibió", "recibimos", "recibieron"], complementos: ["un regalo", "una carta"], tiempos: ["hace unos días", "en mi cumpleaños", "por la mañana"] },
        { verbo: "decidir", tiempoAlInicio: true, formas: ["decidí", "decidiste", "decidió", "decidimos", "decidieron"], complementos: ["viajar", "estudiar más"], tiempos: ["en ese momento", "hace mucho tiempo", "durante la reunión"] },
        { verbo: "vivir", formas: ["viví", "viviste", "vivió", "vivimos", "vivieron"], complementos: ["en España", "en el centro"], tiempos: ["desde 2000 hasta 2010", "de 1990 a 1995", "del 2015 al 2020", "por 5 años"] },
      ],
    },
  },
];
