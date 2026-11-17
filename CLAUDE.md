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

- 2026-11-16: **Ajuste al plan comparado con el Cervantes (opción B corregida).** El orden de los pasados se queda (indefinido sem. 19 = inicio de A2, a tiempo; indefinido antes que el perfecto por ser español latino). Nada de "frases hechas" con gramática no enseñada: Anita enseña cada verbo con todos sus pronombres. Cambios acordados: interrogativos por semana; *poder* (y querer, pensar, dormir) en los irregulares de la sem. 12; **semana nueva de *gustar / encantar* entre la 17 y la 18** (el curso crece una semana; *me / te / nos* ya se vieron en la 17); *me gustaría* justo después de *gustar* (misma tabla + -ía); comparativos e imperativo de direcciones en el A2; 29–45 = B1, 46–56 = B2. **Aún no aplicado en `datos/curso.js`** (renumerar mueve a David de la 19 a la 20).
- 2026-11-16: **Fórmula de Anita para explicar gramática:** 1) título, 2) función + un par de ejemplos (con el vocabulario de la semana ya revisado), 3) afirmación, 4) negación, 5) pregunta cerrada, 6) pregunta con interrogativos. No aplica a todo (p. ej. preposiciones). **Interrogativos:** sin apartado propio; se "desbloquean" semana a semana según la gramática.

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

## 11. Plan de estudios

- **Fuente única: `datos/curso.js`.** Los CSV en `Plan de estudios/` (hoja principal + 5 pestañas "Español 1 - …") quedan solo como respaldo histórico de donde salió.
- **Enfoque: turismo y viajes de trabajo.**
- Niveles (re-etiquetados con el Cervantes): **A1 = semanas 1–17**, **A2 = semanas 18–28**. Semanas 29–56 = borrador avanzado (subjuntivo, condicional…), a reinventar.
- Cada semana tiene: **Parte 1** y **Parte 2** (cada una con gramática + vocabulario), **preguntas que el alumno podrá responder** e **ideas de actividades**.
- Notas pendientes de Anita (arriba del CSV): segunda parte de apariencias/personalidades/rasgos físicos, palabras interrogativas, "me siento incómoda", "me da vergüenza / me da pena", "yo también / yo tampoco", "desde / hasta".
- **Ideas de juegos en su lista:** UNO, Serpientes y escaleras, Oca, Gato, Conecta 4, Ruleta, Jeopardy, Categorización, Completar oraciones. Sugerencia: pizarrón en blanco o con imagen de escenario.

- **La hoja de Google original** se llama "Plan de estudios" (en el Drive de Anita). Tiene más pestañas: "Español 1 - 1 a la 4", "5 a la 8", "9 a la 12", "13 a la 16", "17 a la 20" (desglose por semana con vocabulario y notas de **Cultura**), "Solo vocabulario" (vacía) y varias copias/borradores.
- **Estructura por día** que usa en esas pestañas: Lunes (Vocab + Reading) · Martes (Vocab + Grammar) · Miércoles (Reading + Grammar) · Jueves (Vocab/Grammar + Listening) · Viernes (Conversación / evaluación).
- La semana 44 no existe en la hoja y las 24–25 están desordenadas: **no importa**, Anita va a reinventar de la 20 en adelante con Claude.

## 12. Cómo está armado el sitio (archivos)

- `BITACORA.md`: en qué va cada uno de los 5 proyectos y dónde nos quedamos.
- `index.html`: portada (Panel de maestra / Portal de alumnos).
- `panel/index.html`: **el hub de Anita** (React + Tailwind desde internet, sin compilar). Navegación por la dirección: `#/inicio`, `#/semana/19`, `#/semana/19/practica`, `#/juegos`, `#/alumnos`, `#/calendario`.
- `datos/curso.js`: **fuente única** del plan y el vocabulario (lo edita Claude cuando Anita pide cambios).
- `datos/alumnos.js`: alumnos (David), grupos (Curso nuevo), lista de juegos e ideas de juegos.
- `datos/versiones.js`: el stock de versiones de juegos (motor + contenido).
- `datos/firebase.js`: configuración web de Firebase (pública por diseño).
- `juegos/uno/`: motor del UNO. `juegos/originales-gemini/`: códigos originales de Gemini (no se publican).
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
