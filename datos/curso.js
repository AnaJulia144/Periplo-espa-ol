// =====================================================================
//  EL CURSO DE ANITA — fuente única del plan de estudios y vocabulario
// =====================================================================
//  Este archivo es la ÚNICA fuente: el panel y todos los juegos leen de aquí.
//  Si algo cambia (una palabra, un tema, una semana), se cambia SOLO aquí
//  y se actualiza en todo el sitio.
//
//  Cómo está escrito cada semana:
//    n            número de semana
//    nivel        A1, A2 o Avanzado (comparado con el Instituto Cervantes)
//    estado       "listo" (semanas 1–19, ya revisadas) o "borrador"
//    titulo       el tema principal
//    parte1/2     gramática y temas de vocabulario de cada parte
//    preguntas    lo que el alumno podrá responder al terminar
//    cultura      notas de cultura (México)
//    notas        recordatorios para Anita
//    actividades  ideas de actividades y juegos
//    palabras     listas de vocabulario. Cada palabra puede llevar su
//                 traducción después de " = "  (ej. "boda = wedding")
// =====================================================================

window.CURSO = [
  // ------------------------------------------------------------------
  {
    n: 1, nivel: "A1", estado: "listo",
    titulo: "Presentarse: el alfabeto, ser y pronombres",
    parte1: {
      gramatica: ["El alfabeto", "Verbo ser / ser de", "Pronombres personales"],
      vocabulario: ["Palabras generales de supervivencia", "Frases de saludo, pregunta, respuesta y despedida", "Países y nacionalidades"],
    },
    parte2: {
      gramatica: ["Ser + profesión y género (parte 1)"],
      vocabulario: ["Profesiones y roles", "Extranjero, viajero, estudiante", "Idiomas (por añadir)"],
    },
    preguntas: ["¿Cómo te llamas?", "¿Cuál es tu apellido?", "¿Cómo lo deletreas?", "¿De dónde eres?", "¿Eres mexicano?", "¿A qué te dedicas?"],
    cultura: ["Las abreviaturas van en minúscula (lic.)", "Licenciado", "Dos apellidos", "«Mande»", "Nombres y apellidos más comunes en México", "Tú y usted"],
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
    n: 2, nivel: "A1", estado: "listo",
    titulo: "Artículo definido singular y género",
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
    n: 3, nivel: "A1", estado: "listo",
    titulo: "Artículo definido plural y concordancia",
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
    n: 4, nivel: "A1", estado: "listo",
    titulo: "Usos de tener: posesión y edad",
    parte1: {
      gramatica: ["Usos de tener (posesión)"],
      vocabulario: ["Números del 1 al 20", "Cosas que la gente normalmente posee", "Explicar «treinta y un personas»"],
    },
    parte2: {
      gramatica: ["Usos de tener (edad)"],
      vocabulario: ["Decenas y números del 21 al 200", "Vocabulario de correo electrónico", "También / tampoco"],
    },
    preguntas: ["¿Cuántos años tienes?", "¿Cuál es tu número de teléfono?", "¿Cuál es tu correo electrónico?", "¿Cuál es tu dirección?", "¿Dónde vives?", "¿Cuál es tu código postal?"],
    cultura: ["Números en México", "Carro vs. coche", "¿Me pasas tu celular?", "¿Cuánto cuesta el viaje en carro?"],
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
    n: 5, nivel: "A1", estado: "listo",
    titulo: "Artículo indefinido + hay",
    parte1: {
      gramatica: ["Preposición en + el / la"],
      vocabulario: ["Cuartos"],
    },
    parte2: {
      gramatica: ["Artículo indefinido (un, una, unos, unas) + hay"],
      vocabulario: ["Objetos y muebles", "«Un abanico, una cama y un escritorio»"],
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
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 6, nivel: "A1", estado: "listo",
    titulo: "Demostrativos y precios",
    parte1: {
      gramatica: ["Demostrativos"],
      vocabulario: ["Este, ese, aquel / estos, esos, aquellos", "Artesanías, recuerdos y gastos del viajero"],
    },
    parte2: {
      gramatica: ["Verbo costar: cuesta vs. cuestan"],
      vocabulario: ["Números del 100 al 10 000", "Frase: «que le vaya bien»", "¿Cuánto es?"],
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
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 7, nivel: "A1", estado: "listo",
    titulo: "Querer + infinitivo e ir a + infinitivo",
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
  // ------------------------------------------------------------------
  {
    n: 8, nivel: "A1", estado: "listo",
    titulo: "Estar y preposiciones de lugar",
    parte1: {
      gramatica: ["Estar (ubicación)"],
      vocabulario: ["Lugares", "Explicar estar vs. hay"],
    },
    parte2: {
      gramatica: ["Contracciones del / al y «de la»"],
      vocabulario: ["Preposiciones de lugar", "Por aquí, por allá, hasta allá"],
    },
    preguntas: ["¿En dónde está…?", "¿Dónde vives?"],
    cultura: ["Tiendas comunes en México"],
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
    n: 9, nivel: "A1", estado: "listo",
    titulo: "Adjetivos posesivos y descripción física",
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
    n: 10, nivel: "A1", estado: "listo",
    titulo: "Verbos regulares -AR, -ER, -IR y frecuencia",
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
  // ------------------------------------------------------------------
  {
    n: 11, nivel: "A1", estado: "listo",
    titulo: "La hora y expresiones de tiempo",
    parte1: {
      gramatica: ["Verbos regulares en presente -AR, -ER, -IR", "El presente con sentido de futuro"],
      vocabulario: ["Acciones comunes", "Iniciar, terminar, abrir", "Eventos"],
    },
    parte2: {
      gramatica: ["Estructura de la hora", "Preposiciones de tiempo: a la(s)"],
      vocabulario: ["Expresiones de tiempo", "Momentos del día", "¿Cuánto dura?", "Desde… hasta"],
    },
    preguntas: ["¿Qué horas son?", "¿Cuánto dura…?", "¿A qué hora abre…?", "¿Qué día es hoy?", "¿A qué fecha estamos hoy?", "¿Qué fecha es hoy?", "¿Cuándo es…?"],
    cultura: ["El bautizo", "Los quince años", "Las horas en una fiesta"],
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
    n: 12, nivel: "A1", estado: "listo",
    titulo: "Verbos irregulares en presente",
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
        "conocer = to know (people, places) / to meet", "conducir = to drive", "producir = to produce", "venir = to come", "decir = to say / to tell", "ver = to see / to watch", "saber = to know (facts)", "dar = to give", "ir = to go",
      ]},
      { grupo: "Complementos (mismo orden que los verbos)", lista: [
        "la gramática del español = Spanish grammar", "en los juegos = in games", "un café con pan = a coffee with sweet bread", "a mis amigos = to my friends", "la dirección = the address",
        "a otra ciudad por trabajo = to another city for work", "a la 1:00 p. m. = at 1:00 p.m.", "los problemas = the problems", "chistes = jokes", "platillos nuevos = new dishes", "videojuegos = video games",
        "comida a domicilio = food delivery", "las instrucciones = the instructions", "la comida = the food / lunch", "los ejercicios = the exercises", "el mismo restaurante = the same restaurant",
        "los viernes = on Fridays", "ejercicio = exercise", "lonche al trabajo = a packed lunch to work", "documentos = documents", "difícil = difficult", "gente nueva = new people", "despacio = slowly",
        "artículos = items / products", "temprano a las reuniones = early to meetings", "la verdad = the truth", "películas = movies", "las respuestas de los ejercicios = the answers to the exercises",
        "clases = classes", "al gimnasio = to the gym",
      ]},
    ],
  },
  // ------------------------------------------------------------------
  {
    n: 13, nivel: "A1", estado: "listo",
    titulo: "Adjetivos de personalidad y ser vs. estar",
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
    n: 14, nivel: "A1", estado: "listo",
    titulo: "Tener + sensaciones y deberías + infinitivo",
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
    n: 15, nivel: "A1", estado: "listo",
    titulo: "Sustantivos contables y no contables",
    parte1: {
      gramatica: ["Sustantivos contables"],
      vocabulario: ["Comida contable", "Unidades y cantidades"],
    },
    parte2: {
      gramatica: ["Sustantivos no contables"],
      vocabulario: ["Comida no contable", "Muy vs. mucho"],
    },
    preguntas: ["¿Qué es lo que normalmente desayunas?", "¿Cuántos / cuántas…?"],
    cultura: ["Comidas mexicanas"],
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
    n: 16, nivel: "A1", estado: "listo",
    titulo: "Verbos reflexivos y la rutina",
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
    n: 17, nivel: "A1", estado: "listo",
    titulo: "Tener que / deber y pronombres de objeto directo",
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
  // ------------------------------------------------------------------
  {
    n: 18, nivel: "A2", estado: "listo",
    titulo: "Presente progresivo",
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
    n: 19, nivel: "A2", estado: "listo",
    titulo: "Pretérito indefinido: verbos regulares",
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
  //  BORRADOR: semanas 20 en adelante, copiadas tal cual de la hoja.
  //  Se van a reinventar con Anita.
  // ==================================================================
  {
    n: 20, nivel: "A2", estado: "borrador",
    titulo: "Pretérito Indefinido de verbos completamente irregulares de alta frecuencia",
    parte1: { gramatica: ["Pretérito Indefinido de verbos completamente irregulares de alta frecuencia", "(Ser, Ir, Hacer, Tener, Estar)."], vocabulario: ["Anécdotas de viajes, accidentes cotidianos y problemas del pasado", "(perder las llaves, romper algo, llegar tarde)."] },
    parte2: { gramatica: [], vocabulario: ["Conectores discursivos de narración pasada", "(al principio, de repente, finalmente, entonces)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 21, nivel: "A2", estado: "borrador",
    titulo: "La posición de los pronombres de Objeto Directo con verbos en pasado simple",
    parte1: { gramatica: ["La posición de los pronombres de Objeto Directo con verbos en pasado simple"], vocabulario: ["Pretérito Indefinido), reforzando que siempre van antes del verbo conjugado (\"Ayer compré la camisa y la usé\").", "Grandes logros y metas cumplidas en el pasado", "Verbos y frases comunes para describir hitos alcanzados", "terminar la carrera, comprar una casa, ganar un premio, resolver un problema"] },
    parte2: { gramatica: ["El uso de los pronombres de Objeto Directo con los verbos irregulares que acaban de aprender en la semana anterior"], vocabulario: ["(\"¿Hiciste la tarea? Sí, la hice\", \"¿Tuviste el reporte? Sí, lo tuve\").", "Acciones de consumo y compras pasadas", "Sustantivos ideales de objetos cotidianos que sirven como el blanco perfecto para ser sustituidos por los pronombr", "(el carro, las llaves, la cena, los boletos/billetes)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 22, nivel: "A2", estado: "borrador",
    titulo: "haber mas participio regular",
    parte1: { gramatica: ["haber mas participio regular", "Pretérito Perfecto Compuesto:"], vocabulario: ["Marcadores temporales de experiencias sin tiempo específico o recientes", "(hoy, este año, esta semana, alguna vez, nunca, ya, todavía no)"] },
    parte2: { gramatica: ["Hitos profesionales y logros personales", "participios irregulares de alta frecuencia"], vocabulario: ["(ganar un premio, cambiar de carrera, viajar al extranjero, aprender una habilidad)"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 23, nivel: "A2", estado: "borrador",
    titulo: "preterito indefinido vs preterito perfecto",
    parte1: { gramatica: ["preterito indefinido vs preterito perfecto", "me he levantado"], vocabulario: ["Actividades culturales, eventos sociales y entretenimiento"] },
    parte2: { gramatica: ["posición invariable de los pronombres con tiempos compuestos"], vocabulario: ["Expresiones para valorar experiencias o eventos", "fue un desastre, fue genial, estuvo increible"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 24, nivel: "A2", estado: "borrador",
    titulo: "y sus únicos tres verbos irregulares (Ser → era, Ir → iba, Ver → veía).",
    parte1: { gramatica: ["y sus únicos tres verbos irregulares (Ser → era, Ir → iba, Ver → veía).", "Conjugación regular para describir el pasado (-aba / -ía: cantaba, comía)"], vocabulario: ["Pretérito Imperfecto"] },
    parte2: { gramatica: [], vocabulario: ["Había", "Marcadores temporales de hábito en el pasado", "(antes, de niño/a, en aquella época, todos los días, a menudo)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 25, nivel: "A2", estado: "borrador",
    titulo: "(la descripción del escenario, la hora y el clima: ¿Cómo era la situación?)",
    parte1: { gramatica: ["(la descripción del escenario, la hora y el clima: ¿Cómo era la situación?)"], vocabulario: ["contraste definitivo entre Pretérito Indefinido (las acciones y el avance de la historia:", "¿Qué pasó?) frente al Pretérito Imperfecto", "Accidentes cotidianos y emergencias", "(caerse, torcerse el tobillo, quemarse, cortarse).", "me duele"] },
    parte2: { gramatica: [], vocabulario: ["Conectores avanzados de narración pasada", "(mientras, al mismo tiempo, de pronto, por suerte, por desgracia).", "partes del cuerpo humano", "el/la médico/a, las radiografías, las pastillas, la receta)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 26, nivel: "A2", estado: "borrador",
    titulo: "verbos con preposicion y pronombre de objeto preposicional",
    parte1: { gramatica: ["verbos con preposicion y pronombre de objeto preposicional", "Los Pronombres de Objeto Preposicional (O tónicos)"], vocabulario: ["Networking, dinámicas de trabajo en equipo y relaciones interpersonales", "depender de, confiar en, contar con, colaborar con, estar de acuerdo con, hablar de"] },
    parte2: { gramatica: ["preposiciones (a, de, en, con, por, para)."], vocabulario: ["el colega, el jefe, el equipo, el socio, el cliente"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 27, nivel: "A2", estado: "borrador",
    titulo: "Verbos Auxiliares + Verbos infinitivo",
    parte1: { gramatica: ["Verbos Auxiliares + Verbos infinitivo"], vocabulario: ["Preparativos, bienestar y cuidado personal en viajes de trabajo"] },
    parte2: { gramatica: ["para"], vocabulario: [] },
    preguntas: ["¿Por qué quieres aprender español?"], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 28, nivel: "A2", estado: "borrador",
    titulo: "comparativos",
    parte1: { gramatica: ["comparativos"], vocabulario: ["adjetivos de descripcion urbana", "y geografica"] },
    parte2: { gramatica: ["superlativos"], vocabulario: ["lugares de ocio", "actividades culturales", "transportes de una ciudad"] },
    preguntas: ["¿que piensas?", "¿Cuál ciudad es más tranquila México o Monterrey?"], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 29, nivel: "Avanzado", estado: "borrador",
    titulo: "infinitivo verbo ser adjetivo",
    parte1: { gramatica: ["infinitivo verbo ser adjetivo"], vocabulario: ["pasatiempos", "jugar futbol es divertido"] },
    parte2: { gramatica: [], vocabulario: [] },
    preguntas: ["¿que prefieres?"], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 30, nivel: "Avanzado", estado: "borrador",
    titulo: "Pronombres de Objeto Indirecto (para dirección de acciones)",
    parte1: { gramatica: ["Pronombres de Objeto Indirecto (para dirección de acciones)", "verbos de afección en presente: Gustar,", "Encantar, Interesar, Fascina y me duele", "(la regla de concordancia con el objeto:", "me gusta [singular] frente a me gustan [plural])."], vocabulario: ["Actividades de ocio, pasatiempos y hobbies"] },
    parte2: { gramatica: ["y la clarificación de terceras personas mediante la preposición \"A\"", "(\"A Juan le interesa\", \"A mis padres les encanta\").", "a mí también", "Uso obligatorio de los pronombres de", "Objeto Indirecto (me, te, le, nos, os, les)"], vocabulario: ["Entretenimiento, cultura y espectáculos: Tipos de géneros musicales,", "cinematográficos y artístico"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 31, nivel: "Avanzado", estado: "borrador",
    titulo: "Sustantivos de objetos del hogar y oficina propensos a cambiar de estado:",
    parte1: { gramatica: ["Sustantivos de objetos del hogar y oficina propensos a cambiar de estado:", "El Participio como Adjetivo Calificativo"], vocabulario: ["(la carta, el vaso, los platos, la comida, los cables, la luz)."] },
    parte2: { gramatica: ["Adjetivos de estado físico, civil y emocional derivados de participios", "Sustantivos de objetos del hogar y oficina propensos a cambiar de estado:"], vocabulario: ["(casado, divorciado, aburrido, cansado, roto, hecho, ordenado, limpio, sucio)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 32, nivel: "Avanzado", estado: "borrador",
    titulo: "apariencia fisica II",
    parte1: { gramatica: [], vocabulario: ["apariencia fisica II"] },
    parte2: { gramatica: [], vocabulario: [] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 33, nivel: "Avanzado", estado: "borrador",
    titulo: "Pronombres Posesivos con artículo:",
    parte1: { gramatica: ["Pronombres Posesivos con artículo:"], vocabulario: ["ropa"] },
    parte2: { gramatica: ["Posesivos Tónicos posnominales de énfasis"], vocabulario: ["accesorios"] },
    preguntas: ["Mi blusa es más pequeña que la tuya."], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 34, nivel: "Avanzado", estado: "borrador",
    titulo: "adverbios de modo",
    parte1: { gramatica: ["adverbios de modo"], vocabulario: ["animales", "adverbios de modo"] },
    parte2: { gramatica: ["adverbios de modo comparativo y superlativo"], vocabulario: ["acciones comunes de rendimiento y estilo"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 35, nivel: "Avanzado", estado: "borrador",
    titulo: "El \"Se\" impersonal para entender reglas y letreros",
    parte1: { gramatica: ["El \"Se\" impersonal para entender reglas y letreros"], vocabulario: [] },
    parte2: { gramatica: ["hace vs esta"], vocabulario: ["Tipos de clima, geografía y meteorología para la planificación de vacaciones", "hace frío, esta frío"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 36, nivel: "Avanzado", estado: "borrador",
    titulo: "conectores",
    parte1: { gramatica: ["conectores"], vocabulario: ["pero, sin embargo, y, ya, aunque, incluso, por , para"] },
    parte2: { gramatica: ["tilde, aguda, grave, esdrujula, sobresdrujula"], vocabulario: ["palabras homófonoas con tilde diacrítica"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 37, nivel: "Avanzado", estado: "borrador",
    titulo: "El Pretérito Pluscuamperfecto de Indicativo:",
    parte1: { gramatica: ["El Pretérito Pluscuamperfecto de Indicativo:", "formación regular e irregular con el auxiliar Haber en imperfecto"], vocabulario: ["Excusas, malentendidos y aclaraciones de situaciones en el pasado"] },
    parte2: { gramatica: ["La posición invariable de los pronombres con tiempos compuestos"], vocabulario: ["Conectores de anterioridad temporal (ya, antes de, en ese momento"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 38, nivel: "Avanzado", estado: "borrador",
    titulo: "Los pronombres y adverbios relativos de definición",
    parte1: { gramatica: ["Los pronombres y adverbios relativos de definición"], vocabulario: ["Fórmulas conversacionales para definir y aclarar palabras"] },
    parte2: { gramatica: [], vocabulario: ["lo que quiero decir, lo que pasa"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 39, nivel: "Avanzado", estado: "borrador",
    titulo: "Imperativo Afirmativo Regular e Irregular",
    parte1: { gramatica: ["Imperativo Afirmativo Regular e Irregular"], vocabulario: ["Recetas y recomendaciones de bienestar", "verbos y complementos como sal, azúcar, nuez"] },
    parte2: { gramatica: ["pronombres enclíticos"], vocabulario: ["Dar indicaciones de dirección (Superviviencia en la calle)"] },
    preguntas: ["Categoría de Vocabulario: Expresiones de liderazgo, trabajo en equipo y toma de decisiones corporativas (ej. ¡Resolvamos este problema!, ¡Vayamos a la junta!)."], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 40, nivel: "Avanzado", estado: "borrador",
    titulo: "imperativo negativo",
    parte1: { gramatica: ["imperativo negativo", "mostrando de forma clara el cambio vocálico característico (-ar → -es / -er, -ir → -as)"], vocabulario: ["Señales de tránsito y normas de convivencia urbana", "Reglas comunitarias y de manejo", "(prohibido estacionarse, no fumar, respetar el límite de velocidad, no hacer ruido)."] },
    parte2: { gramatica: ["pronombres con el imperativo negativo", "los pronombres van obligatoriamente antes del verbo"], vocabulario: ["Advertencias y consejos de seguridad", "Frases de cuidado cotidiano", "(no abras la puerta a desconocidos, no camines de noche por ahí, ten cuidado)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 41, nivel: "Avanzado", estado: "borrador",
    titulo: "Pronombres Indefinidos invariables (alguien, nadie, algo, nada)",
    parte1: { gramatica: ["Pronombres Indefinidos invariables (alguien, nadie, algo, nada)", "y variables de cantidad (alguno, ninguno, demasiado, bastante)."], vocabulario: ["Sustantivos de cantidad imprecisa: Expresiones para medir abundancia o escasez", "(el dinero, el tiempo, el espacio, las ganas, las opciones)."] },
    parte2: { gramatica: ["Doble Negación en español y la posición del adverbio \"no\" en la frase", "(\"Nadie vino\" frente a \"No vino nadie\")."], vocabulario: ["Expresiones cotidianas de queja o reclamo en presente", "Frases reales para justificar la falta de algo", "(\"No tengo ninguna opción\", \"Aquí nunca hay nada\", \"Nadie me ayuda\")."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 42, nivel: "Avanzado", estado: "borrador",
    titulo: "Futuro Simple / Imperfecto",
    parte1: { gramatica: ["Futuro Simple / Imperfecto", "morfología de la conjugación regular (-ré, -rás, -rá, -remos, -réis, -rán)", "e irregulares de alta frecuencia en la raíz (tendré, haré, podré, sabré, vendré)."], vocabulario: ["Horóscopos, predicciones del futuro, el destino,", "las profecías y proyectos personales a largo plazo"] },
    parte2: { gramatica: ["El uso del futuro para expresar probabilidad o hipótesis en el presente", "(\"—¿Qué hora es? —No sé, serán las 4:00\", \"—¿Dónde está María? —Estará trabajando\")."], vocabulario: ["Ciencia, tecnología del mañana, inteligencia artificial,", "el avance de la medicina y el medio ambiente futuro."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 43, nivel: "Avanzado", estado: "borrador",
    titulo: "Condicional Simple",
    parte1: { gramatica: ["Condicional Simple", "morfología de la conjugación regular (-ría, -rías, -ría, -ríamos, -ríais, -rían)", "y sus raíces irregulares (que son exactamente las mismas que las del", "Futuro Simple: tendría, haría, podría)."], vocabulario: ["Dilemas morales, toma de decisiones y situaciones hipotéticas extravagantes", "(\"¿Qué harías con un millón de dólares?\", \"Si fueras invisible por un día...\")."] },
    parte2: { gramatica: ["Estructuras de deseos y situaciones imaginarias o realizables en el presente", "(\"Yo viajaría a Europa, pero no tengo dinero\", \"¿Qué harías tú en esa situación"], vocabulario: ["Planes frustrados o excusas justificadas en presente: Vocabulario para explicar por qué", "no se puede hacer una acción (por falta de tiempo, por cuestiones de dinero, debido al trabajo)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 45, nivel: "Avanzado", estado: "borrador",
    titulo: "El uso del Condicional Simple como fórmula de cortesía",
    parte1: { gramatica: ["El uso del Condicional Simple como fórmula de cortesía", "extrema para suavizar peticiones o deseos en establecimientos", "(\"¿Podría traerme la cuenta, por favor?\", \"Me gustaría reservar una mesa\")"], vocabulario: ["Fórmulas y frases hechas para dar consejos financieros,", "de salud, profesionales o amorosos."] },
    parte2: { gramatica: ["Estructuras fijas para dar consejos o", "sugerencias de forma empática usando el condicional"], vocabulario: ["Vocabulario avanzado de atención al cliente,", "modales formales en hoteles, restaurantes o citas de negocios"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 46, nivel: "Avanzado", estado: "borrador",
    titulo: "Presente de Subjuntivo",
    parte1: { gramatica: ["Presente de Subjuntivo", "Morfología regular y su detonante principal a través de estructuras de deseo", "(\"Quiero que...\" / \"Espero que...\" + Subjuntivo)."], vocabulario: ["Felicitaciones, buenos deseos y rituales sociales:", "Frases hechas de cortesía hispana", "(¡Que tengas un buen día!, ¡Que te recuperes pronto!,", "¡Que cumplas muchos más!, ¡Buen provecho!)."] },
    parte2: { gramatica: ["\"Quiero viajar\") frente a usar Subjuntivo (dos sujetos diferentes: \"Quiero que tú viajes\").", "Planes e ideales de vida para otras personas:", "La diferencia fundamental entre usar Infinitivo (mismo sujeto: \"Quiero viajar\")"], vocabulario: ["Expresar deseos para la familia o amigos", "(desear que consigan trabajo, esperar que sean felices, querer que viajen)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 47, nivel: "Avanzado", estado: "borrador",
    titulo: "La Voz Pasiva con el verbo Ser + Participio y",
    parte1: { gramatica: ["La Voz Pasiva con el verbo Ser + Participio y"], vocabulario: ["el uso de la preposición Por para introducir al agente"] },
    parte2: { gramatica: ["La pasiva refleja con el pronombre \"SE\" para acciones donde el agente no importa.", "(\"Se venden libros\", \"Se arrienda casa\")"], vocabulario: ["Vocabulario de la literatura, redacción de ensayos e historia"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 48, nivel: "Avanzado", estado: "borrador",
    titulo: "Combinación de Pronombres de Objeto Directo e Indirecto",
    parte1: { gramatica: ["Combinación de Pronombres de Objeto Directo e Indirecto", "Reglas de colocación (\"Indirecto + Directo\": me lo, te la, nos los", "el cambio obligatorio de le/les por \"SE\" frente a lo/la/los/las."], vocabulario: ["Verbos de transferencia e intercambio de información", "dar, regalar, prestar, enviar, entregar, vender, contar una historia)."] },
    parte2: { gramatica: ["infinitivos, gerundios e imperativos", "(\"Se lo tengo que enviar\" frente a \"Tengo que enviárselo\", o ¡Dámelo!).", "Objetos cotidianos y de oficina comunes para sustituir", "La doble posición de los pronombres combinados"], vocabulario: ["Sustantivos que servirán como objeto directo en las dinámicas", "(el paquete, el regalo, las llaves, el secreto, el dinero)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 49, nivel: "Avanzado", estado: "borrador",
    titulo: "El Subjuntivo en estructuras de sentimiento de tipo invertido",
    parte1: { gramatica: ["El Subjuntivo en estructuras de sentimiento de tipo invertido", "(\"Me alegra que...\", \"Me molesta que...\")."], vocabulario: ["Estados de ánimo avanzados y respuestas psicológicas", "(la frustración, el enfado/enojo, la sorpresa, la decepción, el alivio)."] },
    parte2: { gramatica: ["Verbos de irregularidad fuerte en Presente de Subjuntivo", "(Sea, Vaya, Sepa, Haya)."], vocabulario: ["Convivencia y relaciones interpersonales: acciones comunes de la gente que generan roces", "(llegar tarde, mentir, hacer ruido, olvidar cosas)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 50, nivel: "Avanzado", estado: "borrador",
    titulo: "Estructuras de valoración con construcciones impersonales",
    parte1: { gramatica: ["Estructuras de valoración con construcciones impersonales", "Es bueno que...\" / \"Es importante que...\" / \"Es una lástima que...\" + Subjuntivo."], vocabulario: ["Problemáticas urbanas y sociales del mundo actual ideales para debatir", "(el tráfico, la contaminación, la seguridad, el costo de la vida)."] },
    parte2: { gramatica: ["El contraste definitivo de opinión y certeza: Indicativo frente a Subjuntivo", "Indicativo frente a Subjuntivo (\"Creo que...\" [Indicativo] frente a \"No creo que...\" [Subjuntivo])."], vocabulario: ["Fórmulas discursivas de argumentación para defender un punto de vista", "(desde mi punto de vista, opino que, es fundamental considerar...)."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 51, nivel: "Avanzado", estado: "borrador",
    titulo: "Revisión global de la alternancia de modos",
    parte1: { gramatica: ["Revisión global de la alternancia de modos", "(Cuándo usar Indicativo, Infinitivo o Subjuntivo dentro de una misma conversación)."], vocabulario: ["Expresiones idiomáticas de nivel avanzado y modismos del lenguaje coloquial real"] },
    parte2: { gramatica: ["Marcadores discursivos avanzados de cohesión y conectores textuales", "(en resumen, por lo tanto, en primer lugar)."], vocabulario: ["Fórmulas de despedida formal e informal para cartas,", "correos electrónicos o discursos de cierre de curso."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 52, nivel: "Avanzado", estado: "borrador",
    titulo: "Estilo Indirecto en Presente para reportar",
    parte1: { gramatica: ["Estilo Indirecto en Presente para reportar", "discursos y peticiones de otros (\"Dice que...\")."], vocabulario: ["Verbos de habla, reporte y transmisión comunicativa (comentar, asegurar, negar, explicar)."] },
    parte2: { gramatica: ["Modificaciones obligatorias de los pronombres personales posesivos al transmitir un mensaje", "(\"—Mi casa es grande\" \\(\\rightarrow \\) \"Él dice que su casa es grande\")."], vocabulario: ["Fórmulas para transmitir recados telefónicos o mensajes pendientes en la oficina"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 53, nivel: "Avanzado", estado: "borrador",
    titulo: "Introducción al Pretérito Imperfecto de Subjuntivo: morfología de la conjugación regular",
    parte1: { gramatica: ["Introducción al Pretérito Imperfecto de Subjuntivo: morfología de la conjugación regular", "(-ara / -iera: hablara, comiera) basada en la tercera persona plural del pasado (hablaron \\(\\rightarrow \\) hablara)."], vocabulario: ["Sueños frustrados, utopías y deseos de cambios globales (acabar con la pobreza, viajar al espacio)"] },
    parte2: { gramatica: ["Expresión de deseos imposibles o improbables en el presente mediante la partícula \"Ojalá", "(\"¡Ojalá tuviera más dinero!\", \"¡Ojalá hiciera calor!\")."], vocabulario: ["Expresiones idiomáticas basadas en la nostalgia y el anhelo (\"¡Quién fuera rico!\", \"A buenas horas\")."] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 54, nivel: "Avanzado", estado: "borrador",
    titulo: "Oraciones condicionales improbables o imaginarias en presente mediante la estructura",
    parte1: { gramatica: ["Oraciones condicionales improbables o imaginarias en presente mediante la estructura", "Si + Imperfecto de Subjuntivo + Condicional Simple (\"Si tuviera tiempo, viajaría a la playa\")."], vocabulario: ["Dilemas éticos avanzados, toma de decisiones críticas en empresas o situaciones límite de supervivencia."] },
    parte2: { gramatica: ["Las irregularidades de la raíz en Imperfecto de Subjuntivo", "(que provienen de tus pasados de la Semana 24 tuviera, hiciera, fuera, estuviera)."], vocabulario: ["Planes alternativos y justificaciones hipotéticas ante imprevistos cotidianos"] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 55, nivel: "Avanzado", estado: "borrador",
    titulo: "Tiempos Compuestos del Indicativo",
    parte1: { gramatica: ["Tiempos Compuestos del Indicativo", "Futuro Perfecto (habré terminado) y Condicional Compuesto (habría ido)."], vocabulario: ["Proyecciones corporativas a largo plazo, evaluación de proyectos finalizados", "y arrepentimientos financieros o personales (ej. Para el 2030, habremos expandido el mercado", "Yo habría invertido en esa empresa, pero no tenía presupuesto)."] },
    parte2: { gramatica: [], vocabulario: [] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
  {
    n: 56, nivel: "Avanzado", estado: "borrador",
    titulo: "Tiempos Compuestos del Subjuntivo",
    parte1: { gramatica: ["Tiempos Compuestos del Subjuntivo", "Pretérito Perfecto de Subjuntivo (haya terminado)", "Pretérito Pluscuamperfecto de Subjuntivo (hubiera / hubiese terminado)."], vocabulario: ["Evaluaciones de desempeño, feedback laboral, y condicionales irreales del pasad", "(ej. Me alegra que hayamos cerrado el trato, Si hubiéramos lanzado el producto antes, tendríamos más clientes)."] },
    parte2: { gramatica: [], vocabulario: [] },
    preguntas: [], cultura: [], notas: [],
    actividades: [],
    palabras: [],
  },
];
