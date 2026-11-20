# CLAUDE.md — Memoria del proyecto de Anita

> Este archivo es la memoria del proyecto. Claude lo lee al empezar cada sesión.
> Aquí se anota quién es Anita, qué estamos construyendo, qué decidimos y qué le gusta.
> **Idioma: todo en español.**

---

## 1. Quién es Anita

- Maestra de español para estudiantes **angloparlantes**. Clases **en vivo**, en **grupos pequeños**.
- Tiene **su propio plan de estudios** (ver sección 11).
- Antes "programaba" pidiéndole juegos HTML a Gemini. Los juegos quedaban dentro de Gemini y mandaba el link por WhatsApp. Si un alumno quería volver a jugar, tenía que buscar el link en el chat. **Ese es el problema que resolvemos.**
- Es nueva en GitHub, VS Code y Vercel.

### Cómo hablarle
- Español sencillo, sin tecnicismos.
- Si uso una palabra técnica, la explico en una línea.
- Después de cada cambio, decirle **cómo verlo en su navegador**.

---

## 2. Qué construimos

Un sitio web propio con sus juegos de clase:

1. **Panel de maestra (admin):** crear, editar, organizar y borrar juegos y su contenido (palabras, oraciones, preguntas). Desde ahí también **lanza** los juegos en clase.
2. **Portal de alumnos:** un solo lugar donde los alumnos encuentran todos sus juegos y vuelven cuando quieran.
3. **Sus 5 juegos** (ya existen en Gemini; Anita pegará el código de cada uno):
   - UNO
   - Serpientes y escaleras
   - Flashcards
   - Match
   - Completar oraciones (el más nuevo)

**Orden de trabajo:** primero el esqueleto (panel + portal), luego los juegos uno por uno.

---

## 3. Infraestructura (es solo de Anita)

- **Repo:** GitHub `AnaJulia144/Periplo-espa-ol`. **Carpeta local única:** `C:\Users\user\Documents\GitHub\Periplo-español` (abrir ESA carpeta en VS Code).
- **Publicación:** Vercel (cuenta en verificación). Si tarda, usamos **GitHub Pages** mientras.
- **Datos:** su propio Firebase (Firestore y, si hace falta, Auth). **Aún no está creado** → guiarla paso a paso cuando toque.
  - La configuración web de Firebase **sí** puede ir en el código (es pública por diseño).
  - **Nunca** guardar API keys de Gemini u otra IA en el código ni en un commit.
- **Independiente de Periplo** (el proyecto de Israel): no compartimos repo, Vercel ni Firebase.

---

## 4. Cómo migrar un juego de Gemini

Cuando Anita pegue código de Gemini:

- Convertirlo en un **.html que funcione solo**, publicable en Vercel. Nada que dependa de Gemini.
  - Gemini Canvas suele usar variables mágicas (`__firebase_config`, `__app_id`, `__initial_auth_token`) o imports que solo funcionan ahí → **reemplazarlas por cosas reales**.
- **Separar contenido y juego:** las palabras/oraciones NO van dentro del juego. Se capturan en el panel y el juego las lee (primero de un archivo de datos, luego de Firebase).
  - Un mismo juego sirve para muchos temas.
  - Una misma lista de palabras alimenta varios juegos (flashcards, match, UNO…).
- **Respetar la mecánica** que ya conocen los alumnos, pero con **el look del sitio de Anita**.
- Proponer si cada juego necesita "editor" + "pantalla de juego", o algo mejor.

---

## 5. Stack técnico (sugerido)

Es el que usa Israel, para que él pueda ayudar si Anita se atora:

- Archivos HTML sueltos, **sin paso de compilación**.
- React 18 + Babel desde CDN, Tailwind desde CDN.
- Firebase JS SDK modular desde gstatic.
- **Versiones fijas** en los links (nunca `@latest`).
- Si hay algo más simple que funcione mejor para Anita, proponérselo.

---

## 6. Periplo como inspiración (no como molde)

Ver Periplo como **guía de ideas**, no para copiar. El sitio debe tener la personalidad de Anita (sus colores, su forma, su panel). Preguntarle qué le gusta.

El repo de Israel es privado. Si necesito ver cómo resolvió algo, pedírselo a Anita para que se lo pida a Israel.

**Lo viejo — panel de maestra de Periplo (`index-es.html`, Anita ya lo usa):**
- Carpetas por tipo de juego. Cada juego tiene un **dashboard** (editor que guarda en Firebase) y un **renderer** (pantalla de juego que lee el contenido por link `?id=...&uid=...`).
- Alumnos entran por link o código.

**Lo nuevo de Israel (demos públicos):**
- Student Book (maqueta): https://proyecto-periplo.vercel.app/student_book.html?demo=1&mock=1 — Inicio con ruta por ciudades (cada semana una parada), librero por módulo, libreta con tablas de gramática. Personaje guía (Yostin) que le dice al alumno dónde se quedó, sin presionar.
- Combustible (primer paso gratis): https://proyecto-periplo.vercel.app/student_book.html?demo=1 — personaje (Brayan), 8 temas × 3 rondas (1 enseña, 2 audio, 3 reto).
- Yostin explica: https://proyecto-periplo.vercel.app/yostin.html?id=a1-s1-can-1 — lección de gramática paso a paso con personaje (reemplazó diapositivas).
- **Minijuegos compartidos:** un solo archivo con mecánicas (relacionar, deletrear, opción múltiple, lluvia de palabras) reutilizadas con distinto contenido. **A Anita esta idea SÍ le interesa:** construir una mecánica una vez y usarla con todo su plan de estudios.

---

## 7. Cómo trabajamos

- Antes de **decisiones grandes** (diseño, estructura, cómo entran los alumnos): preguntar y dar **2 o 3 opciones con mi recomendación**.
- Después de cada cambio: explicar cómo verlo en el navegador.
- **Subir a GitHub: Anita autorizó (2026-11-16) hacer commit + push cada vez que sea necesario**, sin esperar a que lo pida. Siempre: `git pull` → commit con mensaje claro **en español** → `git push`. (Si el push falla por "Cannot prompt", repetir con `$env:GCM_INTERACTIVE='always'; $env:GIT_TERMINAL_PROMPT='1'`.)
- **Mostrar, no mandar a abrir archivos:** Anita no es programadora. Cuando pida ver vocabulario, una semana o la tabla de proyectos, **dibujarla en el chat como tabla**, sin mandarla a abrir archivos y sin cortar lo que estemos haciendo.
- Ir anotando en este archivo lo que decidamos y lo que le gusta.
- **Bitácora (`BITACORA.md`):** al empezar cada sesión, leerla. Al terminar, actualizar el proyecto en el que trabajamos ("dónde me quedé" y "siguiente paso") y agregar una línea al *Registro de sesiones*. Los 5 proyectos: (1) plan de estudios oficial, (2) hub + portal, (3) código de los juegos, (4) versiones de los juegos, (5) seguimiento de David.

---

## 8. Decisiones tomadas

_(se irá llenando)_

- 2026-11-15: Arranque del proyecto. Repo vacío; se crea este CLAUDE.md.
- 2026-11-15: **Nombre del proyecto: "Periplo-español"** (se queda como está el repo).
- 2026-11-15: **Estilo: cálido y artesanal** (tonos tierra, textura de papel, toque latino).
- 2026-11-15: **Público: adultos**, curso enfocado en **viajes de trabajo y turismo**.
- 2026-11-15: Alumnos de David entran con **código + nombre**.
- 2026-11-15: **Prioridad #1 = el "stock" / hub de la maestra** (antes que los portales). Empezamos en **localhost** (el sitio corriendo solo en su computadora) y luego Vercel.
  - Estilo de navegación: como **Google Drive / Firebase Console** → **menú lateral** + **pestañas verticales** dentro de cada sección (idea de Israel que a Anita le gusta).
  - Debe permitir: crear juegos por tema del plan, guardarlos organizados, **programar su publicación** (portal de David y, en el futuro, portal del curso nuevo) y abrir los **dashboards/editores** de cada juego (UNO, Match, etc.).
- 2026-11-16: **Menú del panel = Opción A, "por plan de estudios"**: menú lateral con Inicio · Plan de estudios (A1 / A2 / Siguientes → semanas) · Juegos · Alumnos · Calendario. Cada semana tiene **pestañas verticales**: Contenido · Práctica · Evaluación · Publicar (siguen la dinámica semanal).
- 2026-11-16: **Idea central: "capturas una vez, juegas muchas veces".** Las ~30 palabras se capturan por semana; cada "actividad" = mecánica de juego + contenido de una semana. Corregir una palabra la corrige en todos los juegos.
- 2026-11-16: **David va en la semana 19.** Con David se trabaja en **modo experimental**: el curso nuevo puede cambiar a partir de lo que se pruebe con él.
- 2026-11-16: **Una sola carpeta del proyecto:** `Documents\GitHub\Periplo-español`. Había una copia clonada adentro (`Periplo-espa-ol`) con el mismo historial; se movió todo a la de afuera y se borró la de adentro.
- 2026-11-16: En esta computadora **no hay Python ni Node**. El servidor local está hecho en **PowerShell** (viene con Windows). Para probar visualmente uso **Edge en modo invisible** (`msedge --headless --screenshot`).

- 2026-11-16: **Fuente única del curso = `datos/curso.js`** (sugerencia de Israel; se eligió .js y no .md porque el panel y los juegos lo leen directo). Anita le dice a Claude los cambios y Claude edita ese archivo. Ya no hay CSV→convertidor ni captura en el navegador (se quitó el localStorage).
  - Semanas 1–19: `estado: "listo"`, transcritas de las pestañas "Español 1 - …" (con su vocabulario, cultura y actividades). Semanas 20–56: `estado: "borrador"`, copiadas de la hoja principal; se van a **reinventar desde cero** con Anita.
  - Palabras con traducción: `"boda = wedding"` (lo que va después de " = " es el inglés). La mayoría todavía no tiene traducción.
  - Correcciones menores hechas al transcribir: acentos (fotógrafo, clóset, sótano…), "mesero" etc. sin cambios de contenido.
- 2026-11-16: **Niveles comparados con el Instituto Cervantes (PCIC / MCER):** semanas 1–17 ≈ **A1 completo**; 18–19 = inicio de **A2**. Se re-etiquetó: A1 = 1–17, A2 = 18–28 (antes A1 = 1–11). Huecos frente al A1/A2 del Cervantes: *gustar* (está en la semana 30), fórmulas de cortesía *me gustaría / quisiera / ¿podría…?* (45), *poder + infinitivo*, el clima *hace calor* (35), ropa (33), comparativos (28), imperativo para indicaciones (39–40), pretérito perfecto (22), interrogativos (nota pendiente de Anita).
- 2026-11-16: El error "no se puede conectar a localhost:8080" fue porque el servidor no estaba encendido: **primero doble clic en `abrir-sitio.cmd`** (desde el Explorador de archivos) y dejar la ventana negra abierta. Plan B: abrir `panel/index.html` con doble clic también funciona (por ahora).

- 2026-11-16: **El trabajo se divide en 5 proyectos** y se lleva en `BITACORA.md` (ver sección 7).
- 2026-11-16: **Traducciones al inglés de las semanas 1–19 hechas** (1,101 palabras). **Regla:** toda palabra nueva entra con traducción. Los números se escriben con letra (`veintiuno = 21`). Las frases de la semana 17 ahora tienen traducción completa (antes eran pistas sueltas). En las reacciones, la nota en español entre paréntesis se queda del lado español.
- 2026-11-16: **Qué guarda el hub:** sobre todo las **versiones de los juegos**. Un juego se programa una vez (motor); cada versión = motor + biblioteca de palabras/preguntas/oraciones guardada en Firebase. Las versiones se publican en el portal o se comparte su link por WhatsApp. (Antes Anita copiaba el juego completo a otro chat de Gemini para cambiarle el vocabulario.)

- 2026-11-16: **Vercel conectado y publicado:** https://periplo-espa-ol.vercel.app (panel en `/panel/`). Cada `git push` a `main` se publica solo. El equipo en Vercel se llama `periplo-es`. `.vercelignore` evita publicar `juegos/originales-gemini`, `Plan de estudios`, `CLAUDE.md` y `BITACORA.md`. Ojo: el repo de GitHub es **público**.
- 2026-11-16: **UNO recibido** → guardado tal cual en `juegos/originales-gemini/uno-conjugacion.html` (solo referencia). Mecánica: salas en línea con código de 4 letras, hasta 4 jugadores + maestra como observadora; ruleta elige pronombre → jugar una carta (frase conjugada) de ese pronombre; error = ventana con explicación y pierde turno; robar del mazo; gana quien se queda sin cartas. Contenido: lista `VERBS` (verbo, 5 conjugaciones, complementos, expresiones de tiempo) = verbos de la semana 19. Depende de Gemini: `__firebase_config`, `__app_id`, `__initial_auth_token`; **necesita Firebase real** para las salas. Restos sin usar: mini-reto "Misterio" (memoria / género), comodín "?", marca de agua "RUTINA".

- 2026-11-16: **El repo se queda público** (Vercel gratis solo publica solo con repo público). Regla: nunca contraseñas ni llaves de IA en el repo. Había una 2.ª carpeta local `Documents\GitHub\Periplo-espa-ol` (clon viejo de GitHub Desktop, solo el commit inicial + copia idéntica del UNO) → se mandó a la Papelera. En GitHub siempre hubo un solo repo: GitHub no acepta "ñ" y la cambió por "-".
- 2026-11-16: **UNO nuevo construido** (`juegos/uno/index.html`): motor general de "cartas por grupo" (2 a 5 grupos), colores cálidos (añil, terracota, ocre, olivo, ciruela), sin el mini-reto "Misterio" (queda para después como opción). Nombres de jugadores, link para WhatsApp con la sala (`?v=…&sala=…`), maestra como observadora ve las manos con color. Salas en Firestore `salas/{código}`, entrada anónima. Las versiones viven en `datos/versiones.js` (primera: `uno-s19-preterito`). Firebase en `datos/firebase.js` (hoy `null`). El panel muestra las versiones en Semana → Práctica (Abrir / Copiar link).

- 2026-11-16: **Firebase creado y conectado** (proyecto `periplo-espanol`, Firestore en nam5, entrada Anónima activada). Reglas: solo `salas/{sala}` con `request.auth != null`. Probado de verdad (sala creada, juego y ruleta). Las salas se quedan guardadas: más adelante, limpieza automática de salas viejas. Para probar el juego sin clics a mano: copia con clics automáticos + Edge con `--remote-debugging-port` (script en el scratchpad); `--screenshot` corta a los 3 s y no alcanza a conectar.

- 2026-11-16: **Ajuste al plan comparado con el Cervantes (opción B corregida).** El orden de los pasados se queda (indefinido sem. 19 = inicio de A2, a tiempo; indefinido antes que el perfecto por ser español latino). Nada de "frases hechas" con gramática no enseñada: Anita enseña cada verbo con todos sus pronombres. Cambios acordados: interrogativos por semana; *poder* (y querer, pensar, dormir) en los irregulares de la sem. 12; **semana nueva de *gustar / encantar* entre la 17 y la 18** (el curso crece una semana; *me / te / nos* ya se vieron en la 17); *me gustaría* justo después de *gustar* (misma tabla + -ía); comparativos e imperativo de direcciones en el A2; 29–45 = B1, 46–56 = B2. **Aplicado el mismo día** (ver la siguiente decisión).
- 2026-11-16: **Fórmula de Anita para explicar gramática:** 1) título, 2) función + un par de ejemplos (con el vocabulario de la semana ya revisado), 3) afirmación, 4) negación, 5) pregunta cerrada, 6) pregunta con interrogativos. No aplica a todo (p. ej. preposiciones). **Interrogativos:** sin apartado propio; se "desbloquean" semana a semana según la gramática.
- 2026-11-16: **Curso reacomodado (56 semanas): A1 = 1–18, A2 = 19–32, B1 = 33–45, B2 = 46–56.** Semana 18 nueva = *gustar / encantar* + infinitivo + ser + adjetivo (viene de las antiguas 30 y 29). Todo lo que estaba de la 18 en adelante se recorrió (+1). **David ahora está en la semana 20** (pasado regular; la versión del UNO conserva su id `uno-s19-preterito` para no romper links). Movidos al A2: participio como adjetivo (24, justo después del perfecto), posesivos *el mío* + ropa (31), *se* impersonal + clima (32), relativo *que* (26, parte 2). *donde / lo que* se quedan en B1 (39); *-mente* en B1 (36). Extras: ordinales en la semana 5, *¿algo más? / nada más* en la 6. Semana 33 quedó libre; la 34 (objeto indirecto con verbos de acción) tiene una sola gramática.
- 2026-11-16 (2.º ajuste): **A2 = 19–33, B1 = 34–45.** Imperativo afirmativo + direcciones pasó al A2 (31, después de comparativos). Semana 34 = cortesía: *me gustaría* (parte 1) + *¿podría…?* (parte 2), tomado de la antigua 45, que se quedó solo con «consejos con el condicional». Semana 36 = apariencia física II: *parecer / parecerse a* + *llevar* + ropa/accesorios. *poder* agregado a los irregulares de la semana 12 (con «pagar con tarjeta»). **Regla de Anita: las 2 gramáticas de cada semana deben estar relacionadas entre sí.**
- 2026-11-17: **Panel: pestañas nuevas por semana "Plan" (cuadro: 2 gramáticas + vocabulario) y "Gramática" (explicación con la fórmula de 6 pasos, base de las presentaciones)**, y "Plan de estudios" en el menú abre el cuadro de todo el curso. Las explicaciones se escriben en `datos/curso.js`, campo `explicacion` (estado: Por escribir / Por revisar / Revisada). Antes Anita hacía la explicación con ChatGPT y la presentación con Gemini Canvas; propuesta: Claude escribe la explicación, Anita la revisa en el panel y después un solo "motor de presentaciones" (como el Yostin de Israel) las muestra a los alumnos.
- 2026-11-17: **Títulos por parte:** cada semana tiene `sugerencias` (3 ideas de título por parte, en la pestaña Plan). Estilo que le gusta a Anita: título corto con la estructura de la semana ("Hola, soy…", "Soy estudiante") y de subtítulo la gramática + el vocabulario. Cuando elija uno, va en `titulos: { parte1, parte2 }`.
- 2026-11-17: **Libros de referencia (PDF):** van en la carpeta `libros/` (en `.gitignore` y `.vercelignore`: nunca se suben, tienen derechos de autor y el repo es público). Usarlos para rescatar ideas y reescribirlas con palabras de Anita, no copiar textos.
- 2026-11-19: **Libros analizados:** son 4 libros de ACLingua (Colombia), «Aprende a enseñar español a extranjeros», 48 unidades. Libros 2–4 (unidades 13–48) leídos; resumen en `libros/notas-de-claude.md` (privado). **Libro 1 (unidades 1–12) pendiente:** pesa más de 20 MB y su texto no se puede extraer; opciones: foto del índice o instalar un lector de PDF por páginas (con permiso de Anita). Ninguna sugerencia aplicada todavía.
- 2026-11-19: **Curso reacomodado por meses (60 semanas = 15 meses de 4 semanas; campo `mes` en cada semana). Niveles alineados a los cortes de mes: A1 = 1–20 (meses 1–5), A2 = 21–36 (6–9), B1 = 37–48 (10–12), B2 = 49–60 (13–15).** Las semanas de cada mes ya no dependen entre sí. David sigue en la semana 20. Lo que llegó de los libros: imperativo de usted (31), más irregulares del pasado + pidió/durmió (25, antes «lo/la con pasado»), quería de cortesía (35), por y para (30), -ísimo / más de / tanto como (28), esto/eso/aquello (9), es posible que (54), cuando + subj. y «alguien que» + subj. (57), marcadores con conectores (46). **4 semanas nuevas:** 32 preguntas indirectas, 36 perífrasis + llevar/seguir + gerundio, 44 si + presente (condicional real), 56 estilo indirecto en pasado. México: diminutivos, ahorita, ¿bueno?, qué vs. cuál y temas de vocabulario (aeropuerto, transporte, restaurante, tecnología, oficina, emergencias, mexicanismos). Sin «vosotros». Títulos de las semanas 21+ limpiados.
- 2026-11-19: **Kit de bienvenida** en el panel (`#/kit`; datos en `window.KIT_BIENVENIDA` de `datos/curso.js`): plan, guía de sesión 30–45 min (inicio/desarrollo/cierre), gramática, palabras con traducción y preguntas de diagnóstico de nivel.
- 2026-11-19: **Niveles C1 y C2 agregados: 84 semanas = 21 meses.** C1 = 61–72 (meses 16–18), C2 = 73–84 (meses 19–21), en borrador, con 2 gramáticas relacionadas e ideas de título por semana. C1: aunque, para que, verbos de cambio, ser/estar con matices, en cuanto / antes de que, siempre que / en caso de que, relativos (el cual, cuyo), causa y consecuencia, tiempos en pasado con subjuntivo, condicionales mixtas y como si, perífrasis de matiz, marcadores formales. C2: por más que, condiciones sin «si», lo + adjetivo, énfasis (lo que…, fue ella quien), infinitivo y gerundio compuestos, tener + participio / venir + gerundio, a lo mejor / el hecho de que, cortesía y decir que no, español de México (ándale, diminutivos), refranes y futuro de subjuntivo (reconocer), español formal escrito, proyecto final.

## 9. Lo que le gusta a Anita (estilo, colores, tono)

- Cálido y artesanal: tonos tierra (terracota, ocre, crema), sensación de papel/hecho a mano.
- Tono adulto: nada infantil.

## 10. Sus alumnos

- Hoy: **1 alumno adulto: David** (Israel le pasó a Elena y David; Elena dejó el curso por tiempo, David sigue).
- El curso se diseña para **adultos** angloparlantes que viajan **por trabajo y turismo**.
- **Dos portales:**
  1. **Portal de David:** entra con **código + nombre** (opción B). Sin contraseñas; el navegador lo recuerda.
  2. **Portal del curso nuevo** (futuros alumnos): se diseña desde cero más adelante.
- Historia: Anita tomó un curso corto de ELE (español para extranjeros). Los libros de ese curso no tenían un orden lógico de gramática y vocabulario, así que **creó su propio curso desde cero**. Lo que pasó Israel es solo un ejemplo; **el curso es de Anita**.

### Dinámica semanal (clave para el diseño)
1. **Antes de la semana:** el alumno lee **2 gramáticas + ~30 palabras**.
2. **Durante la semana:** practica **2 o 3 veces** (juegos).
3. **Al final:** **actividades de evaluación** → si avanza, pasa a la semana siguiente.
### Ciclos de 4 semanas (2026-11-18)
- **Cada mes = 4 semanas** (56 semanas = 14 meses). Las semanas de un mes deben ser **independientes entre sí**: un alumno nuevo puede entrar en cualquier semana y empieza junto con el grupo desde cero esa semana.
- La semana que se perdió la **recupera cuando el ciclo del mes vuelve a pasar por ella**: si entra en la semana 2, hace 2 → 3 → 4 → 1 y luego pasa al mes 2. El orden dentro del mes no importa; por eso las semanas del mes deben ser independientes.
- **Kit de bienvenida** (idea aprobada 2026-11-19): lo básico de la semana 1 para el alumno que entra a medio mes (la semana 1 le tocaría al final de su vuelta).
- **Corte cada mes:** el mes nuevo trae vocabulario nuevo; lecturas y actividades **retoman lo de meses anteriores** (aprendizaje acumulado / en espiral).
- Regla de diseño que sale de esto: una semana puede depender de meses anteriores, **no de otra semana del mismo mes**. Meses con cadenas internas hoy: 1, 3, 6, 7, 13, 14 (leves: 5 y 11).


## 11. Plan de estudios

- **Fuente única: `datos/curso.js`.** Los CSV en `Plan de estudios/` (hoja principal + 5 pestañas "Español 1 - …") quedan solo como respaldo histórico de donde salió.
- **Enfoque: turismo y viajes de trabajo.**
- Niveles (reacomodo por meses 2026-11-19): **A1 = 1–20**, **A2 = 21–36**, **B1 = 37–48**, **B2 = 49–60**, **C1 = 61–72**, **C2 = 73–84** (21 meses de 4 semanas). De la 21 en adelante = borrador, a reinventar (salvo la 20 y la 18, que tiene gramática pero no palabras).
- Cada semana tiene: **Parte 1** y **Parte 2** (cada una con gramática + vocabulario), **preguntas que el alumno podrá responder** e **ideas de actividades**.
- Notas pendientes de Anita (arriba del CSV): segunda parte de apariencias/personalidades/rasgos físicos, palabras interrogativas, "me siento incómoda", "me da vergüenza / me da pena", "yo también / yo tampoco", "desde / hasta".
- **Ideas de juegos en su lista:** UNO, Serpientes y escaleras, Oca, Gato, Conecta 4, Ruleta, Jeopardy, Categorización, Completar oraciones. Sugerencia: pizarrón en blanco o con imagen de escenario.

- **La hoja de Google original** se llama "Plan de estudios" (en el Drive de Anita). Tiene más pestañas: "Español 1 - 1 a la 4", "5 a la 8", "9 a la 12", "13 a la 16", "17 a la 20" (desglose por semana con vocabulario y notas de **Cultura**), "Solo vocabulario" (vacía) y varias copias/borradores.
- **Estructura por día** que usa en esas pestañas: Lunes (Vocab + Reading) · Martes (Vocab + Grammar) · Miércoles (Reading + Grammar) · Jueves (Vocab/Grammar + Listening) · Viernes (Conversación / evaluación).
- La semana 44 no existe en la hoja y las 24–25 están desordenadas: **no importa**, Anita va a reinventar de la 20 en adelante con Claude.

## 12. Cómo está armado el sitio (archivos)

- `BITACORA.md`: en qué va cada uno de los 5 proyectos y dónde nos quedamos.
- `index.html`: portada (Panel de maestra / Portal de alumnos).
- `panel/index.html`: **el hub de Anita** (React + Tailwind desde internet, sin compilar). Navegación por la dirección: `#/inicio`, `#/plan` (cuadro de todo el curso), `#/semana/19`, `#/semana/19/plan`, `#/semana/19/gramatica`, `#/semana/19/practica`, `#/juegos`, `#/alumnos`, `#/calendario`. Pestañas de cada semana: Contenido · Plan · Gramática · Práctica · Evaluación · Publicar.
- `datos/curso.js`: **fuente única** del plan y el vocabulario (lo edita Claude cuando Anita pide cambios).
- `datos/alumnos.js`: alumnos (David), grupos (Curso nuevo), lista de juegos e ideas de juegos.
- `datos/versiones.js`: el stock de versiones de juegos (motor + contenido).
- `datos/firebase.js`: configuración web de Firebase (pública por diseño).
- `juegos/uno/`: motor del UNO. `juegos/originales-gemini/`: códigos originales de Gemini (no se publican).
- `libros/`: PDFs de referencia de Anita (solo en su computadora, no se suben).
- `abrir-sitio.cmd`: doble clic → abre el sitio en `http://localhost:8080/panel/` (usa `herramientas/servidor.ps1`).
- Colores (en `:root` del panel): papel `#F4ECDF`, hoja `#FBF7F0`, tinta `#3A2A1F`, terracota `#B4532F`, ocre `#B97D22`, olivo `#5B6A36`. Letras: **Fraunces** (títulos) y **Source Sans 3** (texto).

## 13. Pendientes

- [x] Entrevista: nombre del proyecto, colores/estilo, alumnos, forma de entrar, plan de estudios.
- [x] Proponer cómo se vería el panel (opción A elegida).
- [x] Esqueleto del hub en localhost (2026-11-16).
- [x] Traer el vocabulario de las semanas 1–19 a `datos/curso.js`.
- [x] Dejar una sola carpeta del proyecto.
- [x] Traducciones al inglés del vocabulario de las semanas 1–19 (2026-11-16). Falta que Anita las revise.
- [x] Crear la bitácora de proyectos (`BITACORA.md`).
- [ ] Recibir el código del primer juego (sugerido: UNO) y proponer motor + editor.
- [ ] Semana 18 sin lista de palabras.
- [ ] Decidir con Anita si se mueven antes: gustar, cortesía (me gustaría / ¿podría?), poder + inf., clima, imperativo.
- [ ] Reinventar semanas 20–56 con Anita.
- [ ] Proponer el portal de David (código + nombre).
- [x] Crear Firebase (2026-11-16).
- [ ] Primera partida real del UNO con David / Anita.
- [ ] Migrar los 5 juegos, uno por uno.
