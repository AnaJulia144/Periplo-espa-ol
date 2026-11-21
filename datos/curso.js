// =====================================================================
//  EL CURSO DE ANITA — fuente única del plan de estudios y vocabulario
// =====================================================================
//  Este archivo es la ÚNICA fuente: el panel y todos los juegos leen de aquí.
//  Si algo cambia (una palabra, un tema, una semana), se cambia SOLO aquí
//  y se actualiza en todo el sitio.
//
//  Cómo está escrito cada semana:
//    n            número de semana
//    mes          ciclo de 4 semanas (84 semanas = 21 meses). Las semanas de un mes
//                 no dependen entre sí: un alumno nuevo puede entrar en cualquiera.
//    nivel        A1 (1–20), A2 (21–36), B1 (37–48), B2 (49–60), C1 (61–72), C2 (73–84) — Cervantes
//                 No se enseña «vosotros» (curso de español de México).
//    estado       "listo" (ya revisada) o "borrador"
//    titulo       el tema principal
//    parte1/2     gramática y temas de vocabulario de cada parte
//    preguntas    lo que el alumno podrá responder al terminar
//    cultura      notas de cultura (México)
//    notas        recordatorios para Anita
//    actividades  ideas de actividades y juegos
//    explicacion  (opcional) la explicación de cada gramática con la fórmula de Anita,
//                 para la pestaña "Gramática" y las presentaciones:
//                 explicacion: { parte1: { funcion, ejemplos: [], afirmacion, negacion,
//                   preguntaCerrada, preguntaInterrogativa, interrogativos: [], revisada },
//                   parte2: {...} }.  Si una gramática no usa la fórmula (p. ej.
//                 preposiciones): { formula: false, pasos: [{ titulo, texto }] }
//    sugerencias  3 ideas de título para cada parte (pestaña "Plan").
//                 El subtítulo es el nombre de la gramática + el vocabulario.
//    titulos      (opcional) el título que Anita elige: { parte1: "…", parte2: "…" }
//    palabras     listas de vocabulario. Cada palabra puede llevar su
//                 traducción después de " = "  (ej. "boda = wedding")
// =====================================================================

window.CURSO = [
  // ==================================================================
  //  MES 1
  // ==================================================================
  {
    n: 1, mes: 1, nivel: "A1", estado: "listo",
    titulo: "Presentarse: el alfabeto, ser y pronombres",
    sugerencias: { parte1: ["Hola, soy…", "¿De dónde eres?", "Soy de Canadá"], parte2: ["Soy estudiante", "Ella es doctora", "Soy viajero, ¿y tú?"] },
    parte1: {
      gramatica: ["El alfabeto", "Verbo ser / ser de", "Pronombres personales"],
      vocabulario: ["Palabras generales de supervivencia", "Frases de saludo, pregunta, respuesta y despedida", "Países y nacionalidades"],
    },
    parte2: {
      gramatica: ["Ser + profesión y género (parte 1)"],
      vocabulario: ["Profesiones y roles", "Extranjero, viajero, estudiante", "Idiomas (por añadir)"],
    },
    preguntas: ["¿Cómo te llamas?", "¿Cuál es tu apellido?", "¿Cómo lo deletreas?", "¿De dónde eres?", "¿Eres mexicano?", "¿A qué te dedicas?"],
    cultura: ["Las abreviaturas van en minúscula (lic.)", "Licenciado", "Dos apellidos", "«Mande»", "Nombres y apellidos más comunes en México", "Tú y usted: en hoteles, oficinas y servicios se usa usted", "¿Qué o cuál?: ¿Cuál es tu nombre? (no «¿Qué es tu nombre?»)"],
    notas: [
      "Mencionar que normalmente la terminación -a es femenino y -o es masculino.",
      "The exception: when you see «gua», the u always keeps its sound.",
    ],
    actividades: [
      "UNO: unir los pronombres con el verbo (cartas de reto al azar; si el alumno lo hace bien, descarta 1 carta)",
      "Completar una conversación escrita",
      "Reading y juego de tarjetas: completar la información faltante",
      "Presentación de una persona y hacer preguntas",
      "Serpientes y escaleras", "¿Cómo se dice ___ en español?", "Completa la oración", "¿Cómo se deletrea…?",
      "Corrige el error (acentos, mayúsculas)",
    ],
    palabras: [
      { grupo: "Saludos y frases útiles", lista: [
        "Hola = Hello", "Buenos días = Good morning", "Buenas tardes = Good afternoon", "Buenas noches = Good evening / Good night", "Me llamo… / Mi nombre es… = My name is…", "Mi apellido es… = My last name is…",
        "Mucho gusto = Nice to meet you", "Estoy bien = I'm fine", "¿Cómo te llamas? / ¿Cuál es tu nombre? = What's your name?", "¿Cómo estás? = How are you?", "¿Cuál es tu apellido? = What's your last name?",
        "¿Cómo lo deletreas? = How do you spell it?", "¿Y tú? / ¿Y usted? = And you?", "¿Cómo se dice ___ en español? = How do you say ___ in Spanish?", "¿Qué significa ___? = What does ___ mean?",
        "¿Lo puede repetir, por favor? = Can you repeat that, please?", "Más despacio, por favor = Slower, please", "Un momento, por favor = One moment, please", "Perdón = Sorry / Excuse me", "Gracias = Thank you",
        "Mande = Pardon? / Yes? (polite, Mexico)", "Hasta luego = See you later", "Hasta mañana = See you tomorrow", "Adiós = Goodbye", "Nos vemos = See you", "Nos vemos luego = See you later", "Tengo que irme = I have to go",
      ]},
      { grupo: "Países", lista: [
        "México = Mexico", "Estados Unidos = United States", "Canadá = Canada", "España = Spain", "Francia = France", "Alemania = Germany", "Italia = Italy", "Reino Unido = United Kingdom",
        "Japón = Japan", "China = China", "Corea = Korea", "Brasil = Brazil", "Argentina = Argentina", "Colombia = Colombia", "Australia = Australia",
      ]},
      { grupo: "Nacionalidades", lista: [
        "mexicano = Mexican", "estadounidense = American", "canadiense = Canadian", "español = Spanish", "francés = French", "alemán = German", "italiano = Italian", "británico = British",
        "japonés = Japanese", "chino = Chinese", "coreano = Korean", "brasileño = Brazilian", "argentino = Argentinian", "colombiano = Colombian", "australiano = Australian",
      ]},
      { grupo: "Profesiones", lista: [
        "médico / médica = doctor", "músico / música = musician", "ingeniero / ingeniera = engineer", "arquitecto / arquitecta = architect", "abogado / abogada = lawyer",
        "mesero / mesera = waiter / waitress", "maestro / maestra = teacher", "supervisor / supervisora = supervisor", "doctor / doctora = doctor", "conductor / conductora = driver",
        "director / directora = director", "traductor / traductora = translator", "recepcionista = receptionist", "artista = artist", "guía = guide", "cantante = singer", "asistente = assistant",
        "gerente = manager", "actor / actriz = actor / actress", "jefe / jefa = boss", "cocinero / cocinera = cook", "mecánico / mecánica = mechanic",
        "veterinario / veterinaria = veterinarian", "cajero / cajera = cashier", "fotógrafo / fotógrafa = photographer", "vendedor / vendedora = salesperson", "dentista = dentist",
        "azafato / azafata = flight attendant", "piloto = pilot", "guardia = guard", "poeta / poetisa = poet", "taxista = taxi driver", "profesor / profesora = professor / teacher", "policía = police officer",
        "presidente / presidenta = president", "alcalde / alcaldesa = mayor", "enfermero / enfermera = nurse",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 2, mes: 1, nivel: "A1", estado: "listo",
    titulo: "Artículo definido singular y género",
    sugerencias: { parte1: ["El pasaporte y la maleta", "¿Es el boleto?", "El agua, el mapa, la llave"], parte2: ["La maleta roja", "Grande, pequeña, nueva", "Un mundo de colores"] },
    parte1: {
      gramatica: ["Artículo definido singular y género (parte 2)"],
      vocabulario: ["Pertenencias personales", "Explicar «el agua»"],
    },
    parte2: {
      gramatica: [],
      vocabulario: ["Adjetivos para objetos", "Colores", "Sílaba tónica", "Diptongos"],
    },
    preguntas: ["Indicar un objeto específico"],
    cultura: ["El INE (identificación)", "Pase de abordar"],
    notas: ["Explicar cómo se separa una palabra en sílabas."],
    actividades: [
      "Lotería o match", "Clasificar las palabras por género y número de sílabas", "¿Qué falta?",
      "Encierra, tacha, selecciona", "Una persona le da instrucciones a la otra", "Datos de cultura",
      "Serpientes y escaleras", "¿Cómo se dice ___ en español?", "Completa la oración", "¿Cómo se deletrea…?",
      "Corrige el error", "¿Cuántas sílabas tiene?", "Leer los sustantivos con el adjetivo y el artículo el / la",
    ],
    palabras: [
      { grupo: "Pertenencias personales", lista: [
        "licencia de conducir = driver's license", "botella de agua = water bottle", "identificación = ID", "llave = key", "celular = cell phone", "pasaporte = passport", "billete = bill (paper money)",
        "boleto / ticket = ticket", "moneda = coin", "peine = comb", "tarjeta de crédito = credit card", "maleta = suitcase", "mochila = backpack", "cartera = wallet", "teléfono = phone",
        "computadora = computer", "tarjeta de débito = debit card", "cargador = charger", "paraguas = umbrella", "reloj = watch / clock", "bolso = purse / handbag", "cepillo de dientes = toothbrush", "mapa = map",
        "libro = book", "monedero = coin purse", "termo = thermos", "cámara = camera", "sombrilla = umbrella / sunshade", "gorra = cap", "candado = padlock",
      ]},
      { grupo: "Adjetivos para objetos", lista: [
        "grande = big", "pequeño = small", "pesado = heavy", "ligero = light", "grueso = thick", "delgado = thin", "cuadrado = square", "rectangular = rectangular", "nuevo = new", "viejo = old",
        "frágil = fragile", "caro = expensive", "barato = cheap", "bonito = pretty", "feo = ugly",
      ]},
      { grupo: "Colores", lista: [
        "rojo = red", "azul = blue", "amarillo = yellow", "naranja = orange", "verde = green", "rosa = pink", "morado = purple", "gris = gray", "café = brown", "celeste = light blue", "blanco = white",
        "negro = black", "dorado = gold", "plateado = silver",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 3, mes: 1, nivel: "A1", estado: "listo",
    titulo: "Usos de tener: posesión y edad",
    sugerencias: { parte1: ["Tengo dos maletas", "¿Tienes pasaporte?", "Del uno al veinte"], parte2: ["Tengo treinta años", "¿Cuántos años tienes?", "Mi correo es…"] },
    parte1: {
      gramatica: ["Usos de tener (posesión)"],
      vocabulario: ["Números del 1 al 20", "Cosas que la gente normalmente posee", "Explicar «treinta y un personas»"],
    },
    parte2: {
      gramatica: ["Usos de tener (edad)"],
      vocabulario: ["Decenas y números del 21 al 200", "Vocabulario de correo electrónico", "También / tampoco"],
    },
    preguntas: ["¿Cuántos años tienes?", "¿Cuál es tu número de teléfono?", "¿Cuál es tu correo electrónico?", "¿Cuál es tu dirección?", "¿Dónde vives?", "¿Cuál es tu código postal?"],
    cultura: ["Números en México", "Carro vs. coche", "¿Me pasas tu celular?", "¿Cuánto cuesta el viaje en carro?", "Al contestar el teléfono: «¿Bueno?»"],
    notas: [],
    actividades: [
      "Intercambiar números de teléfono", "Match: pronombre – tengo – un – carro",
      "Serpientes y escaleras (decir el número de casilla)", "¿Cómo se dice ___ en español?", "Completa la oración",
      "¿Cómo se deletrea…?", "Corrige el error (ortográfico)", "¿Cuántas sílabas tiene?",
      "Lee el siguiente número de teléfono", "Escribe el número de teléfono que te diga la maestra",
      "Selecciona la escritura correcta del número", "¿Lleva acento? Cierto o falso",
      "Poner pertenencias en la mochila: ¿tienes un / una…?", "Escuchar un audio y anotar edades y números de teléfono",
    ],
    palabras: [
      { grupo: "Números", lista: [
        "cero = 0", "uno = 1", "dos = 2", "tres = 3", "cuatro = 4", "cinco = 5", "seis = 6", "siete = 7", "ocho = 8", "nueve = 9", "diez = 10", "once = 11", "doce = 12", "trece = 13", "catorce = 14", "quince = 15", "dieciséis = 16", "diecisiete = 17", "dieciocho = 18", "diecinueve = 19",
        "veinte = 20", "veintiuno = 21", "veintidós = 22", "veintitrés = 23", "veinticuatro = 24", "veinticinco = 25", "veintiséis = 26", "veintisiete = 27", "veintiocho = 28", "veintinueve = 29", "treinta = 30", "treinta y uno = 31", "treinta y dos = 32", "treinta y tres = 33", "treinta y cuatro = 34", "treinta y cinco = 35", "treinta y seis = 36", "treinta y siete = 37",
        "treinta y ocho = 38", "treinta y nueve = 39", "cuarenta = 40", "cincuenta = 50", "sesenta = 60", "setenta = 70", "ochenta = 80", "noventa = 90", "cien = 100", "ciento uno = 101", "ciento noventa y nueve = 199", "doscientos = 200",
      ]},
      { grupo: "Correo electrónico", lista: [
        "arroba = at sign (@)", "guion = hyphen (-)", "guion bajo = underscore (_)", "punto = dot (.)", "asterisco = asterisk (*)", "gato = hashtag / pound sign (#)", "diagonal = slash (/)", "paréntesis = parentheses ( )", "mayúscula = capital letter", "minúscula = lowercase letter",
      ]},
      { grupo: "Cosas que la gente tiene", lista: [
        "amigo = friend (male)", "amiga = friend (female)", "hermano = brother", "hermana = sister", "compañero de trabajo = coworker (male)", "compañera de trabajo = coworker (female)", "carro = car", "perro = dog",
        "mascota = pet", "bicicleta = bicycle", "bolso = purse / handbag", "identificación = ID", "llave = key", "pasaporte = passport", "libro = book", "billete = bill (paper money)", "boleto = ticket", "mapa = map",
        "moneda = coin", "monedero = coin purse", "cepillo = brush", "candado = padlock", "visa = visa", "tarjeta = card", "maleta = suitcase", "mochila = backpack", "cartera = wallet", "cámara = camera",
        "cargador = charger", "paraguas = umbrella",
      ]},
      { grupo: "Extra (no están en la lista de vocabulario)", lista: ["casa = house", "departamento = apartment", "motocicleta = motorcycle", "gato = cat"] },
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 4, mes: 1, nivel: "A1", estado: "listo",
    titulo: "Querer + infinitivo e ir a + infinitivo",
    sugerencias: { parte1: ["Quiero viajar", "¿Qué quieres hacer?", "Quiero un café"], parte2: ["Voy a viajar en julio", "¿Qué vas a hacer el lunes?", "El próximo fin de semana"] },
    parte1: {
      gramatica: ["Querer + infinitivo"],
      vocabulario: ["Verbos más usados por viajeros", "Complementos", "Explicar «ir a la / al»"],
    },
    parte2: {
      gramatica: ["Ir a + infinitivo", "Preposición en / el (fechas)"],
      vocabulario: ["Días de la semana", "Meses", "Estaciones", "Fechas: «primero de…»", "La fecha completa"],
    },
    preguntas: ["¿Cuándo…?", "Quiero, no quiero, ¿quieres…?", "Voy a, no voy a, ¿vas a…?"],
    cultura: ["La propina", "Uso de «ahorita» y «al rato»"],
    notas: [],
    actividades: [
      "Reservar una habitación", "Cancelar una habitación", "Decir en orden los días de la semana y las estaciones",
      "Serpientes y escaleras", "¿Cómo se dice ___ en español?", "Completa la oración", "Corrige el error",
      "¿Cómo se deletrea…?", "¿Cuántas sílabas tiene?", "Match: ronda de verbos, días y meses",
      "Reservar y cancelar", "Planes de amigos", "Jeopardy", "Conversación: la mala recepcionista",
    ],
    palabras: [
      { grupo: "Verbos del viajero", lista: [
        "hacer una reservación = make a reservation", "facturar la compra = get an invoice for the purchase", "cambiar los dólares = exchange the dollars", "cancelar la reservación = cancel the reservation",
        "tomar un taxi = take a taxi", "llegar al hotel = arrive at the hotel", "encontrar esta dirección = find this address", "abordar el avión = board the plane", "recoger el equipaje = pick up the luggage",
        "pedir la cuenta = ask for the check", "pagar con tarjeta / en efectivo = pay by card / in cash", "dejar propina = leave a tip", "comprar una tarjeta SIM = buy a SIM card",
        "registrar la entrada = check in", "pedir la contraseña del wifi = ask for the wifi password", "retirar dinero = withdraw money", "llamar a la recepción = call the front desk",
        "pedir un recibo = ask for a receipt", "salir con amigos = go out with friends", "ir a una fiesta = go to a party", "pasear al perro = walk the dog", "comer tacos = eat tacos", "visitar el museo = visit the museum",
        "caminar en el centro = walk downtown", "descansar un poco = rest a little", "ir al cine = go to the movies", "jugar videojuegos = play video games", "hacer ejercicio = exercise",
        "limpiar la casa = clean the house", "estudiar español = study Spanish",
      ]},
      { grupo: "Calendario", lista: [
        "día = day", "lunes = Monday", "martes = Tuesday", "miércoles = Wednesday", "jueves = Thursday", "viernes = Friday", "sábado = Saturday", "domingo = Sunday", "mes = month", "enero = January", "febrero = February",
        "marzo = March", "abril = April", "mayo = May", "junio = June", "julio = July", "agosto = August", "septiembre = September", "octubre = October", "noviembre = November", "diciembre = December",
        "estación = season", "primavera = spring", "verano = summer", "otoño = fall / autumn", "invierno = winter", "hoy = today", "mañana = tomorrow", "el fin de semana = the weekend", "el próximo año = next year",
      ]},
      { grupo: "Conjugación: querer", lista: ["yo quiero = I want", "tú quieres = you want", "él / ella / usted quiere = he / she wants · you want (formal)", "nosotros / nosotras queremos = we want", "ellos / ellas / ustedes quieren = they want · you all want"] },
      { grupo: "Conjugación: ir", lista: ["yo voy = I go", "tú vas = you go", "él / ella / usted va = he / she goes · you go (formal)", "nosotros / nosotras vamos = we go", "ellos / ellas / ustedes van = they go · you all go"] },
    ],
  },
  // ==================================================================
  //  MES 2
  // ==================================================================
  {
    n: 5, mes: 2, nivel: "A1", estado: "listo",
    titulo: "Artículo definido plural y concordancia",
    sugerencias: { parte1: ["Los papeles y las plumas", "Las cosas de la oficina", "Los lápices y las carpetas"], parte2: ["Las maletas son grandes", "Rojo, roja, rojos, rojas", "Todo combina"] },
    parte1: {
      gramatica: ["Artículo definido plural"],
      vocabulario: ["Objetos de oficina"],
    },
    parte2: {
      gramatica: ["Adjetivos: concordancia de género y número"],
      vocabulario: ["Conjunción «y»", "Uso de la coma"],
    },
    preguntas: ["Describe los objetos", "¿Cómo son…?", "¿Las maletas son rosas o rojas?", "¿De qué color es…?", "¿De qué tamaño es?"],
    cultura: ["Gudín", "Pluma / bolígrafo"],
    notas: ["Ojo con «paraguas»."],
    actividades: [
      "Match", "Convertir las cosas en plural", "Selecciona la tarjeta correcta", "Clasificación de terminaciones",
      "¿Qué falta?", "Encierra, tacha, selecciona", "Mostrar imágenes y poner cierto o falso", "Información cultural",
      "Serpientes y escaleras", "¿Cómo se dice ___ en español?", "Completa la oración", "¿Cómo se deletrea…?",
      "Corrige el error", "¿Cuántas sílabas tiene?",
    ],
    palabras: [
      { grupo: "Objetos de oficina", lista: [
        "escritorio = desk", "silla = chair", "teclado = keyboard", "mouse = mouse", "monitor = monitor", "impresora = printer", "escáner = scanner", "audífono = headphones", "micrófono = microphone",
        "calendario = calendar", "carpeta = folder", "documento = document", "papel = paper", "libreta = notebook", "agenda = planner", "pluma = pen", "lápiz = pencil", "sacapuntas = pencil sharpener",
        "borrador = eraser", "pizarrón = board / blackboard", "maletín = briefcase", "ordenador = computer (Spain)", "ratón = mouse (Spain)", "archivero = filing cabinet", "cuaderno = notebook", "bolígrafo = ballpoint pen", "resaltador = highlighter",
        "engrapadora = stapler", "marcatextos = highlighter (Mexico)", "tijeras = scissors", "pegamento = glue", "calculadora = calculator", "cinta adhesiva = tape", "grapadora = stapler (Spain)",
        "proyector = projector", "pizarra = whiteboard", "bote de basura = trash can",
      ]},
      { grupo: "Adjetivos", lista: [
        "importante = important", "necesario = necessary", "útil = useful", "cómodo = comfortable", "incómodo = uncomfortable", "moderno = modern", "antiguo = old / antique", "usado = used", "rápido = fast", "lento = slow",
        "inalámbrico = wireless", "alámbrico = wired", "ruidoso = noisy", "silencioso = quiet", "largo = long", "corto = short",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 6, mes: 2, nivel: "A1", estado: "listo",
    titulo: "Artículo indefinido + hay",
    sugerencias: { parte1: ["En la recepción", "En la cocina, en el baño", "La casa por dentro"], parte2: ["¿Qué hay en el cuarto?", "Hay una cama y un escritorio", "Hay un elevador"] },
    parte1: {
      gramatica: ["Preposición en + el / la"],
      vocabulario: ["Cuartos"],
    },
    parte2: {
      gramatica: ["Artículo indefinido (un, una, unos, unas) + hay"],
      vocabulario: ["Objetos y muebles", "«Un abanico, una cama y un escritorio»", "Extra: números ordinales (primer piso, tercer piso)"],
    },
    preguntas: ["¿Qué hay en la habitación?", "¿Qué hay en tu casa?"],
    cultura: ["Casas en México"],
    notas: [],
    actividades: [
      "Describir tu casa", "Match: palabra con traducción", "UNO con un, una, unos, unas", "Tarjetas",
      "100 mexicanos dijeron: ¿qué hay?", "Reading: hotel, casa", "Serpientes y escaleras",
      "¿Cómo se dice ___ en español?", "Completa la oración", "¿Cómo se deletrea…?", "Corrige el error",
      "¿Cuántas sílabas tiene?",
    ],
    palabras: [
      { grupo: "Cuartos y lugares (casa y hotel)", lista: [
        "recepción = reception / front desk", "habitación = room (hotel)", "entrada = entrance", "baño = bathroom", "alberca = swimming pool", "estacionamiento = parking lot", "lavandería = laundry room", "pasillo = hallway",
        "escaleras = stairs", "oficina = office", "sala de juntas = meeting room", "bodega = storage room", "casa = house", "cuarto = room", "sala = living room", "comedor = dining room", "cocina = kitchen", "patio = patio / yard",
        "sótano = basement", "elevador = elevator", "vestíbulo = lobby", "recámara = bedroom", "estudio = study", "ático = attic", "hotel = hotel", "terraza = terrace", "azotea = rooftop", "balcón = balcony",
        "jardín = garden", "cochera = garage",
      ]},
      { grupo: "Muebles y objetos", lista: [
        "sillón = armchair", "sofá = sofa", "planta = plant", "mesa = table", "librero = bookcase", "silla = chair", "lámpara = lamp", "banco = bench / stool", "refrigerador = refrigerator", "armario = wardrobe", "cama = bed",
        "escritorio = desk", "espejo = mirror", "inodoro = toilet", "bañera = bathtub", "aire acondicionado = air conditioning", "clóset = closet", "abanico (de techo) = (ceiling) fan", "piso = floor",
        "tocador = dresser / vanity", "cafetera = coffee maker", "secadora = dryer", "plancha = iron", "burro de planchar = ironing board", "computadora = computer", "estufa = stove", "microondas = microwave",
        "gabinete = cabinet", "alfombra = rug / carpet",
      ]},
      { grupo: "Extra: números ordinales", lista: [
        "primero (primer) = first", "segundo = second", "tercero (tercer) = third", "cuarto = fourth", "quinto = fifth",
        "sexto = sixth", "séptimo = seventh", "octavo = eighth", "noveno = ninth", "décimo = tenth",
        "planta baja = ground floor", "el primer piso = the first floor", "el tercer piso = the third floor",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 7, mes: 2, nivel: "A1", estado: "listo",
    titulo: "Estar y preposiciones de lugar",
    sugerencias: { parte1: ["¿Dónde está el baño?", "Estoy en el aeropuerto", "¿Estar o hay?"], parte2: ["Cerca del hotel", "Al lado del banco", "Por aquí, por allá"] },
    parte1: {
      gramatica: ["Estar (ubicación)"],
      vocabulario: ["Lugares", "Explicar estar vs. hay"],
    },
    parte2: {
      gramatica: ["Contracciones del / al y «de la»"],
      vocabulario: ["Preposiciones de lugar", "Por aquí, por allá, hasta allá"],
    },
    preguntas: ["¿En dónde está…?", "¿Dónde vives?"],
    cultura: ["Tiendas comunes en México", "Diminutivos: «está cerquita», «a la vuelta»"],
    notas: [],
    actividades: [
      "Google Maps", "Match: lugares", "Match: preposiciones",
      "Completa la oración leyendo el emoji (con la preposición correcta)", "Serpientes y escaleras",
      "¿Cómo se dice ___ en español?", "Completa la oración", "Corrige el error", "¿Cómo se deletrea…?",
      "¿Cuántas sílabas tiene?", "Cierto o falso: ver la imagen y responder", "Reading: encontrar el lugar",
    ],
    palabras: [
      { grupo: "Lugares de la ciudad", lista: [
        "cajero automático = ATM", "cine = movie theater", "museo = museum", "palacio = palace", "teatro = theater", "banco = bank", "tienda departamental = department store", "mercado = market",
        "farmacia = pharmacy", "centro comercial = shopping mall", "supermercado = supermarket", "puente = bridge", "parque = park", "río = river", "avenida = avenue", "calle = street",
        "parada de autobús / terminal de autobuses = bus stop / bus station", "estación de metro / tren = subway / train station", "agencia de viajes = travel agency", "iglesia = church",
        "gimnasio = gym", "estación de policía = police station", "escuela = school", "paquetería = courier / parcel service", "hotel = hotel", "aeropuerto = airport", "tienda = store", "centro = downtown",
        "cafetería = coffee shop", "bar = bar",
      ]},
      { grupo: "Preposiciones y ubicación", lista: [
        "arriba de = above", "abajo de = below", "encima de = on top of", "debajo de = under / underneath", "sobre = on / over", "entre = between", "adentro / dentro de = inside", "afuera / fuera de = outside",
        "delante de = in front of", "atrás / detrás de = behind", "enfrente de = across from / in front of", "al lado de = next to", "junto a = beside", "cerca de = near", "lejos de = far from",
        "a la derecha de = to the right of", "a la izquierda de = to the left of", "en el centro de = in the center of", "alrededor de = around", "pasando por = going past", "cruzando = crossing",
        "al fondo de = at the back of / at the end of", "en la esquina = on the corner", "en la siguiente cuadra = on the next block", "en la siguiente estación = at the next station", "aquí = here", "acá = here (over here)", "ahí = there",
        "allí = there", "allá = over there",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 8, mes: 2, nivel: "A1", estado: "listo",
    titulo: "Verbos regulares -AR, -ER, -IR y frecuencia",
    sugerencias: { parte1: ["Trabajo, como, vivo", "Hablo español", "Un día normal"], parte2: ["Siempre, a veces, nunca", "¿Con qué frecuencia?", "Los lunes trabajo"] },
    parte1: {
      gramatica: ["Verbos regulares -AR, -ER, -IR (presente)", "También: palabras de futuro y «para»"],
      vocabulario: ["Acciones comunes", "Sustantivos comunes"],
    },
    parte2: {
      gramatica: ["Adverbios de frecuencia"],
      vocabulario: ["Complementos de verbos", "Adverbios de tiempo y frecuencia"],
    },
    preguntas: ["¿Qué tan seguido…?"],
    cultura: [],
    notas: ["Los verbos y los complementos van en el mismo orden (usar → el celular)."],
    actividades: [
      "Detector de mentiras", "Match: verbo – significado", "UNO: pronombre con conjugación y complemento",
      "Reading: división de tareas", "Mini rutina", "Serpientes y escaleras",
    ],
    palabras: [
      { grupo: "Verbos regulares", lista: [
        "usar = to use", "comprar = to buy", "visitar = to visit", "desayunar = to have breakfast", "cenar = to have dinner", "caminar = to walk", "escuchar = to listen", "limpiar = to clean", "descansar = to rest", "terminar = to finish",
        "trabajar = to work", "viajar = to travel", "hablar = to speak / to talk", "pasear = to take a walk", "estudiar = to study", "ordenar = to tidy up", "preparar = to prepare", "cocinar = to cook", "regresar = to return / to come back", "ayudar = to help",
        "tomar = to take / to drink", "beber = to drink", "aprender = to learn", "correr = to run", "responder = to answer", "comer = to eat", "asistir = to attend", "compartir = to share", "subir = to go up / to upload", "discutir = to argue / to discuss",
      ]},
      { grupo: "Complementos (mismo orden que los verbos)", lista: [
        "el celular = the cell phone", "cosas nuevas = new things", "a la familia = the family", "en un restaurante = at a restaurant", "en casa = at home", "en el parque = in the park", "música = music",
        "la casa = the house", "—", "el trabajo = work / the job", "rápido = fast", "por trabajo = for work", "por teléfono con mis amigos = on the phone with my friends", "al perro = the dog",
        "en las noches = at night", "mi cuarto = my room", "el desayuno temprano = breakfast early", "sola = alone", "a casa temprano = home early", "a mis compañeros de trabajo = my coworkers",
        "una siesta en las tardes = a nap in the afternoon", "agua = water", "algo nuevo = something new", "en las mañanas = in the mornings", "los mensajes = the messages", "con mi familia = with my family",
        "a la escuela = school", "mis cosas = my things", "fotos en redes sociales = photos on social media", "con mis jefes = with my bosses",
      ]},
      { grupo: "Frecuencia y tiempo", lista: [
        "siempre = always", "casi siempre = almost always", "normalmente = normally", "a veces = sometimes", "de vez en cuando = from time to time", "casi nunca = hardly ever", "nunca = never",
        "todos los días = every day", "diario = daily", "generalmente = generally", "por lo general = usually", "seguido = often", "muy seguido = very often", "muchas veces = many times",
        "algunas veces = sometimes", "rara vez = rarely", "pocas veces = seldom", "ocasionalmente = occasionally", "solo cuando es necesario = only when necessary", "jamás = never ever",
        "en la mañana = in the morning", "por la tarde = in the afternoon", "en la noche = at night", "los lunes = on Mondays", "los fines de semana = on weekends", "cada semana = every week", "cada mes = every month",
        "cada año = every year", "una vez a la semana = once a week", "dos veces al mes = twice a month",
      ]},
    ],
  },
  // ==================================================================
  //  MES 3
  // ==================================================================
  {
    n: 9, mes: 3, nivel: "A1", estado: "listo",
    titulo: "Demostrativos y precios",
    sugerencias: { parte1: ["Este, ese y aquel", "¿Esta o esa?", "Recuerdos del mercado"], parte2: ["¿Cuánto cuesta?", "¿Cuánto es?", "¿Algo más? Nada más, gracias"] },
    parte1: {
      gramatica: ["Demostrativos (este, ese, aquel) y neutros: esto, eso, aquello («¿Cuánto cuesta esto?»)"],
      vocabulario: ["Este, ese, aquel / estos, esos, aquellos", "Artesanías, recuerdos y gastos del viajero"],
    },
    parte2: {
      gramatica: ["Verbo costar: cuesta vs. cuestan"],
      vocabulario: ["Números del 100 al 10 000", "Frase: «que le vaya bien»", "¿Cuánto es?", "Extra: «¿algo más?» / «nada más»"],
    },
    preguntas: ["¿Cuánto cuesta este celular?", "¿Cuánto es?"],
    cultura: ["Regatear", "El mercadito"],
    notas: [],
    actividades: [
      "Imágenes: ponerle precio a las cosas", "Match: demostrativos con objetos",
      "Reading: ¿qué es lo más vendido en México?", "Acomodar opciones del 1 al 10", "Conversación de compra",
      "Mi tiendita: yo vendo cosas", "Tarjeta de misiones",
    ],
    palabras: [
      { grupo: "Números grandes", lista: ["cien = 100", "doscientos = 200", "trescientos = 300", "cuatrocientos = 400", "quinientos = 500", "seiscientos = 600", "setecientos = 700", "ochocientos = 800", "novecientos = 900", "mil = 1000", "dos mil = 2000", "diez mil = 10 000", "cien mil = 100 000", "un millón = 1 000 000", "dos millones = 2 000 000"] },
      { grupo: "Dinero y pagos", lista: [
        "precio = price", "total = total", "cambio = change", "recibo = receipt", "billete = bill (paper money)", "descuento = discount", "gratis = free", "peso = peso", "tarjeta de débito = debit card",
        "tarjeta de crédito = credit card", "transferencia = bank transfer", "efectivo = cash", "dinero = money", "monedas = coins", "terminal = card terminal",
      ]},
      { grupo: "Recuerdos y compras", lista: [
        "chocolate = chocolate", "sombrero = hat", "imán = magnet", "llavero = keychain", "playera = T-shirt", "taza = mug / cup", "gorra = cap", "pulsera = bracelet", "botella = bottle", "bolsa = bag", "tienda = store",
        "mercado = market", "trompo = spinning top", "balero = cup-and-ball toy", "rebozo = rebozo (Mexican shawl)", "morral = shoulder bag", "muñeca = doll", "máscara = mask", "blusa = blouse", "vestido = dress", "cajero = cashier",
        "monedero = coin purse", "cartera = wallet", "collar = necklace", "aretes = earrings", "anillo = ring", "sudadera = sweatshirt / hoodie", "dulce = candy", "figura = figurine", "juguete = toy",
      ]},
      { grupo: "Extra: en la tienda", lista: [
        "¿Algo más? = Anything else?", "Nada más, gracias. = Nothing else, thanks.", "algo = something", "nada = nothing",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 10, mes: 3, nivel: "A1", estado: "listo",
    titulo: "Adjetivos posesivos y descripción física",
    sugerencias: { parte1: ["Mi familia", "Su esposa y sus hijos", "Nuestra familia"], parte2: ["¿Cómo es?", "Es alto y moreno", "Un poco alto, muy joven"] },
    parte1: {
      gramatica: ["Adjetivos posesivos singular y plural"],
      vocabulario: ["La familia"],
    },
    parte2: {
      gramatica: ["Ser (para describir)"],
      vocabulario: ["Adjetivos físicos", "Muy, un poco", "Ser vs. tener (para describir)"],
    },
    preguntas: ["¿Cómo es…?", "¿Quién es ella?", "¿Quién es él?"],
    cultura: ["Describir a la gente en México", "«Flaco»"],
    notas: [],
    actividades: [
      "Match: familia y adjetivos", "Serpientes y escaleras", "Enseñar una foto y que describan a la persona",
      "Cierto o falso", "Presentando a mi familia", "Presenta a un familiar", "Juego: ¿adivina quién?",
    ],
    palabras: [
      { grupo: "La familia", lista: [
        "padre = father", "papá = dad", "madre = mother", "mamá = mom", "padres = parents", "hijo = son", "hija = daughter", "hijos = children / sons", "hermano (mayor) = (older) brother", "hermana (menor) = (younger) sister",
        "abuelo = grandfather", "abuela = grandmother", "nieto = grandson", "nieta = granddaughter", "tío = uncle", "tía = aunt", "sobrino = nephew", "sobrina = niece", "primo = cousin (male)", "prima = cousin (female)", "esposo = husband", "esposa = wife",
        "novio = boyfriend", "novia = girlfriend", "suegro = father-in-law", "suegra = mother-in-law", "yerno = son-in-law", "nuera = daughter-in-law", "cuñado = brother-in-law", "cuñada = sister-in-law",
      ]},
      { grupo: "Descripción física", lista: [
        "alto = tall", "bajo = short", "delgado = thin", "gordo = fat", "joven = young", "viejo = old", "fuerte = strong", "débil = weak", "guapo = handsome / good-looking", "bonito = pretty", "feo = ugly", "atractivo = attractive",
        "musculoso = muscular", "robusto = stocky / sturdy", "pelón = bald (informal, Mexico)", "calvo = bald", "rubio = blond", "moreno = dark-haired / dark-skinned", "pelirrojo = red-haired", "castaño = brown-haired", "canoso = gray-haired", "bigote = mustache",
        "barba = beard", "pelo largo = long hair", "pelo corto = short hair", "ojos grandes = big eyes", "ojos pequeños = small eyes", "piel clara = light skin", "piel morena = brown skin", "piel oscura = dark skin",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 11, mes: 3, nivel: "A1", estado: "listo",
    titulo: "La hora y expresiones de tiempo",
    sugerencias: { parte1: ["La boda es el sábado", "Mañana empieza la reunión", "El evento termina temprano"], parte2: ["¿Qué hora es?", "A las ocho en punto", "Desde las nueve hasta las cinco"] },
    parte1: {
      gramatica: ["Verbos regulares en presente -AR, -ER, -IR", "El presente con sentido de futuro"],
      vocabulario: ["Acciones comunes", "Iniciar, terminar, abrir", "Eventos"],
    },
    parte2: {
      gramatica: ["Estructura de la hora", "Preposiciones de tiempo: a la(s)"],
      vocabulario: ["Expresiones de tiempo", "Momentos del día", "¿Cuánto dura?", "Desde… hasta"],
    },
    preguntas: ["¿Qué horas son?", "¿Cuánto dura…?", "¿A qué hora abre…?", "¿Qué día es hoy?", "¿A qué fecha estamos hoy?", "¿Qué fecha es hoy?", "¿Cuándo es…?"],
    cultura: ["El bautizo", "Los quince años", "Las horas en una fiesta", "«Ahorita» en México: puede ser ahora, en un rato… o más tarde"],
    notas: [],
    actividades: [
      "Ir al museo", "Match", "Palabra con traducción", "Serpientes y escaleras", "Ver la imagen y seleccionar la hora",
      "Reading: conversación para salir / el amigo impuntual", "Eventos en un hotel: el alumno acomoda el horario",
      "Eventos tradicionales", "Jeopardy",
    ],
    palabras: [
      { grupo: "Eventos", lista: [
        "curso = course", "junta = meeting", "reunión = meeting", "clase = class", "presentación = presentation", "taller = workshop",
        "capacitación = training", "entrevista de trabajo = job interview",
        "recorrido turístico / gira = tour / sightseeing tour", "viaje = trip", "cita = appointment", "fiesta = party",
        "fiesta de cumpleaños = birthday party", "boda = wedding", "cena = dinner", "inauguración = opening / inauguration",
        "graduación = graduation", "aniversario = anniversary", "concierto = concert", "exposición = exhibition", "festival = festival",
        "partido / juego de futbol = soccer game", "película = movie / film", "espectáculo = show / performance",
        "quinceaños = quinceañera / 15th birthday celebration", "bautizo = baptism", "posada = posada (Mexican Christmas party)", "centro comercial = shopping mall",
        "museo = museum", "restaurante = restaurant",
      ]},
      { grupo: "Expresiones de tiempo", lista: [
        "hoy = today", "mañana = tomorrow", "pasado mañana = the day after tomorrow", "por / en la mañana = in the morning", "al mediodía = at noon", "por / en la tarde = in the afternoon", "por / en la noche = at night",
        "a la medianoche = at midnight", "de la madrugada = in the early morning (a.m.)", "en punto = o'clock / sharp", "como = around (about)", "aproximadamente = approximately", "más o menos = more or less", "cerca de = close to (about)",
        "alrededor de = around", "casi = almost", "ya casi = almost there / nearly", "pasadas las = past (the hour)", "antes = before", "después = after", "al rato / más tarde = later", "ahora = now", "ahorita = right now / in a little while (Mexico)",
        "temprano = early", "pronto = soon", "este mes = this month", "hora = hour / time", "minutos = minutes", "segundo = second", "fecha = date",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 12, mes: 3, nivel: "A1", estado: "listo",
    titulo: "Verbos irregulares en presente",
    sugerencias: { parte1: ["Almuerzo a la una", "Vuelo a otra ciudad", "Mi día en el trabajo"], parte2: ["Puedo pagar con tarjeta", "Prefiero comer temprano", "Pienso viajar en mayo"] },
    parte1: {
      gramatica: ["Verbos irregulares (presente)", "También: palabras de futuro"],
      vocabulario: ["Acciones de la rutina cotidiana", "Acciones del día en el trabajo", "Mientras"],
    },
    parte2: {
      gramatica: ["Doble verbo"],
      vocabulario: [],
    },
    preguntas: [],
    cultura: ["Comidas"],
    notas: ["Los verbos y los complementos van en el mismo orden (entender → la gramática del español)."],
    actividades: [
      "Detector de mentiras", "Match: palabra con traducción", "Serpientes y escaleras", "Elegir número de frecuencia",
      "Rutina", "Acordar un plan", "Regla: ir al / a la", "Diapositiva", "Jeopardy",
    ],
    palabras: [
      { grupo: "Verbos irregulares", lista: [
        "entender = to understand", "perder = to lose", "merendar = to have an afternoon snack", "mentir = to lie", "encontrar = to find", "volar = to fly", "almorzar = to have lunch", "resolver = to solve", "contar = to tell / to count", "probar = to try / to taste",
        "jugar = to play", "pedir = to ask for / to order", "seguir = to follow / to continue", "servir = to serve", "repetir = to repeat", "elegir = to choose", "salir = to go out / to leave", "hacer = to do / to make", "traer = to bring", "traducir = to translate", "parecer = to seem",
        "conocer = to know (people, places) / to meet", "conducir = to drive", "producir = to produce", "venir = to come", "decir = to say / to tell", "ver = to see / to watch", "saber = to know (facts)", "dar = to give", "ir = to go", "poder = can / to be able to",
      ]},
      { grupo: "Complementos (mismo orden que los verbos)", lista: [
        "la gramática del español = Spanish grammar", "en los juegos = in games", "un café con pan = a coffee with sweet bread", "a mis amigos = to my friends", "la dirección = the address",
        "a otra ciudad por trabajo = to another city for work", "a la 1:00 p. m. = at 1:00 p.m.", "los problemas = the problems", "chistes = jokes", "platillos nuevos = new dishes", "videojuegos = video games",
        "comida a domicilio = food delivery", "las instrucciones = the instructions", "la comida = the food / lunch", "los ejercicios = the exercises", "el mismo restaurante = the same restaurant",
        "los viernes = on Fridays", "ejercicio = exercise", "lonche al trabajo = a packed lunch to work", "documentos = documents", "difícil = difficult", "gente nueva = new people", "despacio = slowly",
        "artículos = items / products", "temprano a las reuniones = early to meetings", "la verdad = the truth", "películas = movies", "las respuestas de los ejercicios = the answers to the exercises",
        "clases = classes", "al gimnasio = to the gym", "pagar con tarjeta = to pay by card",
      ]},
    ],
  },
  // ==================================================================
  //  MES 4
  // ==================================================================
  {
    n: 13, mes: 4, nivel: "A1", estado: "listo",
    titulo: "Adjetivos de personalidad y ser vs. estar",
    sugerencias: { parte1: ["¿Cómo eres?", "Paciente o impaciente", "Amable, pero desorganizado"], parte2: ["¿Ser o estar?", "¿Cómo estás hoy?", "Soy tranquilo, pero estoy nervioso"] },
    parte1: {
      gramatica: ["Prefijos en adjetivos (in-, im-, des-)"],
      vocabulario: ["Adjetivos de personalidad", "Conjunción «pero»"],
    },
    parte2: {
      gramatica: ["Ser vs. estar"],
      vocabulario: ["Adjetivos de emoción y estado", "Porque", "Cuando", "Expresiones de reacción"],
    },
    preguntas: ["¿Quién…?", "¿Por qué…?", "¿Cómo es María?"],
    cultura: [],
    notas: [],
    actividades: [
      "Match: adjetivos de personalidad y emociones", "Serpientes y escaleras",
      "Una persona se describe y describe a su familia", "Entrevista de trabajo", "Describe a tu familia",
      "Describe a un amigo",
    ],
    palabras: [
      { grupo: "Personalidad (ser)", lista: [
        "amable = kind", "simpático = nice / friendly", "divertido = fun", "aburrido = boring", "serio = serious", "alegre = cheerful", "tranquilo = calm", "creativo = creative", "tímido = shy",
        "extrovertido = outgoing", "introvertido = introverted", "trabajador = hardworking", "flojo = lazy", "responsable = responsible", "irresponsable = irresponsible", "puntual = punctual", "impuntual = always late",
        "paciente = patient", "impaciente = impatient", "generoso = generous", "egoísta = selfish", "inteligente = intelligent", "honesto = honest", "deshonesto = dishonest", "organizado = organized",
        "desorganizado = disorganized", "curioso = curious", "confiable = reliable",
      ]},
      { grupo: "Emociones y estados (estar)", lista: [
        "feliz = happy", "triste = sad", "nervioso / nerviosa = nervous", "enojado / enojada = angry", "molesto / molesta = annoyed / upset", "preocupado / preocupada = worried",
        "emocionado / emocionada = excited", "cansado / cansada = tired", "estresado / estresada = stressed", "relajado / relajada = relaxed",
        "sorprendido / sorprendida = surprised", "asustado / asustada = scared", "confundido / confundida = confused", "decepcionado / decepcionada = disappointed",
        "desesperado / desesperada = desperate / exasperated", "avergonzado / avergonzada = embarrassed", "motivado / motivada = motivated", "desmotivado / desmotivada = unmotivated",
        "agotado / agotada = exhausted", "enfermo / enferma = sick", "frustrado / frustrada = frustrated", "seguro / segura = confident / sure", "enamorado / enamorada = in love",
        "tranquilo / tranquila = calm", "aburrido / aburrida = bored", "inspirado / inspirada = inspired", "ansioso / ansiosa = anxious",
        "inseguro / insegura = insecure",
      ]},
      { grupo: "Reacciones", lista: [
        "Ah, sí. (comprensión) = Oh, yes.", "Entiendo. (comprensión / empatía) = I understand.", "Ya veo. (comprensión) = I see.",
        "¿En serio? (sorpresa / interés) = Seriously?", "¿De verdad? (sorpresa / interés) = Really?", "Qué bueno. (reacción positiva) = That's great.",
        "Qué mal. (reacción negativa) = That's too bad.", "Qué lástima. (empatía / decepción) = What a pity.", "Qué pena. (empatía) = What a shame.",
        "Qué suerte. (buena fortuna) = How lucky.", "Me da gusto. (alegría por otra persona) = I'm happy for you.", "Lo entiendo. (empatía) = I understand (it).",
        "Claro. (comprensión / aceptación) = Sure.", "Por supuesto. (aceptación / disposición) = Of course.", "Ánimo. (apoyo) = Hang in there.",
        "Yo también = Me too", "Yo tampoco = Me neither",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 14, mes: 4, nivel: "A1", estado: "listo",
    titulo: "Tener + sensaciones y deberías + infinitivo",
    sugerencias: { parte1: ["Tengo hambre", "¿Tienes frío?", "Tengo sueño"], parte2: ["Deberías descansar", "Un consejo", "¿Qué debería hacer?"] },
    parte1: {
      gramatica: ["Tener + emociones y sensaciones (tener hambre, sed, frío…)"],
      vocabulario: ["Emociones y cosas no contables", "Marcadores de reacción («¡qué bien!»)", "Mucho, mucha"],
    },
    parte2: {
      gramatica: ["Deberías + infinitivo"],
      vocabulario: ["Consejos"],
    },
    preguntas: [],
    cultura: ["Ir al doctor en México", "Expresiones mexicanas informales"],
    notas: ["Los sustantivos y los consejos van en el mismo orden (hambre → comprar comida)."],
    actividades: [
      "Match", "Serpientes y escaleras", "Reading: conversación normal (trabajo, amigos)", "El amigo consejero",
    ],
    palabras: [
      { grupo: "Tener…", lista: [
        "hambre = hunger (to be hungry)", "sed = thirst (to be thirsty)", "sueño = sleepiness (to be sleepy)", "frío = cold (to be cold)", "calor = heat (to be hot)", "energía = energy", "dolor de cabeza = headache", "dolor de espalda = backache",
        "dolor de estómago = stomachache", "fiebre = fever", "miedo = fear (to be afraid)", "paciencia = patience", "confianza = confidence / trust", "esperanza = hope", "estrés = stress", "ansiedad = anxiety", "interés = interest",
        "curiosidad = curiosity", "prisa = hurry (to be in a hurry)", "tiempo = time", "dinero = money", "experiencia = experience", "trabajo = work / a job", "información = information", "permiso = permission", "suerte = luck (to be lucky)",
        "razón = reason (to be right)", "tiempo libre = free time", "cuidado = care (to be careful)", "dudas = doubts / questions",
      ]},
      { grupo: "Consejos: deberías…", lista: [
        "comprar comida = buy food", "tomar agua = drink water", "dormir temprano = go to bed early", "usar un suéter = wear a sweater", "prender el abanico = turn on the fan", "hacer ejercicio = exercise",
        "descansar un rato = rest for a while", "tomar medicina = take medicine", "comer ligero = eat light", "ir al doctor = go to the doctor", "hablar con un amigo = talk to a friend",
        "esperar un poco = wait a little", "participar en las reuniones = participate in meetings", "continuar el proyecto = continue the project", "respirar lentamente = breathe slowly",
        "salir un momento = step out for a moment", "investigar el tema = research the topic", "preguntar al profesor = ask the teacher", "caminar rápido = walk fast", "buscar un pasatiempo = find a hobby",
        "ahorrar el dinero = save money", "ayudar a otras personas = help other people", "organizar tu tiempo = organize your time", "compartir la información = share the information",
        "entrar a la oficina = go into the office", "comprar un boleto = buy a ticket", "explicar tu opinión = explain your opinion", "visitar a un amigo = visit a friend", "manejar despacio = drive slowly",
        "revisar las dudas con el profesor = go over your questions with the teacher",
      ]},
      { grupo: "Reacciones mexicanas", lista: [
        "¡Ah! (sorpresa / comprensión) = Oh!", "¡Ay! (preocupación / empatía) = Oh no!", "¡Uy! (sorpresa / preocupación) = Yikes!",
        "¡Órale! (sorpresa / impresión) = Whoa!", "¡Qué padre! (reacción positiva) = How cool!", "¡Qué buena onda! (reacción positiva) = That's so nice!",
        "¡No manches! (sorpresa / incredulidad) = No way!", "¡Híjole! (sorpresa / preocupación) = Oh, man!", "¡Wow! (sorpresa / admiración) = Wow!",
        "¡Qué bueno! (alegría) = Great!", "¡Qué mal! (empatía) = Too bad!", "¡Qué suerte! (buena fortuna) = Lucky you!", "¡Pobrecito / pobrecita! (compasión) = Poor thing!",
        "¡Ánimo! (apoyo) = Cheer up!",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 15, mes: 4, nivel: "A1", estado: "listo",
    titulo: "Verbos reflexivos y la rutina",
    sugerencias: { parte1: ["Me levanto temprano", "Mi rutina", "Antes de desayunar, me baño"], parte2: ["Lavar o lavarse", "Me llamo… / Llamo a…", "Duermo o me duermo"] },
    parte1: {
      gramatica: ["Verbos reflexivos", "Antes de / después de + infinitivo"],
      vocabulario: ["Verbos de rutina"],
    },
    parte2: {
      gramatica: [],
      vocabulario: ["Verbos reflexivos vs. no reflexivos (cambio de significado)"],
    },
    preguntas: ["Habla de tu rutina diaria"],
    cultura: [],
    notas: ["Clasificar los verbos por tipo de irregularidad: e → ie, e → i, o → ue, yo irregular (-go)."],
    actividades: [],
    palabras: [
      { grupo: "Verbos de rutina", lista: [
        "levantarse = to get up", "despertarse = to wake up", "bañarse / ducharse = to take a shower / to bathe", "lavarse las manos = to wash your hands", "peinarse = to comb your hair",
        "maquillarse = to put on makeup", "afeitarse = to shave", "cepillarse = to brush (your teeth / hair)", "vestirse = to get dressed", "cambiarse = to get changed", "prepararse = to get ready", "arreglarse = to get ready / to dress up",
        "relajarse = to relax", "ponerse la ropa = to put on your clothes", "acostarse = to go to bed", "encontrarse = to meet up / to feel", "irse = to leave / to go away", "llamarse = to be called / to be named",
        "perderse = to get lost", "sentarse = to sit down", "dormirse = to fall asleep", "sentirse = to feel (emotionally / physically)",
      ]},
      { grupo: "Reflexivo vs. no reflexivo", lista: [
        "encontrar = to find", "encontrarse = to find oneself / to be located / to feel", "ir = to go",
        "irse = to leave / to go away", "llamar = to call", "llamarse = to be called / to be named",
        "perder = to lose", "perderse = to get lost", "sentar = to seat / to sit someone down",
        "sentarse = to sit down", "volver = to return / to come back", "volverse = to become / to turn into",
        "reunir = to gather / to bring together", "reunirse = to meet / to get together", "dormir = to sleep",
        "dormirse = to fall asleep", "sentir = to feel (something)", "sentirse = to feel (emotionally / physically)",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 16, mes: 4, nivel: "A1", estado: "listo",
    titulo: "Tener que / deber y pronombres de objeto directo",
    sugerencias: { parte1: ["Tengo que enviar el reporte", "¿Qué tienes que hacer hoy?", "Debo llegar temprano"], parte2: ["¿El reporte? Lo tengo", "Lo, la, los, las", "Te llamo mañana"] },
    parte1: {
      gramatica: ["Tener que / deber + infinitivo"],
      vocabulario: ["Verbos administrativos y de oficina", "«Entonces tengo que…»"],
    },
    parte2: {
      gramatica: ["Pronombres de objeto directo: me, te, lo, la, nos, los, las"],
      vocabulario: ["Sustantivos de contexto profesional que se pueden sustituir"],
    },
    preguntas: ["¿Qué tienes que hacer hoy?"],
    cultura: [],
    notas: [],
    actividades: ["Match", "UNO", "Completar oraciones", "Completar lecturas", "Serpientes y escaleras"],
    palabras: [
      { grupo: "Tareas de oficina", lista: [
        "enviar el correo = send the email", "contestar el teléfono = answer the phone", "guardar la carpeta en un archivo = save the folder in a file",
        "ir a ver a un cliente = go see a client", "atender al proveedor = attend to the supplier", "programar una reunión = schedule a meeting",
        "confirmar una cita = confirm an appointment", "cancelar una reunión = cancel a meeting",
        "preparar un informe = prepare a report", "revisar un documento = review a document", "firmar el contrato = sign the contract",
        "archivar los documentos = file the documents", "imprimir un reporte = print a report", "escanear una factura = scan an invoice",
        "sacar copias = make copies", "llenar un formulario = fill out a form", "actualizar la información = update the information",
        "registrar los datos = record the data", "organizar los archivos = organize the files", "elaborar una presentación = put together a presentation",
        "hacer una reservación = make a reservation", "comprar material de oficina = buy office supplies",
        "solicitar una cotización = request a quote", "pagar una factura = pay an invoice", "registrar un pago = record a payment",
        "dar seguimiento a una solicitud = follow up on a request", "resolver un problema = solve a problem",
        "entregar un paquete = deliver a package", "recibir a un visitante = receive a visitor",
        "adjuntar un archivo al correo = attach a file to the email",
      ]},
      { grupo: "Extra", lista: ["hacer una llamada = make a call", "hablar con el cliente = talk to the client"] },
    ],
  },
  // ==================================================================
  //  MES 5
  // ==================================================================
  {
    n: 17, mes: 5, nivel: "A1", estado: "listo",
    titulo: "Sustantivos contables y no contables",
    sugerencias: { parte1: ["Dos tacos, por favor", "Un kilo de tomates", "¿Cuántas tortillas?"], parte2: ["Un poco de agua", "Mucho café, poca azúcar", "¿Cuánta leche?"] },
    parte1: {
      gramatica: ["Sustantivos contables"],
      vocabulario: ["Comida contable", "Unidades y cantidades"],
    },
    parte2: {
      gramatica: ["Sustantivos no contables"],
      vocabulario: ["Comida no contable", "Muy vs. mucho"],
    },
    preguntas: ["¿Qué es lo que normalmente desayunas?", "¿Cuántos / cuántas…?"],
    cultura: ["Comidas mexicanas", "Diminutivos en la comida: un cafecito, tantito, una aguita"],
    notas: ["«Lechuga» aparece en las dos listas: decidir en cuál se queda."],
    actividades: [],
    palabras: [
      { grupo: "Comida contable", lista: [
        "huevo = egg", "tortilla = tortilla", "tostada = tostada", "lechuga = lettuce", "champiñón = mushroom", "elote = corn on the cob", "tomate = tomato", "papa = potato", "zanahoria = carrot", "cebolla = onion",
        "pepino = cucumber", "chile = chili pepper", "aguacate = avocado", "paleta = popsicle / lollipop", "dulce = candy", "papas fritas = French fries / chips", "nieve = sorbet", "galleta = cookie", "pastel = cake", "dona = donut",
        "helado = ice cream", "chocolate = chocolate", "naranja = orange", "manzana = apple", "plátano = banana", "fresa = strawberry", "mango = mango", "limón = lime", "uvas = grapes", "piña = pineapple",
      ]},
      { grupo: "Comida no contable", lista: [
        "café = coffee", "leche = milk", "jugo (de manzana) = (apple) juice", "cereal = cereal", "pan = bread", "mantequilla = butter", "sopa = soup", "arroz = rice", "pasta = pasta", "carne = meat",
        "pollo = chicken", "pescado = fish", "frijoles = beans", "lechuga = lettuce", "azúcar = sugar", "maíz = corn", "ensalada = salad", "salsa = salsa / sauce", "catsup = ketchup", "sal = salt", "crema = cream",
        "miel = honey", "gelatina = gelatin / Jell-O", "té = tea", "refresco = soda", "limonada = lemonade", "agua de horchata = horchata (rice drink)", "agua de jamaica = hibiscus water", "caldo = broth", "licuado = smoothie / milkshake",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 18, mes: 5, nivel: "A1", estado: "borrador",
    titulo: "Gustar y encantar",
    sugerencias: { parte1: ["Me gusta viajar", "¿Qué te gusta hacer?", "A mí también"], parte2: ["Viajar es divertido", "Leer es relajante", "Cocinar es fácil"] },
    parte1: { gramatica: ["Gustar y encantar: me gusta / me gustan con me, te, le, nos, les (a mí, a ti, a Juan…)"], vocabulario: ["Pasatiempos y actividades de ocio", "Música, cine y espectáculos", "A mí también / a mí tampoco"] },
    parte2: { gramatica: ["Infinitivo + ser + adjetivo (viajar es divertido)"], vocabulario: ["Adjetivos para opinar (divertido, aburrido, relajante, caro…)"] },
    preguntas: ["¿Qué te gusta hacer en tu tiempo libre?", "¿Qué prefieres?"], cultura: [],
    notas: ["Semana nueva (2026-11-16): completa el A1. Viene de las antiguas semanas 30 (gustar) y 29 (infinitivo + ser + adjetivo).", "Pendiente: decidir dónde va «me gustaría» (esta semana ya tiene sus 2 gramáticas)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 19, mes: 5, nivel: "A1", estado: "listo",
    titulo: "Presente progresivo",
    sugerencias: { parte1: ["¿Qué estás haciendo?", "Estoy limpiando la casa", "Ahora mismo"], parte2: ["Me estoy bañando", "Estoy vistiéndome", "Ya me estoy preparando"] },
    parte1: {
      gramatica: ["Presente progresivo (estar + gerundio)"],
      vocabulario: ["Deberes del hogar"],
    },
    parte2: {
      gramatica: ["Presente progresivo con verbos reflexivos"],
      vocabulario: [],
    },
    preguntas: ["¿Qué estás haciendo?", "¿Con quién…?"],
    cultura: ["Ir al doctor en México", "Expresiones mexicanas informales"],
    notas: ["Todavía no tiene lista de palabras."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 20, mes: 5, nivel: "A1", estado: "listo",
    titulo: "Pretérito indefinido: verbos regulares",
    sugerencias: { parte1: ["Nací en…", "Me mudé a México", "Mi historia"], parte2: ["Ayer trabajé mucho", "El año pasado viajé", "Hace dos años"] },
    tema: "La vida de una persona",
    parte1: {
      gramatica: ["Pretérito indefinido (pasado simple)", "Conjugación de verbos regulares -AR, -ER, -IR"],
      vocabulario: ["Biografías, hitos históricos y eventos clave de la línea de vida (nacer, mudarse, graduarse, casarse)"],
    },
    parte2: {
      gramatica: ["Marcadores de tiempo pasado (ayer, anoche, la semana pasada, el año pasado, en + año)"],
      vocabulario: ["Expresiones para reaccionar ante historias del pasado", "de… a…, desde… hasta, del… al…, en, durante, por, hace"],
    },
    preguntas: ["¿Qué día…?", "¿En qué año / mes…?", "¿Cuándo…?"],
    cultura: [],
    notas: [],
    actividades: ["Flashcards", "Completar un cuadro", "UNO"],
    palabras: [
      { grupo: "Verbos de la línea de vida", lista: [
        "nacer = to be born", "mudarse = to move (to a new home)", "graduarse = to graduate", "casarse = to get married", "estudiar = to study", "trabajar = to work", "viajar = to travel", "ganar = to win / to earn", "celebrar = to celebrate", "regresar = to return / to come back",
        "visitar = to visit", "tomar / beber = to drink", "aprender = to learn", "comer = to eat", "recibir = to receive", "decidir = to decide", "vivir = to live",
      ]},
      { grupo: "Marcadores de pasado", lista: [
        "ayer = yesterday", "anteayer = the day before yesterday", "anoche = last night", "esta mañana = this morning", "ayer por la tarde = yesterday afternoon", "en la noche = at night", "la semana pasada = last week",
        "la semana antepasada = the week before last", "el fin de semana pasado = last weekend", "el mes pasado = last month", "el año pasado = last year", "hace dos días = two days ago",
        "en 1998 = in 1998", "a los 18 años = at 18 (years old)",
      ]},
    ],
  },
  // ==================================================================
  //  MES 6
  // ==================================================================
  {
    n: 21, mes: 6, nivel: "A2", estado: "borrador",
    titulo: "Pasado irregular: ser, ir, hacer, tener, estar",
    sugerencias: { parte1: ["Fui a la playa", "¿Qué hiciste el fin de semana?", "Tuve un problema"], parte2: ["Al principio… y finalmente", "Entonces, de repente…", "Mi peor viaje"] },
    parte1: { gramatica: ["Pretérito Indefinido de verbos completamente irregulares de alta frecuencia", "(Ser, Ir, Hacer, Tener, Estar)."], vocabulario: ["Anécdotas de viajes, accidentes cotidianos y problemas del pasado", "(perder las llaves, romper algo, llegar tarde)."] },
    parte2: { gramatica: ["Conectores de narración en pasado (al principio, entonces, de repente, después, finalmente…)"], vocabulario: ["Aeropuerto y migración (migración, aduana, pase de abordar, equipaje documentado, retraso)"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 22, mes: 6, nivel: "A2", estado: "borrador",
    titulo: "Pretérito perfecto: he viajado",
    sugerencias: { parte1: ["¿Alguna vez has…?", "Hoy he trabajado mucho", "Ya / todavía no"], parte2: ["He visto, he hecho, he escrito", "Mis logros", "He vuelto"] },
    parte1: { gramatica: ["haber mas participio regular", "Pretérito Perfecto Compuesto:"], vocabulario: ["Marcadores temporales de experiencias sin tiempo específico o recientes", "(hoy, este año, esta semana, alguna vez, nunca, ya, todavía no)"] },
    parte2: { gramatica: ["Hitos profesionales y logros personales", "participios irregulares de alta frecuencia"], vocabulario: ["(ganar un premio, cambiar de carrera, viajar al extranjero, aprender una habilidad)"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 23, mes: 6, nivel: "A2", estado: "borrador",
    titulo: "Pretérito imperfecto y el relativo «que»",
    sugerencias: { parte1: ["Cuando era niño…", "Antes vivía en…", "Era, iba, veía"], parte2: ["El hotel que reservé", "La casa que tenía", "Había una vez"] },
    parte1: { gramatica: ["y sus únicos tres verbos irregulares (Ser → era, Ir → iba, Ver → veía).", "Conjugación regular para describir el pasado (-aba / -ía: cantaba, comía)"], vocabulario: ["Pretérito Imperfecto"] },
    parte2: { gramatica: ["Pronombre relativo «que» (el hotel que reservé, la casa que tenía)"], vocabulario: ["Había", "Marcadores temporales de hábito en el pasado", "(antes, de niño/a, en aquella época, todos los días, a menudo)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 24, mes: 6, nivel: "A2", estado: "borrador",
    titulo: "Verbos con preposición: cuento contigo",
    sugerencias: { parte1: ["Cuento contigo", "Estoy de acuerdo contigo", "Confío en ti"], parte2: ["Con mi equipo", "Para el cliente", "A, de, en, con, por, para"] },
    parte1: { gramatica: ["verbos con preposicion y pronombre de objeto preposicional", "Los Pronombres de Objeto Preposicional (O tónicos)"], vocabulario: ["Networking, dinámicas de trabajo en equipo y relaciones interpersonales", "depender de, confiar en, contar con, colaborar con, estar de acuerdo con, hablar de"] },
    parte2: { gramatica: ["preposiciones (a, de, en, con, por, para)."], vocabulario: ["el colega, el jefe, el equipo, el socio, el cliente", "En la oficina: la junta, la videollamada, la agenda, la factura, la tarjeta de presentación"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 7
  // ==================================================================
  {
    n: 25, mes: 7, nivel: "A2", estado: "borrador",
    titulo: "Más verbos irregulares en pasado",
    sugerencias: { parte1: ["No pude dormir", "¿Qué te dijo?", "Traje mi pasaporte"], parte2: ["Pedí la cuenta", "Dormí muy bien", "¿Qué pidió usted?"] },
    parte1: { gramatica: ["Más irregulares del indefinido con raíz nueva (poder → pude, poner → puse, decir → dije, traer → traje, venir → vine, querer → quise, saber → supe)"], vocabulario: ["Grandes logros y metas cumplidas en el pasado (terminar la carrera, comprar una casa, ganar un premio, resolver un problema)"] },
    parte2: { gramatica: ["Cambios de vocal en la 3.ª persona (pedir → pidió, dormir → durmió, sentir → sintió) e i → y (leer → leyó, oír → oyó)"], vocabulario: ["Acciones de consumo y compras pasadas (el carro, las llaves, la cena, los boletos)"] },
    preguntas: [], cultura: [], notas: ["Antes esta semana era «lo / la con el pasado» en sus dos partes. Es la misma regla de la semana 16 (el pronombre va antes del verbo), así que se practica aquí con ejemplos: «¿Lo trajiste? Sí, lo traje»."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 26, mes: 7, nivel: "A2", estado: "borrador",
    titulo: "El participio como adjetivo: está cerrado",
    sugerencias: { parte1: ["La puerta está abierta", "Está roto", "¿Está cerrado?"], parte2: ["Estoy cansado", "Casado, divorciado, aburrido", "Todo está ordenado"] },
    parte1: { gramatica: ["Sustantivos de objetos del hogar y oficina propensos a cambiar de estado:", "El Participio como Adjetivo Calificativo"], vocabulario: ["(la carta, el vaso, los platos, la comida, los cables, la luz)."] },
    parte2: { gramatica: ["Adjetivos de estado físico, civil y emocional derivados de participios", "Sustantivos de objetos del hogar y oficina propensos a cambiar de estado:"], vocabulario: ["(casado, divorciado, aburrido, cansado, roto, hecho, ordenado, limpio, sucio)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 27, mes: 7, nivel: "A2", estado: "borrador",
    titulo: "Pretérito indefinido vs. perfecto",
    sugerencias: { parte1: ["Hoy he ido, ayer fui", "Este año he… / El año pasado…", "¿Ya o ayer?"], parte2: ["¡Fue genial!", "¿Qué tal estuvo?", "Lo he visto"] },
    parte1: { gramatica: ["preterito indefinido vs preterito perfecto", "me he levantado"], vocabulario: ["Actividades culturales, eventos sociales y entretenimiento"] },
    parte2: { gramatica: ["posición invariable de los pronombres con tiempos compuestos"], vocabulario: ["Expresiones para valorar experiencias o eventos", "fue un desastre, fue genial, estuvo increible"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 28, mes: 7, nivel: "A2", estado: "borrador",
    titulo: "Comparativos y superlativos",
    sugerencias: { parte1: ["Más grande que…", "Tan bonita como…", "Cuesta más de 500 pesos"], parte2: ["La ciudad más bonita", "El mejor restaurante", "¡Está riquísimo!"] },
    parte1: { gramatica: ["Comparativos: más / menos… que, tan… como, tanto… como, más de + número, mejor / peor / mayor / menor"], vocabulario: ["Adjetivos para describir ciudades y lugares"] },
    parte2: { gramatica: ["Superlativos: el más… de, y -ísimo (riquísimo, carísimo, cerquísima)"], vocabulario: ["Lugares de ocio", "Actividades culturales", "Transporte en México (camión, metro, taxi de sitio, Uber, autobús foráneo)"] },
    preguntas: ["¿que piensas?", "¿Cuál ciudad es más tranquila México o Monterrey?"], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 8
  // ==================================================================
  {
    n: 29, mes: 8, nivel: "A2", estado: "borrador",
    titulo: "Pretérito indefinido vs. imperfecto",
    sugerencias: { parte1: ["¿Qué pasó?", "Hacía sol cuando me caí", "Me torcí el tobillo"], parte2: ["Mientras caminaba…", "De pronto…", "Por suerte, el médico…"] },
    parte1: { gramatica: ["Contraste indefinido vs. imperfecto: ¿qué pasó? (indefinido) vs. ¿cómo era la situación? (imperfecto)"], vocabulario: ["Accidentes y emergencias (caerse, torcerse el tobillo, quemarse, cortarse)", "Me duele", "Emergencias del viajero (911, me robaron, perdí mi pasaporte, la embajada)"] },
    parte2: { gramatica: ["Conectores avanzados de narración (mientras, al mismo tiempo, de pronto, por suerte, por desgracia)"], vocabulario: ["Partes del cuerpo", "En el médico (el médico, las radiografías, las pastillas, la receta)"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 30, mes: 8, nivel: "A2", estado: "borrador",
    titulo: "Por y para",
    sugerencias: { parte1: ["¿Para qué?", "Para el lunes", "Es para ti"], parte2: ["Por 200 pesos", "Por la mañana", "Por aquí, por favor"] },
    parte1: { gramatica: ["Para: finalidad, destino, plazo y opinión (para dormir mejor, el vuelo para Cancún, para el lunes, para mí)"], vocabulario: ["Preparativos, bienestar y cuidado personal en viajes de trabajo"] },
    parte2: { gramatica: ["Por: precio, medio, tiempo, lugar y causa (por 200 pesos, por correo, por la mañana, por aquí, por la lluvia)"], vocabulario: ["Trámites y pagos del viaje (pagar, cambiar dinero, mandar por correo, llegar por avión)"] },
    preguntas: ["¿Por qué quieres aprender español?", "¿Para qué estudias español?"], cultura: [], notas: ["Los «verbos auxiliares + infinitivo» (acabar de, volver a, hay que…) pasaron a la semana nueva de perífrasis."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 31, mes: 8, nivel: "A2", estado: "borrador",
    titulo: "Imperativo afirmativo: tú y usted",
    sugerencias: { parte1: ["Pon un poco de sal", "Mezcla y sirve", "Toma agua"], parte2: ["Siga derecho", "Gire a la izquierda", "Tome el metro"] },
    parte1: { gramatica: ["Imperativo afirmativo de tú, regular e irregular (toma, mezcla, pon, ven, haz, di, sal, ten, ve, sé)"], vocabulario: ["Recetas y recomendaciones de bienestar", "Verbos y complementos de cocina (sal, azúcar, nuez)"] },
    parte2: { gramatica: ["Imperativo afirmativo de usted para dar y entender indicaciones (siga, gire, tome, cruce, baje)"], vocabulario: ["Dar indicaciones en la calle (la cuadra, la esquina, el semáforo, a mano derecha)"] },
    preguntas: ["¿Cómo llego a…?"], cultura: ["En México las indicaciones en la calle casi siempre se dan de usted"], notas: ["Los pronombres pegados al imperativo (dámelo, cómpralo) pasaron a la semana del imperativo negativo, donde se ven junto con «no me lo des».", "Idea de vocabulario que estaba aquí: expresiones de trabajo en equipo (¡Resolvamos este problema!, ¡Vamos a la junta!)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 32, mes: 8, nivel: "A2", estado: "borrador",
    titulo: "Preguntas indirectas: ¿sabe dónde…?",
    sugerencias: { parte1: ["¿Sabe dónde está…?", "No sé qué significa", "¿Me puede decir cuánto cuesta?"], parte2: ["No sé si hay mesa", "¿Sabe si abren mañana?", "Pregunto si…"] },
    parte1: { gramatica: ["Preguntas indirectas con interrogativo (¿Sabe dónde está el baño? No sé qué significa)"], vocabulario: ["Pedir información en la calle, el hotel y la oficina"] },
    parte2: { gramatica: ["Preguntas indirectas con «si» (No sé si hay mesa. ¿Sabe si abren mañana?)"], vocabulario: ["Horarios y servicios (abrir, cerrar, estar disponible, haber lugar)"] },
    preguntas: ["¿Sabe dónde hay una farmacia?"], cultura: [],
    notas: ["Semana nueva (2026-11-19), sacada de los libros: es la forma educada de preguntar. Buen momento para repasar qué vs. cuál."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 9
  // ==================================================================
  {
    n: 33, mes: 9, nivel: "A2", estado: "borrador",
    titulo: "Posesivos: es mío, el tuyo",
    sugerencias: { parte1: ["¿Es tuya? Sí, es mía", "La mía es azul", "¿De quién es esta chamarra?"], parte2: ["Un amigo mío", "Esos lentes son suyos", "¿Es tuyo este reloj?"] },
    parte1: { gramatica: ["Pronombres Posesivos con artículo:"], vocabulario: ["ropa"] },
    parte2: { gramatica: ["Posesivos Tónicos posnominales de énfasis"], vocabulario: ["accesorios"] },
    preguntas: ["Mi blusa es más pequeña que la tuya."], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 34, mes: 9, nivel: "A2", estado: "borrador",
    titulo: "«Se» impersonal y el clima",
    sugerencias: { parte1: ["Se habla inglés", "No se permite fumar", "¿Cómo se dice…?"], parte2: ["Hace calor", "Está nublado", "¿Qué tiempo hace?"] },
    parte1: { gramatica: ["El \"Se\" impersonal para entender reglas y letreros"], vocabulario: ["Tecnología del viajero (el wifi, la contraseña, el cargador, el enchufe, los datos, el chip)"] },
    parte2: { gramatica: ["hace vs esta"], vocabulario: ["Tipos de clima, geografía y meteorología para la planificación de vacaciones", "hace frío, esta frío"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 35, mes: 9, nivel: "A2", estado: "borrador",
    titulo: "Cortesía: me gustaría y ¿podría…?",
    sugerencias: { parte1: ["Me gustaría reservar una mesa", "Quería saber si…", "Me gustaría ir a Oaxaca"], parte2: ["¿Podría traerme la cuenta?", "¿Podrías ayudarme?", "Muy amable"] },
    parte1: { gramatica: ["Me gustaría / quería + infinitivo (la tabla de gustar con -ía: me gustaría, te gustaría…; y el imperfecto de cortesía: quería saber si…, quería pedirle…)"], vocabulario: ["Peticiones en restaurantes, hoteles y tiendas («Me gustaría reservar una mesa»)", "En el restaurante: la carta, ¿pica?, la cuenta, la propina"] },
    parte2: { gramatica: ["¿Podría…? / ¿Podrías…? + infinitivo para pedir con cortesía («¿Podría traerme la cuenta?»)"], vocabulario: ["Fórmulas de cortesía (por favor, disculpe, muy amable, con permiso)"] },
    preguntas: ["¿Qué te gustaría hacer en tu próximo viaje?", "¿Podría repetir, por favor?"], cultura: [], notas: ["Viene de la antigua semana del condicional como fórmula de cortesía; ahora va en el A2, después del imperfecto (para «quería…»)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 36, mes: 9, nivel: "A2", estado: "borrador",
    titulo: "Perífrasis: acabar de, volver a, llevar + gerundio",
    sugerencias: { parte1: ["Acabo de llegar", "Vuelvo a empezar", "Hay que reservar"], parte2: ["¿Cuánto tiempo llevas en México?", "Llevo dos años aquí", "Sigo trabajando"] },
    parte1: { gramatica: ["Verbo + infinitivo: acabar de, volver a, empezar a, dejar de, hay que (acabo de llegar, hay que reservar)"], vocabulario: ["Preparativos y trámites del viaje"] },
    parte2: { gramatica: ["Verbo + gerundio: llevar y seguir (¿Cuánto tiempo llevas en México? Sigo trabajando aquí)"], vocabulario: ["Tiempo y experiencia (llevar dos años, seguir estudiando, desde hace…)"] },
    preguntas: ["¿Cuánto tiempo llevas estudiando español?"], cultura: [],
    notas: ["Semana nueva (2026-11-19): junta los «verbos auxiliares + infinitivo» que estaban con «para» y agrega llevar + gerundio, una pregunta muy común para el extranjero en México."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 10
  // ==================================================================
  {
    n: 37, mes: 10, nivel: "B1", estado: "borrador",
    titulo: "Objeto indirecto y el «se» de los accidentes",
    sugerencias: { parte1: ["Te mando un correo", "Le doy las llaves a María", "¿Me pasas la sal?"], parte2: ["Se me olvidó", "Se me perdió el pasaporte", "Se le descompuso el carro"] },
    parte1: { gramatica: ["Objeto indirecto con verbos de acción y el pronombre repetido (le doy, te mando; le doy el libro a María, les escribo a mis papás)"], vocabulario: ["Verbos para dar y comunicar (dar, mandar, prestar, decir, escribir, pasar)"] },
    parte2: { gramatica: ["El «se» de los accidentes: se + me / te / le + verbo, cuando algo pasa sin querer (se me olvidó, se me cayó, se le descompuso el carro)"], vocabulario: ["Objetos que se pierden, se caen o se descomponen (el pasaporte, las llaves, el celular, la batería, el carro)"] },
    preguntas: ["¿Qué se te olvidó en tu último viaje?"], cultura: [], notas: ["El «se» de los accidentes (B1 en el Cervantes) se agregó el 2026-11-19. Usa los mismos pronombres de la parte 1; por eso el objeto indirecto repetido ahora va dentro de la parte 1.", "Gustar, encantar, interesar, fascinar, «a Juan le…», «a mí también» y el vocabulario de pasatiempos se pasaron a la semana 18. «Me duele» ya está en el vocabulario de la semana del cuerpo y el médico."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 38, mes: 10, nivel: "B1", estado: "borrador",
    titulo: "Apariencia física II: parecer, parecerse a y llevar",
    sugerencias: { parte1: ["Te pareces a tu mamá", "Parece cansado", "¿A quién te pareces?"], parte2: ["Lleva lentes", "¿Qué lleva puesto?", "El señor de barba"] },
    parte1: { gramatica: ["Parecer / parecerse a (se parece a su mamá, parece cansado)"], vocabulario: ["Apariencia física II"] },
    parte2: { gramatica: ["Llevar + ropa o accesorios (lleva lentes, lleva un vestido rojo)"], vocabulario: ["Accesorios y rasgos (lentes, barba, bigote, tatuaje, aretes…)"] },
    preguntas: ["¿A quién te pareces?", "¿Qué lleva puesto?"], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 39, mes: 10, nivel: "B1", estado: "borrador",
    titulo: "Pluscuamperfecto: ya había salido",
    sugerencias: { parte1: ["Ya había salido", "El avión ya había despegado", "No lo había visto"], parte2: ["Ya lo había hecho", "Antes de eso…", "En ese momento"] },
    parte1: { gramatica: ["El Pretérito Pluscuamperfecto de Indicativo:", "formación regular e irregular con el auxiliar Haber en imperfecto"], vocabulario: ["Excusas, malentendidos y aclaraciones de situaciones en el pasado"] },
    parte2: { gramatica: ["La posición invariable de los pronombres con tiempos compuestos"], vocabulario: ["Conectores de anterioridad temporal (ya, antes de, en ese momento"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 40, mes: 10, nivel: "B1", estado: "borrador",
    titulo: "Futuro simple: iré, tendré, haré",
    sugerencias: { parte1: ["Mañana lloverá", "Tendrás suerte", "¿Qué harás?"], parte2: ["Serán las cuatro", "Estará trabajando", "¿Dónde estará?"] },
    parte1: { gramatica: ["Futuro Simple / Imperfecto", "morfología de la conjugación regular (-ré, -rás, -rá, -remos, -rán)", "e irregulares de alta frecuencia en la raíz (tendré, haré, podré, sabré, vendré)."], vocabulario: ["Horóscopos, predicciones del futuro, el destino,", "las profecías y proyectos personales a largo plazo"] },
    parte2: { gramatica: ["El uso del futuro para expresar probabilidad o hipótesis en el presente", "(\"—¿Qué hora es? —No sé, serán las 4:00\", \"—¿Dónde está María? —Estará trabajando\")."], vocabulario: ["Ciencia, tecnología del mañana, inteligencia artificial,", "el avance de la medicina y el medio ambiente futuro."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 11
  // ==================================================================
  {
    n: 41, mes: 11, nivel: "B1", estado: "borrador",
    titulo: "Relativos «donde» y «lo que»",
    sugerencias: { parte1: ["La ciudad donde nací", "El lugar donde…", "Donde comimos ayer"], parte2: ["Lo que quiero decir es…", "Lo que pasa es que…", "Lo que necesito"] },
    parte1: { gramatica: ["Relativo «donde» (el lugar donde…, la ciudad donde nací)"], vocabulario: ["Fórmulas conversacionales para definir y aclarar palabras"] },
    parte2: { gramatica: ["Relativo «lo que» (lo que necesito…, lo que pasa es que…)"], vocabulario: ["lo que quiero decir, lo que pasa"] },
    preguntas: [], cultura: [], notas: ["El relativo «que» se pasó al A2 (semana del imperfecto)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 42, mes: 11, nivel: "B1", estado: "borrador",
    titulo: "Imperativo negativo y pronombres",
    sugerencias: { parte1: ["No estacione aquí", "No fumes", "Prohibido el paso"], parte2: ["No te preocupes", "Dámelo / no me lo des", "Siéntese, por favor"] },
    parte1: { gramatica: ["Imperativo negativo de tú y usted, con el cambio de vocal (-ar → -es / -e, -er, -ir → -as / -a): no fumes, no fume"], vocabulario: ["Señales de tránsito y normas de convivencia urbana", "Reglas comunitarias y de manejo", "(prohibido estacionarse, no fumar, respetar el límite de velocidad, no hacer ruido)."] },
    parte2: { gramatica: ["Pronombres con el imperativo: pegados al afirmativo (dámelo, siéntese) y antes del verbo en el negativo (no me lo des, no se siente)"], vocabulario: ["Advertencias y consejos de seguridad", "Frases de cuidado cotidiano", "(no abras la puerta a desconocidos, no camines de noche por ahí, ten cuidado)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 43, mes: 11, nivel: "B1", estado: "borrador",
    titulo: "Condicional: ¿qué harías?",
    sugerencias: { parte1: ["¿Qué harías tú?", "Sería increíble", "Yo lo haría"], parte2: ["Viajaría a Europa, pero…", "Me encantaría, pero…", "Haría de todo"] },
    parte1: { gramatica: ["Condicional Simple", "morfología de la conjugación regular (-ría, -rías, -ría, -ríamos, -rían)", "y sus raíces irregulares (que son exactamente las mismas que las del", "Futuro Simple: tendría, haría, podría)."], vocabulario: ["Dilemas morales, toma de decisiones y situaciones hipotéticas extravagantes", "(\"¿Qué harías con un millón de dólares?\", \"Si fueras invisible por un día...\")."] },
    parte2: { gramatica: ["Estructuras de deseos y situaciones imaginarias o realizables en el presente", "(\"Yo viajaría a Europa, pero no tengo dinero\", \"¿Qué harías tú en esa situación"], vocabulario: ["Planes frustrados o excusas justificadas en presente: Vocabulario para explicar por qué", "no se puede hacer una acción (por falta de tiempo, por cuestiones de dinero, debido al trabajo)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 44, mes: 11, nivel: "B1", estado: "borrador",
    titulo: "Si + presente: la condicional real",
    sugerencias: { parte1: ["Si llueve, vamos al museo", "Si necesita algo, llámeme", "¿Qué haces si…?"], parte2: ["Si tengo tiempo, iré", "Si llegamos temprano…", "¿Qué harás si…?"] },
    parte1: { gramatica: ["Si + presente → presente o imperativo (si llueve, vamos al museo; si necesita algo, llámeme)"], vocabulario: ["Planes de viaje e imprevistos (llover, cancelar, retrasarse, perder el vuelo)"] },
    parte2: { gramatica: ["Si + presente → futuro (si llegamos temprano, iremos a la playa)"], vocabulario: ["Planes para el fin de semana y el próximo viaje"] },
    preguntas: ["¿Qué haces si pierdes tu vuelo?", "¿Qué harás si llueve el fin de semana?"], cultura: [],
    notas: ["Semana nueva (2026-11-19), sacada de los libros: la condicional real se usa todo el tiempo al viajar. Va un mes después del futuro."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 12
  // ==================================================================
  {
    n: 45, mes: 12, nivel: "B1", estado: "borrador",
    titulo: "Adverbios en -mente",
    sugerencias: { parte1: ["Habla despacio, por favor", "Rápidamente", "Lento como tortuga"], parte2: ["Más rápido que tú", "Lo mejor posible", "Cada vez mejor"] },
    parte1: { gramatica: ["adverbios de modo"], vocabulario: ["animales", "adverbios de modo"] },
    parte2: { gramatica: ["adverbios de modo comparativo y superlativo"], vocabulario: ["acciones comunes de rendimiento y estilo"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 46, mes: 12, nivel: "B1", estado: "borrador",
    titulo: "Conectores y acentos",
    sugerencias: { parte1: ["Pero, sin embargo…", "Aunque está lejos", "Incluso los lunes"], parte2: ["¿Té o te?", "Él, el, tú, tu", "Agudas, graves y esdrújulas"] },
    parte1: { gramatica: ["Conectores (pero, sin embargo, aunque, incluso) y marcadores para ordenar ideas (en primer lugar, por lo tanto, en resumen)"], vocabulario: ["pero, sin embargo, y, ya, aunque, incluso, en primer lugar, por lo tanto, en resumen"] },
    parte2: { gramatica: ["tilde, aguda, grave, esdrujula, sobresdrujula"], vocabulario: ["palabras homófonoas con tilde diacrítica"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 47, mes: 12, nivel: "B1", estado: "borrador",
    titulo: "Indefinidos y doble negación",
    sugerencias: { parte1: ["¿Hay alguien?", "Alguien, nadie, algo, nada", "Demasiado tiempo, poco dinero"], parte2: ["No vino nadie", "No tengo nada", "Nunca pasa nada"] },
    parte1: { gramatica: ["Pronombres Indefinidos invariables (alguien, nadie, algo, nada)", "y variables de cantidad (alguno, ninguno, demasiado, bastante)."], vocabulario: ["Sustantivos de cantidad imprecisa: Expresiones para medir abundancia o escasez", "(el dinero, el tiempo, el espacio, las ganas, las opciones)."] },
    parte2: { gramatica: ["Doble Negación en español y la posición del adverbio \"no\" en la frase", "(\"Nadie vino\" frente a \"No vino nadie\")."], vocabulario: ["Expresiones cotidianas de queja o reclamo en presente", "Frases reales para justificar la falta de algo", "(\"No tengo ninguna opción\", \"Aquí nunca hay nada\", \"Nadie me ayuda\")."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 48, mes: 12, nivel: "B1", estado: "borrador",
    titulo: "Consejos con el condicional",
    sugerencias: { parte1: ["Deberías ahorrar", "Podrías intentarlo", "Tendrías que ir al médico"], parte2: ["Yo que tú…", "Yo en tu lugar…", "Te recomendaría…"] },
    parte1: { gramatica: ["Deberías / podrías / tendrías que + infinitivo"], vocabulario: ["Fórmulas y frases hechas para dar consejos financieros,", "de salud, profesionales o amorosos."] },
    parte2: { gramatica: ["Estructuras fijas para dar consejos o", "sugerencias de forma empática usando el condicional"], vocabulario: ["Vocabulario avanzado de atención al cliente,", "modales formales en hoteles, restaurantes o citas de negocios"] },
    preguntas: [], cultura: [], notas: ["«Me gustaría» y «¿podría…?» se pasaron a la semana 35 (cortesía).", "«Deberías» ya se vio como frase en la semana 14; aquí se entiende de dónde viene."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 13
  // ==================================================================
  {
    n: 49, mes: 13, nivel: "B2", estado: "borrador",
    titulo: "Presente de subjuntivo: deseos",
    sugerencias: { parte1: ["¡Que te vaya bien!", "¡Que tengas buen viaje!", "Espero que estés bien"], parte2: ["Quiero viajar / Quiero que viajes", "Ojalá vengas", "Espero que…"] },
    parte1: { gramatica: ["Presente de Subjuntivo", "Morfología regular y su detonante principal a través de estructuras de deseo", "(\"Quiero que...\" / \"Espero que...\" + Subjuntivo)."], vocabulario: ["Felicitaciones, buenos deseos y rituales sociales:", "Frases hechas de cortesía hispana", "(¡Que tengas un buen día!, ¡Que te recuperes pronto!,", "¡Que cumplas muchos más!, ¡Buen provecho!)."] },
    parte2: { gramatica: ["\"Quiero viajar\") frente a usar Subjuntivo (dos sujetos diferentes: \"Quiero que tú viajes\").", "Planes e ideales de vida para otras personas:", "La diferencia fundamental entre usar Infinitivo (mismo sujeto: \"Quiero viajar\")"], vocabulario: ["Expresar deseos para la familia o amigos", "(desear que consigan trabajo, esperar que sean felices, querer que viajen)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 50, mes: 13, nivel: "B2", estado: "borrador",
    titulo: "Voz pasiva y «se» pasivo",
    sugerencias: { parte1: ["Fue construido en 1500", "Fue escrito por…", "Fue pintado por Frida"], parte2: ["Se venden libros", "Se renta departamento", "Se busca…"] },
    parte1: { gramatica: ["La Voz Pasiva con el verbo Ser + Participio y"], vocabulario: ["el uso de la preposición Por para introducir al agente"] },
    parte2: { gramatica: ["La pasiva refleja con el pronombre \"SE\" para acciones donde el agente no importa.", "(\"Se venden libros\", \"Se arrienda casa\")"], vocabulario: ["Vocabulario de la literatura, redacción de ensayos e historia"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 51, mes: 13, nivel: "B2", estado: "borrador",
    titulo: "Dos pronombres juntos: se lo",
    sugerencias: { parte1: ["Me lo das", "Se lo digo", "Te la presto"], parte2: ["Dámelo", "Tengo que enviárselo", "Se lo voy a mandar"] },
    parte1: { gramatica: ["Combinación de Pronombres de Objeto Directo e Indirecto", "Reglas de colocación (\"Indirecto + Directo\": me lo, te la, nos los", "el cambio obligatorio de le/les por \"SE\" frente a lo/la/los/las."], vocabulario: ["Verbos de transferencia e intercambio de información", "dar, regalar, prestar, enviar, entregar, vender, contar una historia)."] },
    parte2: { gramatica: ["infinitivos, gerundios e imperativos", "(\"Se lo tengo que enviar\" frente a \"Tengo que enviárselo\", o ¡Dámelo!).", "Objetos cotidianos y de oficina comunes para sustituir", "La doble posición de los pronombres combinados"], vocabulario: ["Sustantivos que servirán como objeto directo en las dinámicas", "(el paquete, el regalo, las llaves, el secreto, el dinero)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 52, mes: 13, nivel: "B2", estado: "borrador",
    titulo: "Estilo indirecto en presente",
    sugerencias: { parte1: ["Dice que viene", "Pregunta si…", "Te manda decir que…"], parte2: ["Dice que su casa es grande", "Un recado para ti", "Dice que lo llames"] },
    parte1: { gramatica: ["Estilo Indirecto en Presente para reportar", "discursos y peticiones de otros (\"Dice que...\")."], vocabulario: ["Verbos de habla, reporte y transmisión comunicativa (comentar, asegurar, negar, explicar)."] },
    parte2: { gramatica: ["Modificaciones obligatorias de los pronombres personales posesivos al transmitir un mensaje", "(\"—Mi casa es grande\" \\(\\rightarrow \\) \"Él dice que su casa es grande\")."], vocabulario: ["Fórmulas para transmitir recados telefónicos o mensajes pendientes en la oficina"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 14
  // ==================================================================
  {
    n: 53, mes: 14, nivel: "B2", estado: "borrador",
    titulo: "Subjuntivo con sentimientos: me alegra que…",
    sugerencias: { parte1: ["Me alegra que vengas", "Me molesta que…", "Me sorprende que…"], parte2: ["Que sea, que vaya, que sepa", "Me molesta que haya ruido", "Ojalá sepa la respuesta"] },
    parte1: { gramatica: ["El Subjuntivo en estructuras de sentimiento de tipo invertido", "(\"Me alegra que...\", \"Me molesta que...\")."], vocabulario: ["Estados de ánimo avanzados y respuestas psicológicas", "(la frustración, el enfado/enojo, la sorpresa, la decepción, el alivio)."] },
    parte2: { gramatica: ["Verbos de irregularidad fuerte en Presente de Subjuntivo", "(Sea, Vaya, Sepa, Haya)."], vocabulario: ["Convivencia y relaciones interpersonales: acciones comunes de la gente que generan roces", "(llegar tarde, mentir, hacer ruido, olvidar cosas)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 54, mes: 14, nivel: "B2", estado: "borrador",
    titulo: "Valorar y opinar: es importante que…",
    sugerencias: { parte1: ["Es importante que…", "Es una lástima que…", "Es bueno que…"], parte2: ["Creo que sí, no creo que…", "Desde mi punto de vista", "No estoy seguro de que…"] },
    parte1: { gramatica: ["Estructuras de valoración con construcciones impersonales", "Es bueno que...\" / \"Es importante que...\" / \"Es una lástima que...\" + Subjuntivo."], vocabulario: ["Problemáticas urbanas y sociales del mundo actual ideales para debatir", "(el tráfico, la contaminación, la seguridad, el costo de la vida)."] },
    parte2: { gramatica: ["Opinión y duda: indicativo o subjuntivo (creo que es / no creo que sea; es posible que, puede ser que, quizás + subjuntivo)"], vocabulario: ["Fórmulas discursivas de argumentación para defender un punto de vista", "(desde mi punto de vista, opino que, es fundamental considerar...)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 55, mes: 14, nivel: "B2", estado: "borrador",
    titulo: "Imperfecto de subjuntivo y ojalá",
    sugerencias: { parte1: ["Quisiera que…", "Hablara, comiera, viviera", "Me gustaría que cambiara…"], parte2: ["¡Ojalá tuviera más tiempo!", "¡Quién fuera rico!", "Ojalá hiciera calor"] },
    parte1: { gramatica: ["Introducción al Pretérito Imperfecto de Subjuntivo: morfología de la conjugación regular", "(-ara / -iera: hablara, comiera) basada en la tercera persona plural del pasado (hablaron \\(\\rightarrow \\) hablara)."], vocabulario: ["Sueños frustrados, utopías y deseos de cambios globales (acabar con la pobreza, viajar al espacio)"] },
    parte2: { gramatica: ["Expresión de deseos imposibles o improbables en el presente mediante la partícula \"Ojalá", "(\"¡Ojalá tuviera más dinero!\", \"¡Ojalá hiciera calor!\")."], vocabulario: ["Expresiones idiomáticas basadas en la nostalgia y el anhelo (\"¡Quién fuera rico!\", \"A buenas horas\")."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 56, mes: 14, nivel: "B2", estado: "borrador",
    titulo: "Estilo indirecto en pasado",
    sugerencias: { parte1: ["Me dijo que venía", "Dijo que iba a llover", "¿Qué te dijo?"], parte2: ["Me preguntó si…", "Me preguntó dónde vivía", "Al día siguiente"] },
    parte1: { gramatica: ["Dijo que… con cambio de tiempos (viene → dijo que venía; va a llover → dijo que iba a llover)"], vocabulario: ["Recados y conversaciones de trabajo"] },
    parte2: { gramatica: ["Preguntas en pasado y cambios de tiempo y lugar (me preguntó si…, me preguntó dónde…; hoy → ese día, mañana → al día siguiente, aquí → allí)"], vocabulario: ["Contar una conversación o una junta"] },
    preguntas: ["¿Qué te dijo tu jefe?"], cultura: [],
    notas: ["Semana nueva (2026-11-19), sacada de los libros: sigue al estilo indirecto en presente (un mes antes)."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 15
  // ==================================================================
  {
    n: 57, mes: 15, nivel: "B2", estado: "borrador",
    titulo: "Cuando + subjuntivo y «alguien que» + subjuntivo",
    sugerencias: { parte1: ["Cuando llegues, llámame", "Hasta que vuelvas", "Cuando tenga tiempo…"], parte2: ["¿Hay alguien que hable inglés?", "Busco un hotel que tenga alberca", "No conozco a nadie que…"] },
    parte1: { gramatica: ["Cuando / hasta que + subjuntivo para hablar del futuro (cuando llegues al hotel, llámame)"], vocabulario: ["Expresiones idiomáticas y mexicanismos (echar la mano, ser pan comido, ¡qué padre!, ¡aguas!, órale)"] },
    parte2: { gramatica: ["Relativo + subjuntivo para lo que no conocemos (busco a alguien que…, ¿hay alguien que hable inglés?)"], vocabulario: ["Fórmulas de despedida formal e informal para correos o el cierre del curso"] },
    preguntas: [], cultura: [], notas: ["Antes: «revisión global de los modos» (queda como repaso de la semana) y marcadores (en resumen, por lo tanto), que pasaron a la semana de conectores."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 58, mes: 15, nivel: "B2", estado: "borrador",
    titulo: "Si tuviera…: condiciones imaginarias",
    sugerencias: { parte1: ["Si tuviera tiempo…", "Si ganara la lotería…", "¿Qué harías si…?"], parte2: ["Si fuera, si tuviera, si hiciera", "Si pudiera…", "Si estuviera allí…"] },
    parte1: { gramatica: ["Oraciones condicionales improbables o imaginarias en presente mediante la estructura", "Si + Imperfecto de Subjuntivo + Condicional Simple (\"Si tuviera tiempo, viajaría a la playa\")."], vocabulario: ["Dilemas éticos avanzados, toma de decisiones críticas en empresas o situaciones límite de supervivencia."] },
    parte2: { gramatica: ["Las irregularidades de la raíz en Imperfecto de Subjuntivo", "(que provienen de los pasados de las semanas 21 y 25: tuviera, hiciera, fuera, estuviera)."], vocabulario: ["Planes alternativos y justificaciones hipotéticas ante imprevistos cotidianos"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 59, mes: 15, nivel: "B2", estado: "borrador",
    titulo: "Futuro perfecto y condicional compuesto",
    sugerencias: { parte1: ["Para el 2030 habremos…", "Ya habré terminado", "¿Habrá llegado?"], parte2: ["Yo habría ido", "Habría sido mejor", "Lo habría hecho"] },
    parte1: { gramatica: ["Futuro perfecto (habré terminado)"], vocabulario: ["Proyecciones a largo plazo y evaluación de proyectos (ej. Para el 2030, habremos expandido el mercado)"] },
    parte2: { gramatica: ["Condicional compuesto (habría ido)"], vocabulario: ["Arrepentimientos financieros o personales (ej. Yo habría invertido en esa empresa, pero no tenía presupuesto)"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 60, mes: 15, nivel: "B2", estado: "borrador",
    titulo: "Subjuntivo compuesto: haya, hubiera",
    sugerencias: { parte1: ["Me alegra que hayas venido", "Espero que hayas descansado", "Ojalá haya llegado bien"], parte2: ["Si hubiera sabido…", "Ojalá hubiera ido", "Si lo hubiéramos lanzado antes…"] },
    parte1: { gramatica: ["Pretérito perfecto de subjuntivo (haya terminado)"], vocabulario: ["Evaluaciones de desempeño y feedback laboral (ej. Me alegra que hayamos cerrado el trato)"] },
    parte2: { gramatica: ["Pretérito pluscuamperfecto de subjuntivo (hubiera / hubiese terminado)"], vocabulario: ["Condicionales irreales del pasado (ej. Si hubiéramos lanzado el producto antes, tendríamos más clientes)"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 16
  // ==================================================================
  {
    n: 61, mes: 16, nivel: "C1", estado: "borrador",
    titulo: "Aunque + indicativo o subjuntivo",
    sugerencias: { parte1: ["Aunque está lejos, vale la pena", "Aunque es caro, lo compro", "Aunque llueve…"], parte2: ["Aunque llueva, iremos", "Aunque no te guste…", "Pase lo que pase"] },
    parte1: { gramatica: ["Aunque + indicativo para un hecho real (aunque llueve, salgo a caminar)"], vocabulario: ["Negociación y objeciones"] },
    parte2: { gramatica: ["Aunque + subjuntivo cuando no importa o no se sabe (aunque llueva, saldré)"], vocabulario: ["Responder a una objeción con cortesía"] },
    preguntas: ["¿Viajarías aunque fuera temporada de lluvias?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 62, mes: 16, nivel: "C1", estado: "borrador",
    titulo: "Para que + subjuntivo",
    sugerencias: { parte1: ["Te lo mando para que lo revises", "Para que no se te olvide", "¿Para qué lo quieres?"], parte2: ["A fin de que…", "Con el objetivo de que…", "Quedo atento"] },
    parte1: { gramatica: ["Para que + subjuntivo cuando cambia la persona (te lo mando para que lo revises)"], vocabulario: ["Correos y solicitudes formales"] },
    parte2: { gramatica: ["A fin de que / con el objetivo de que (registro formal)"], vocabulario: ["Lenguaje de oficina (adjunto, quedo atento, en seguimiento a)"] },
    preguntas: ["¿Qué haces para que tu equipo trabaje mejor?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 63, mes: 16, nivel: "C1", estado: "borrador",
    titulo: "Verbos de cambio: ponerse, quedarse, volverse",
    sugerencias: { parte1: ["Me puse nervioso", "Se quedó callado", "Se puso rojo"], parte2: ["Se hizo famoso", "Se volvió más serio", "Se convirtió en gerente"] },
    parte1: { gramatica: ["Ponerse y quedarse para cambios rápidos o resultados (se puso nervioso, se quedó sorprendido)"], vocabulario: ["Emociones y reacciones en el trabajo"] },
    parte2: { gramatica: ["Volverse, hacerse y convertirse en para cambios profundos (se hizo rico, se volvió famoso)"], vocabulario: ["Cambios en la vida y en la carrera"] },
    preguntas: ["¿Cómo te pones cuando hablas en público?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 64, mes: 16, nivel: "C1", estado: "borrador",
    titulo: "Ser y estar: matices",
    sugerencias: { parte1: ["¡Está riquísimo!", "Ya estoy listo", "Es muy listo"], parte2: ["Está cerrado", "Fue cerrado por obras", "Está agotado"] },
    parte1: { gramatica: ["Adjetivos que cambian de significado con ser o estar (ser listo / estar listo, ser rico / estar rico, ser aburrido / estar aburrido)"], vocabulario: ["Describir productos, comida y servicios"] },
    parte2: { gramatica: ["Estar + participio (resultado) frente a ser + participio (acción): la tienda está cerrada / fue cerrada"], vocabulario: ["Avisos y estados de un servicio (abierto, cerrado, suspendido, agotado)"] },
    preguntas: ["¿Qué platillo mexicano está más rico?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 17
  // ==================================================================
  {
    n: 65, mes: 17, nivel: "C1", estado: "borrador",
    titulo: "En cuanto, antes de que + subjuntivo",
    sugerencias: { parte1: ["En cuanto llegue, te aviso", "Tan pronto como pueda…", "En cuanto sepa algo"], parte2: ["Antes de que se vaya…", "Después de que firmen", "Antes de que sea tarde"] },
    parte1: { gramatica: ["En cuanto / tan pronto como + subjuntivo (en cuanto llegue, te aviso)"], vocabulario: ["Logística de un viaje de trabajo"] },
    parte2: { gramatica: ["Antes de que / después de que + subjuntivo (antes de que salga el vuelo)"], vocabulario: ["Agenda, itinerario y horarios"] },
    preguntas: ["¿Qué haces en cuanto llegas a un hotel?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 66, mes: 17, nivel: "C1", estado: "borrador",
    titulo: "Condiciones con otros nexos",
    sugerencias: { parte1: ["Siempre que avise antes", "Con tal de que llegues", "Trato hecho"], parte2: ["En caso de que llueva…", "A menos que cambie el precio", "Por si acaso"] },
    parte1: { gramatica: ["Siempre que / con tal de que + subjuntivo (te lo presto con tal de que me lo devuelvas)"], vocabulario: ["Contratos, reservas y garantías"] },
    parte2: { gramatica: ["A menos que / en caso de que + subjuntivo (en caso de que se cancele el vuelo…)"], vocabulario: ["Políticas de cancelación y reembolso"] },
    preguntas: ["¿Qué haces en caso de que pierdas tu vuelo?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 67, mes: 17, nivel: "C1", estado: "borrador",
    titulo: "Relativos: el que, el cual, cuyo, quien",
    sugerencias: { parte1: ["El hotel en el que me quedé", "La empresa con la que trabajo", "El día en que llegué"], parte2: ["La persona con quien hablé", "Un pueblo cuyo nombre…", "Quien quiera puede venir"] },
    parte1: { gramatica: ["Preposición + el que / el cual (el hotel en el que me quedé, la empresa con la cual trabajo)"], vocabulario: ["Presentar una empresa"] },
    parte2: { gramatica: ["Cuyo y quien (el cliente cuyo pedido llegó tarde, la persona con quien hablé)"], vocabulario: ["Folletos y descripciones de lugares turísticos"] },
    preguntas: ["¿Cuál es la ciudad en la que te gustaría vivir?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 68, mes: 17, nivel: "C1", estado: "borrador",
    titulo: "Causa y consecuencia",
    sugerencias: { parte1: ["Como no había mesa…", "Ya que estás aquí…", "Dado que el vuelo se retrasó"], parte2: ["Así que nos fuimos", "Por eso llegué tarde", "De modo que…"] },
    parte1: { gramatica: ["Causa: como, ya que, puesto que, dado que (como no había vuelos, tomamos el autobús)"], vocabulario: ["Explicar un problema"] },
    parte2: { gramatica: ["Consecuencia: así que, por eso, de modo que, por lo tanto"], vocabulario: ["Proponer soluciones en el trabajo"] },
    preguntas: ["¿Por qué elegiste aprender español?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 18
  // ==================================================================
  {
    n: 69, mes: 18, nivel: "C1", estado: "borrador",
    titulo: "Me pidió que viniera: tiempos en pasado",
    sugerencias: { parte1: ["Me pidió que llegara temprano", "Quería que vinieras", "Me recomendó que…"], parte2: ["Me molestó que no avisaran", "Me sorprendió que…", "Fue una lástima que…"] },
    parte1: { gramatica: ["Pedir, querer y recomendar en pasado + imperfecto de subjuntivo (me pidió que llegara temprano)"], vocabulario: ["Quejas y reclamaciones (hotel, aerolínea, restaurante)"] },
    parte2: { gramatica: ["Sentimientos en pasado + imperfecto de subjuntivo (me molestó que no avisaran)"], vocabulario: ["Pedir una compensación con cortesía"] },
    preguntas: ["¿Qué te pidió tu jefe la semana pasada?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 70, mes: 18, nivel: "C1", estado: "borrador",
    titulo: "Condiciones mixtas y como si",
    sugerencias: { parte1: ["Si hubiera sabido…", "Si me hubiera quedado…", "Ahora estaría…"], parte2: ["Como si nada", "Habla como si fuera de aquí", "Como si no hubiera mañana"] },
    parte1: { gramatica: ["Condicionales mixtas (si hubiera estudiado más, ahora hablaría mejor)"], vocabulario: ["Arrepentimientos y decisiones de vida"] },
    parte2: { gramatica: ["Como si + imperfecto o pluscuamperfecto de subjuntivo (habla como si fuera mexicano)"], vocabulario: ["Anécdotas y comparaciones"] },
    preguntas: ["¿Qué harías hoy si hubieras nacido en México?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 71, mes: 18, nivel: "C1", estado: "borrador",
    titulo: "Perífrasis de matiz",
    sugerencias: { parte1: ["Estaba a punto de salir", "Se puso a llover", "Se echó a reír"], parte2: ["Voy mejorando", "Ando buscando trabajo", "Acabé aceptando"] },
    parte1: { gramatica: ["Estar a punto de, ponerse a, echarse a + infinitivo (se puso a llover, estaba a punto de salir)"], vocabulario: ["Procesos y proyectos"] },
    parte2: { gramatica: ["Ir, andar y acabar + gerundio (voy mejorando, ando buscando casa, acabé aceptando)"], vocabulario: ["Hablar de avances y resultados"] },
    preguntas: ["¿Qué andas haciendo últimamente?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 72, mes: 18, nivel: "C1", estado: "borrador",
    titulo: "Marcadores del discurso formal",
    sugerencias: { parte1: ["No obstante…", "En cambio…", "Aun así"], parte2: ["Es decir…", "O sea…", "En otras palabras"] },
    parte1: { gramatica: ["Para contraargumentar: no obstante, sin embargo, en cambio, aun así"], vocabulario: ["Presentaciones y juntas en español"] },
    parte2: { gramatica: ["Para reformular: es decir, o sea, mejor dicho, en otras palabras"], vocabulario: ["Pedir y ceder la palabra en una junta"] },
    preguntas: ["¿Cómo presentarías tu empresa en dos minutos?"], cultura: [], notas: ["Semana nueva de nivel C1 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 19
  // ==================================================================
  {
    n: 73, mes: 19, nivel: "C2", estado: "borrador",
    titulo: "Por más que, por mucho que",
    sugerencias: { parte1: ["Por más que lo intento…", "Por mucho que insistas", "Por más que busqué"], parte2: ["Por difícil que sea", "Aun cuando llueva", "Por caro que parezca"] },
    parte1: { gramatica: ["Por más que / por mucho que + indicativo o subjuntivo (por más que lo intento… / por más que insistas…)"], vocabulario: ["Debates y argumentación"] },
    parte2: { gramatica: ["Por + adjetivo + que y aun cuando (por difícil que sea, aun cuando llueva)"], vocabulario: ["Defender una postura"] },
    preguntas: ["¿Qué no harías por mucho dinero que te pagaran?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 74, mes: 19, nivel: "C2", estado: "borrador",
    titulo: "Condiciones sin «si»",
    sugerencias: { parte1: ["De haberlo sabido…", "De ser así…", "De no ser por ti"], parte2: ["Como no llegues…", "Como sigas así…", "Siguiendo este camino…"] },
    parte1: { gramatica: ["De + infinitivo (de haberlo sabido, no habría venido)"], vocabulario: ["Advertencias y negociaciones"] },
    parte2: { gramatica: ["Como + subjuntivo y el gerundio para condicionar (como no llegues a tiempo, perdemos el vuelo)"], vocabulario: ["Advertencias en la vida diaria"] },
    preguntas: ["¿Qué habrías hecho de haber sabido español antes?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 75, mes: 19, nivel: "C2", estado: "borrador",
    titulo: "Lo bueno, lo difícil que es",
    sugerencias: { parte1: ["Lo mejor de México", "Lo bueno es que…", "Lo malo del tráfico"], parte2: ["No sabes lo difícil que es", "¡Lo bien que habla!", "Lo rápido que pasa el tiempo"] },
    parte1: { gramatica: ["Lo + adjetivo para hablar de algo en general (lo bueno, lo mejor de México, lo malo del tráfico)"], vocabulario: ["Valorar experiencias culturales"] },
    parte2: { gramatica: ["Lo + adjetivo o adverbio + que para intensificar (no sabes lo difícil que es, lo bien que habla)"], vocabulario: ["Expresar admiración y sorpresa"] },
    preguntas: ["¿Qué es lo que más te gusta de viajar?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 76, mes: 19, nivel: "C2", estado: "borrador",
    titulo: "Construcciones de énfasis",
    sugerencias: { parte1: ["Lo que necesito es…", "Lo que pasa es que…", "Lo que más me gusta"], parte2: ["Fue ella quien firmó", "Es aquí donde…", "Fue entonces cuando…"] },
    parte1: { gramatica: ["Lo que + verbo + es (lo que necesito es un taxi)"], vocabulario: ["Presentar propuestas y prioridades"] },
    parte2: { gramatica: ["Ser + quien / donde / cuando (fue ella quien firmó, es aquí donde nos vemos)"], vocabulario: ["Aclarar malentendidos"] },
    preguntas: ["¿Qué es lo que más extrañas de tu país?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 20
  // ==================================================================
  {
    n: 77, mes: 20, nivel: "C2", estado: "borrador",
    titulo: "Haber terminado, habiendo dicho",
    sugerencias: { parte1: ["Después de haber terminado", "Siento haberte molestado", "Gracias por haber venido"], parte2: ["Habiendo revisado todo…", "Habiendo dicho esto…", "Una vez terminado"] },
    parte1: { gramatica: ["Infinitivo compuesto (después de haber terminado, siento haberte molestado)"], vocabulario: ["Informes y redacción profesional"] },
    parte2: { gramatica: ["Gerundio compuesto (habiendo revisado el contrato, firmamos)"], vocabulario: ["Resumir un proceso terminado"] },
    preguntas: ["¿Qué haces después de haber llegado a otra ciudad?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 78, mes: 20, nivel: "C2", estado: "borrador",
    titulo: "Tener + participio y venir + gerundio",
    sugerencias: { parte1: ["Tengo hechos los informes", "Llevo leídas 50 páginas", "Tengo pensado…"], parte2: ["Vengo diciendo que…", "Se viene hablando de…", "Venimos trabajando"] },
    parte1: { gramatica: ["Tener y llevar + participio para lo ya hecho (tengo hechos los informes, llevo leídas 50 páginas)"], vocabulario: ["Avances de un proyecto"] },
    parte2: { gramatica: ["Venir + gerundio para algo que se repite desde antes (vengo diciendo que…)"], vocabulario: ["Seguimiento de pendientes"] },
    preguntas: ["¿Qué tienes pensado hacer el próximo año?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 79, mes: 20, nivel: "C2", estado: "borrador",
    titulo: "Quizás, a lo mejor, el hecho de que",
    sugerencias: { parte1: ["A lo mejor viene", "Quizás venga", "Tal vez sí"], parte2: ["El hecho de que…", "Me preocupa el hecho de que…", "No es que…"] },
    parte1: { gramatica: ["Quizás, tal vez y a lo mejor con indicativo o subjuntivo (a lo mejor viene / quizás venga)"], vocabulario: ["Hipótesis y matices de opinión"] },
    parte2: { gramatica: ["El hecho de que + subjuntivo o indicativo (el hecho de que llegue tarde me molesta)"], vocabulario: ["Hablar de causas con matiz"] },
    preguntas: ["¿Qué crees que pase con el turismo en México?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 80, mes: 20, nivel: "C2", estado: "borrador",
    titulo: "Cortesía y atenuación",
    sugerencias: { parte1: ["Yo diría que…", "Quería comentarle…", "¿No le importaría…?"], parte2: ["No es que no quiera…", "Lo veo difícil", "Déjeme ver"] },
    parte1: { gramatica: ["Suavizar con condicional e imperfecto (yo diría que…, quería comentarle…, ¿no le importaría…?)"], vocabulario: ["Diplomacia en el trabajo"] },
    parte2: { gramatica: ["No es que + subjuntivo para rechazar con tacto (no es que no quiera, es que no puedo)"], vocabulario: ["Decir que no en México sin decir «no»"] },
    preguntas: ["¿Cómo dices que no a un cliente sin ofenderlo?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ==================================================================
  //  MES 21
  // ==================================================================
  {
    n: 81, mes: 21, nivel: "C2", estado: "borrador",
    titulo: "El español de México",
    sugerencias: { parte1: ["¡Ándale!", "¡Híjole!", "¡Órale!"], parte2: ["Ahorita vengo", "Está cerquita", "Un carrote"] },
    parte1: { gramatica: ["El «le» de las expresiones mexicanas (ándale, órale, híjole, córrele)"], vocabulario: ["Mexicanismos y registro coloquial"] },
    parte2: { gramatica: ["Diminutivos y aumentativos (ahorita, cerquita, tantito; grandote, cansadón)"], vocabulario: ["Hablar como en la calle, con respeto y en su contexto"] },
    preguntas: ["¿Qué expresiones mexicanas ya usas?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 82, mes: 21, nivel: "C2", estado: "borrador",
    titulo: "Refranes y expresiones fijas",
    sugerencias: { parte1: ["Échame la mano", "No me tomes el pelo", "Hazme caso"], parte2: ["Donde fueres…", "Más vale tarde que nunca", "Al que madruga…"] },
    parte1: { gramatica: ["Expresiones con verbos de apoyo (echar la mano, dar lata, tomar el pelo, hacer caso)"], vocabulario: ["Refranes y dichos mexicanos"] },
    parte2: { gramatica: ["El futuro de subjuntivo para reconocerlo en refranes y textos legales (donde fueres, haz lo que vieres)"], vocabulario: ["Leer avisos legales y contratos"] },
    preguntas: ["¿Qué refrán de tu idioma se parece a uno mexicano?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 83, mes: 21, nivel: "C2", estado: "borrador",
    titulo: "El español formal escrito",
    sugerencias: { parte1: ["Se informa que…", "Fue aprobado", "Se les recuerda"], parte2: ["Estimado señor…", "Atentamente", "Sin más por el momento"] },
    parte1: { gramatica: ["Voz pasiva y «se» en textos formales (se informa que…, fue aprobado por…)"], vocabulario: ["Correos, informes y contratos"] },
    parte2: { gramatica: ["Puntuación y estilo: párrafos, conectores y cartas formales"], vocabulario: ["Fórmulas formales de saludo y despedida (estimado, atentamente, sin más por el momento)"] },
    preguntas: ["¿Cómo empiezas un correo formal en español?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
  // ------------------------------------------------------------------
  {
    n: 84, mes: 21, nivel: "C2", estado: "borrador",
    titulo: "Todo junto: proyecto final",
    sugerencias: { parte1: ["Mi historia con el español", "Lo que aprendí", "Todo junto"], parte2: ["Mi presentación", "Propuesta final", "¡Lo logré!"] },
    parte1: { gramatica: ["Repaso de los modos en textos reales (indicativo, subjuntivo e infinitivo)"], vocabulario: ["Proyecto final: tu empresa o tu viaje"] },
    parte2: { gramatica: ["Presentación oral final: narrar, argumentar y negociar"], vocabulario: ["Preparar y dar una presentación"] },
    preguntas: ["¿Qué es lo que más te ha servido del curso?"], cultura: [], notas: ["Semana nueva de nivel C2 (2026-11-19)."],
    actividades: [],
    palabras: [],
  },
];

// =====================================================================
//  KIT DE BIENVENIDA — para el alumno que entra a medio mes.
//  Lo básico de la semana 1 (que verá completa al final de su vuelta).
//  Se usa en una sesión corta con Anita (guía) y, más adelante, en el portal.
// =====================================================================
window.KIT_BIENVENIDA = {
  titulo: "Kit de bienvenida",
  para: "Para el alumno que entra a medio mes: lo mínimo para sobrevivir su primera clase con el grupo. La semana 1 completa (con negaciones, preguntas y todo el vocabulario) la verá al final de su vuelta del mes.",
  sugerencias: { parte1: ["¿Cómo suena el español?", "La h no suena", "¿Cómo lo deletreas?"], parte2: ["Hola, soy…", "Soy de Canadá", "Soy ingeniero"] },
  parte1: {
    gramatica: ["El alfabeto y la pronunciación: las 5 vocales, las letras que no suenan (h; u en que, qui, gue, gui), la «s» de México (z, c, s), el sonido de «h» (j, g, x), los gemelos (b y v, ll y y), d suave, t y p sin aire, r y rr, la ñ"],
    vocabulario: ["Saludos, presentaciones y frases para la clase", "Deletrear mi nombre"],
  },
  parte2: {
    gramatica: ["El verbo ser con todos sus pronombres, solo afirmaciones: ser de + país y ser + profesión (soy de Canadá, soy ingeniero)"],
    vocabulario: ["Países y nacionalidades", "Profesiones comunes"],
  },
  notas: [
    "Regla de la semana 1 y el kit: las frases de supervivencia se aprenden de memoria aunque su gramática se explique después (estar en la semana 7, poder en la 12, llamarse en los reflexivos).",
    "Diferencia con la semana 1: el kit solo tiene afirmaciones de ser. Negaciones, preguntas cerradas e interrogativos se ven en la semana 1 con el grupo.",
    "La explicación de la pronunciación (parte 1) es el material de Anita, en 8 diapositivas.",
    "No se enseña «vosotros»: en México se usa «ustedes».",
  ],
  // Explicación de la gramática (pestaña "Gramática" y futura presentación).
  // Regla de Anita: títulos en español, explicación en inglés, ejemplos en español.
  explicacion: {
    parte1: {
      formula: false,
      titulo: "El alfabeto y la pronunciación",
      revisada: false,
      pasos: [
        { titulo: "1. La base: las cinco vocales", texto: [
          "In English, vowels change their sound constantly. In Spanish, they are your best friends because they never change, no matter where they are in a word!",
          "A: sounds like the \"a\" in \"father\" → mande",
          "E: sounds like the \"e\" in \"let\" → bien",
          "I: sounds like the \"ea\" in \"tea\" → adiós",
          "O: sounds like the \"o\" in \"more\", short and without gliding into a \"w\" → cómo",
          "U: sounds like the \"oo\" in \"moon\" → usted",
        ]},
        { titulo: "2. Las letras que no suenan", texto: [
          "H (la hache): it is always 100% silent. Never breathe out an \"h\" sound → hola",
          "U in QUE and QUI: the \"u\" is silent; it sounds like \"ke\" and \"ki\" → ¿qué?, equipaje",
          "U in GUE and GUI: the \"u\" is silent, leaving a hard \"g\" sound → juguete, guía",
        ]},
        { titulo: "3. Los sonidos de «S» (regla del español de México)", texto: [
          "In Spain, some of these letters have a \"th\" lisp, but in Mexico they all make a crisp, simple English \"s\" sound.",
          "Z: always sounds like \"s\" → zócalo",
          "C (before E or I): sounds like \"s\" → ciudad",
          "S: sounds exactly like the English \"s\" → semana",
        ]},
        { titulo: "4. Los sonidos de «H»", texto: [
          "J (la jota): always makes a clear English \"h\" sound, like in \"hello\". It never sounds like the English \"j\" in \"jump\" → jueves",
          "G (before E or I): softens to make that same English \"h\" sound → gente",
          "X (in some Mexican place names): sounds like an \"h\" → México, Oaxaca",
        ]},
        { titulo: "5. Los gemelos idénticos", texto: [
          "American students often try to make these letters sound different, but in Mexico they are identical pairs!",
          "B and V: both sound like a soft English \"b\". There is no lip-biting \"v\" sound in Spanish → vaca (sounds like \"baka\"), verdad, bueno",
          "LL and Y: both sound like the English \"y\" in \"yes\" or \"yellow\" → me llamo, yo",
        ]},
        { titulo: "6. Para quitar el acento americano", texto: [
          "These are the physical adjustments that help you sound less American and more native.",
          "The soft D: when \"d\" is between two vowels, it softens to sound like the \"th\" in \"the\" or \"this\" → nada, todo, cada",
          "T and P (no puff of air!): in English we puff out air when saying T and P. In Spanish there is no puff of air. Keep your tongue right behind your front teeth for the T → tú, papá",
          "Single R in the middle of a word: a quick tap of the tongue, like the soft \"dd\" in \"ladder\" → pero, caro",
          "Double RR (or a single R at the very beginning of a word): the strong, rolled trill → perro, carro, restaurante",
        ]},
        { titulo: "7. El resto de las consonantes", texto: [
          "C (before A, O, U): hard \"k\" sound → caro",
          "CH: sounds like the \"ch\" in \"cheers\" → mucho",
          "CC: only before E or I, sounds like \"ks\" → dirección",
          "X (standard): usually sounds like \"ks\", just like in English → conexión",
        ]},
        { titulo: "8. La letra Ñ", texto: [
          "The Ñ (called «eñe») looks like an N wearing a little wavy hat, but it is a separate letter of the Spanish alphabet → mañana",
          "Don't let it intimidate you! Its sound is very familiar to English speakers.",
          "The shortcut: Ñ sounds like the \"ny\" in \"canyon\" or the \"ni\" in \"onion\".",
          "The technique: keep the tip of your tongue down, press the middle (flat part) of your tongue against the roof of your mouth, and let the air go through your nose.",
        ]},
      ],
    },
  },
  palabras: [
    { grupo: "Saludos y frases útiles", lista: [
      "Hola = Hello", "Buenos días = Good morning", "Buenas tardes = Good afternoon", "Buenas noches = Good evening / Good night",
      "Me llamo… / Mi nombre es… = My name is…", "Mi apellido es… = My last name is…", "Mucho gusto = Nice to meet you", "Estoy bien = I'm fine",
      "¿Cómo te llamas? / ¿Cuál es tu nombre? = What's your name?", "¿Cómo estás? = How are you?", "¿Cuál es tu apellido? = What's your last name?",
      "¿Cómo lo deletreas? = How do you spell it?", "¿Y tú? / ¿Y usted? = And you?", "¿Cómo se dice ___ en español? = How do you say ___ in Spanish?",
      "¿Qué significa ___? = What does ___ mean?", "¿Lo puede repetir, por favor? = Can you repeat that, please?", "Más despacio, por favor = Slower, please",
      "Un momento, por favor = One moment, please", "Perdón = Sorry / Excuse me", "Gracias = Thank you", "Mande = Pardon? / Yes? (polite, Mexico)",
      "Hasta luego = See you later", "Hasta mañana = See you tomorrow", "Adiós = Goodbye", "Nos vemos = See you", "Nos vemos luego = See you later",
      "Tengo que irme = I have to go",
    ]},
    { grupo: "El verbo ser", lista: [
      "yo soy = I am", "tú eres = you are (informal)", "usted es = you are (formal)", "él es = he is", "ella es = she is",
      "nosotros / nosotras somos = we are", "ustedes son = you are (plural)", "ellos / ellas son = they are",
    ]},
    { grupo: "Países y nacionalidades", lista: [
      "Estados Unidos = United States", "estadounidense = American", "Canadá = Canada", "canadiense = Canadian",
      "Reino Unido = United Kingdom", "británico / británica = British", "Australia = Australia", "australiano / australiana = Australian",
      "México = Mexico", "mexicano / mexicana = Mexican", "¿De dónde eres? = Where are you from?", "Soy de… = I'm from…",
    ]},
    { grupo: "Profesiones comunes", lista: [
      "ingeniero / ingeniera = engineer", "gerente = manager", "maestro / maestra = teacher", "médico / médica = doctor",
      "abogado / abogada = lawyer", "vendedor / vendedora = salesperson", "¿A qué te dedicas? = What do you do?",
    ]},
  ],
  // Guía para la sesión individual (30–45 min). Inicio → Desarrollo → Cierre.
  guia: [
    { momento: "Inicio", minutos: 10, pasos: [
      "Saludo y presentarnos (hola, me llamo…, mucho gusto).",
      "Conocer al alumno (en inglés si hace falta): ¿Para qué estudias español? ¿Viajas por trabajo o por turismo? ¿A qué ciudades de México vas? ¿Has estudiado español antes? ¿Cómo te gusta aprender: leyendo, hablando o escuchando?",
    ]},
    { momento: "Desarrollo", minutos: 25, pasos: [
      "Pronunciación: las 5 vocales y los sonidos que más cuestan al angloparlante (h muda, r y rr, ll / y, ñ, j).",
      "El alfabeto: deletrear su nombre y su apellido (¿Cómo lo deletreas?).",
      "Frases útiles: saludar, decir su nombre, pedir que repitan, despedirse.",
      "El verbo ser con todos los pronombres, solo afirmaciones; tú y usted (en México, en hoteles y oficinas se usa usted).",
      "Soy de… / soy + nacionalidad / soy + profesión.",
    ]},
    { momento: "Cierre", minutos: 10, pasos: [
      "Mini conversación: «Hola, me llamo… Soy de… Soy ingeniero. Mucho gusto».",
      "Explicarle el ciclo: en qué semana entra, que el orden del mes no importa y que verá la semana 1 completa al final de su vuelta.",
      "Darle el link a sus juegos y presentaciones (cuando esté el portal).",
    ]},
  ],
  // Si el alumno ya sabe algo de español: preguntas para saber en qué nivel entra.
  diagnostico: [
    { nivel: "A1", preguntas: ["¿Cómo te llamas? ¿Cómo se escribe?", "¿De dónde eres?", "¿A qué te dedicas?"] },
    { nivel: "A1 (final)", preguntas: ["¿Qué haces un día normal?", "¿Qué te gusta hacer en tu tiempo libre?", "Describe a una persona de tu familia."] },
    { nivel: "A2", preguntas: ["¿Qué hiciste el fin de semana?", "Cuéntame tu último viaje: ¿a dónde fuiste?, ¿cómo era el lugar?", "¿Cómo llego a tu casa desde el centro?"] },
    { nivel: "B1", preguntas: ["¿Qué harás el próximo año?", "¿Qué harías si tuvieras un mes de vacaciones?", "Dame tres consejos para viajar a tu ciudad."] },
    { nivel: "B2", preguntas: ["¿Qué te recomendaron antes de viajar a México?", "¿Qué habrías hecho diferente en tu último viaje?"] },
    { nivel: "C1", preguntas: ["¿Qué harías en caso de que se cancelara tu vuelo?", "Aunque te guste México, ¿qué cambiarías?"] },
    { nivel: "C2", preguntas: ["¿Qué es lo que más te ha costado del español?", "De haber sabido español antes, ¿qué habrías hecho diferente?"] },
  ],
};
