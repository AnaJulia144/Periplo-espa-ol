# Bitácora de Anita

> Aquí se anota **en qué va cada proyecto** y **dónde nos quedamos**.
> Al final de cada sesión, Claude actualiza el proyecto en el que trabajamos
> y agrega una línea en el *Registro de sesiones* (abajo).
> Al empezar una sesión, Claude lee esto primero.

---

## Los 5 proyectos

| # | Proyecto | Estado | Última vez |
|---|----------|--------|------------|
| 1 | Plan de estudios oficial | 84 semanas en 21 meses (A1 1–20 · A2 21–36 · B1 37–48 · B2 49–60 · C1 61–72 · C2 73–84), con lo de los libros; falta reinventar 21 en adelante | 2026-11-19 |
| 2 | Hub de la maestra y portal del alumno | Hub listo y publicado en Vercel | 2026-11-16 |
| 3 | Código de los juegos (los "motores") | UNO funcionando en línea; falta probarlo en clase | 2026-11-16 |
| 4 | Versiones de los juegos (bibliotecas de contenido) | Idea definida, sin empezar | 2026-11-16 |
| 5 | Seguimiento de David | Va en la semana 20 (antes 19, por la semana nueva), modo experimental | 2026-11-16 |

---

## 1. Plan de estudios oficial

**Qué es:** el curso de Anita, de cero, para adultos angloparlantes que viajan por trabajo y turismo. Vive en `datos/curso.js`.

**Dónde me quedé:**
- Semanas 1–19 pasadas al archivo, con vocabulario, cultura e ideas de actividades.
- Comparadas con el Instituto Cervantes: semanas 1–17 = A1 completo; 18–19 = inicio de A2.
- Todo el vocabulario de las semanas 1–19 ya tiene **traducción al inglés** (1,101 palabras). Los números ahora van escritos con letra (`veintiuno = 21`).
- Semanas 20–56 están como **borrador**.

**Siguiente paso:** que Anita revise el reacomodo por meses y el kit; leer el libro 1 (foto del índice o instalar lector); armar la semana 18 (gustar) con su fórmula y ~30 palabras.

**Temas para debatir (los que el Cervantes pone antes que tu plan):**
- *gustar / encantar* (hoy en la semana 30)
- Cortesía: *me gustaría, quisiera, ¿podría…?* (hoy en la 45)
- *poder* + infinitivo (no aparece en 1–19)
- El clima (35) y la ropa (33)
- Imperativo para dar indicaciones (39–40)
- Palabras interrogativas (nota pendiente de Anita)
- Pretérito perfecto (22): decidir si va antes o después del indefinido

**Pendientes:**
- [ ] Semana 18 sin lista de palabras.
- [ ] Revisar las traducciones (Anita).
- [ ] "Lechuga" está en dos listas de la semana 15: decidir dónde se queda.
- [ ] Notas viejas de Anita: apariencias parte 2, "me siento incómoda", "me da vergüenza / pena", "desde / hasta".
- [ ] Reinventar semanas 20 en adelante.

**Regla desde ahora:** toda palabra nueva entra con su traducción (`palabra = translation`).

---

## 2. Hub de la maestra y portal del alumno

**Qué es:** el sitio. El hub es el "stock" de Anita: ahí se guardan, organizan, publican y comparten las versiones de los juegos. El portal es donde los alumnos encuentran sus juegos.

**Dónde me quedé:**
- Hub funcionando en localhost: menú por plan de estudios (A1 / A2 / Siguientes), cada semana con pestañas Contenido · Práctica · Evaluación · Publicar.
- La pestaña Contenido ya muestra el vocabulario con traducción.
- A Anita le gusta el orden. **Aclaró** que lo principal que debe guardar el hub son las **versiones de los juegos** (proyecto 4).

**Siguiente paso:** cuando exista el primer juego, adaptar el hub para que guarde y muestre versiones (crear, editar, publicar, copiar link para WhatsApp).

**Pendientes:**
- [ ] Portal de David (código + nombre).
- [x] **Publicado en Vercel (2026-11-16):** https://periplo-espa-ol.vercel.app — se actualiza solo con cada subida a GitHub.
- [ ] Decidir si el repo de GitHub pasa a privado (hoy es público).
- [ ] Crear Firebase (guiado paso a paso).

---

## 3. Código de los juegos (los "motores")

**Qué es:** programar cada juego **una sola vez**, sin palabras metidas adentro. El juego lee su contenido de una biblioteca.

**Los 5 juegos:** UNO · Match · Serpientes y escaleras · Completar oraciones · Flashcards.

**Dónde me quedé (2026-11-16):** recibido el **UNO de conjugación** (guardado en `juegos/originales-gemini/`). Revisado: funciona con salas en línea, así que **necesita Firebase**. Propuesta: motor general de "cartas por categoría" (pronombres, el/la/los/las, un/una…), con generador automático de frases para conjugación.

**Decisiones:** Firebase sí · "Misterio" fuera por ahora (después, como opción) · colores de Anita.

**Hecho (2026-11-16):** motor del UNO construido en `juegos/uno/` con la versión de la semana 19. Probado con una simulación: menú de sala, juego, carta equivocada, vista de maestra.

**Firebase conectado (2026-11-16):** el UNO ya crea salas en línea, probado de verdad y publicado en Vercel.

**Primera partida real (2026-11-16, Anita + Israel en iPhone):** se congeló en el iPhone, el turno propio no se notaba y la ventana de error tardó en cerrarse del otro lado. Arreglado: aviso «¡Es tu turno!», conexión segura en iPhone, refresco cada 8 s y al volver a la pestaña, y recargar ya no saca de la sala.

**Siguiente paso:** otra partida para confirmar los arreglos (sobre todo en iPhone). Después: elegir el segundo juego.

---

## 4. Versiones de los juegos (bibliotecas)

**Qué es:** cada versión = un motor + una biblioteca de contenido (palabras, preguntas u oraciones), guardada en Firebase.
Ejemplo: "UNO – Semana 19 – Verbos en pasado". Se publica en el portal o se manda el link por WhatsApp.

**Cómo lo hacía antes:** creaba el UNO en Gemini, copiaba el código a otro chat y lo rehacía con otro vocabulario. Cada versión era una copia entera del juego.

**Cómo será ahora:** un panel (editor) por juego para armar versiones → se guardan en el stock del hub → link fijo que no se pierde.

**Dónde me quedé:** idea acordada. Depende del proyecto 3.

**Preguntas abiertas:**
- ¿Una versión puede tomar las palabras de una semana del plan automáticamente, además de capturarlas a mano?
- ¿Las versiones viejas que ya están en Gemini se pasan o se rehacen?

---

## 5. Seguimiento de David

**Qué es:** lo que Anita ya hace con David (modo experimental). Lo que funcione con él se pasa al plan oficial.

**Dónde me quedé:** David va en la **semana 19** (pretérito indefinido, verbos regulares).

**Siguiente paso:** anotar aquí qué se probó con David cada semana y qué se cambiaría en el curso oficial.

**Observaciones de las clases con David:** _(se irán llenando)_

---

## Registro de sesiones

- **2026-11-15** · (1, 2) Arranque: entrevista, estilo, nombre, cómo entra David.
- **2026-11-16** · (2) Esqueleto del hub en localhost, una sola carpeta del proyecto.
- **2026-11-16** · (1) Semanas 1–19 a `datos/curso.js`, comparación con el Cervantes, traducciones al inglés de las 1,101 palabras. Se creó esta bitácora con los 5 proyectos.
- **2026-11-16** · (2, 3) Vercel conectado y primer deploy confirmado. Recibido y revisado el UNO de conjugación.
- **2026-11-16** · (2, 3) Una sola carpeta local (la vieja a la Papelera). Motor del UNO construido con colores cálidos y conectado al panel. Pendiente: crear Firebase.
- **2026-11-16** · (3) Firebase creado y conectado; el UNO funciona en línea y está publicado.
- **2026-11-16** · (3) Primera partida con Israel → 3 arreglos al UNO (turno visible, iPhone, recargar).
- **2026-11-16** · (1) Debate con el Cervantes: se queda el orden de los pasados; semana nueva de *gustar* entre la 17 y la 18 (por aplicar); Anita explicó su fórmula de 6 pasos para la gramática.
- **2026-11-16** · (1) Curso reacomodado: semana 18 nueva (gustar), niveles A1–B2, movimientos al A2, ordinales (sem. 5) y «algo más / nada más» (sem. 6). David pasa a la semana 20.
- **2026-11-16** · (1) 2.º ajuste: imperativo al A2 (31), cortesía en la 34, parecer/llevar en la 36, *poder* en la 12.
- **2026-11-16** · (1) Semana 35 completa (objeto indirecto repetido) y semana 45 completa (deberías / podrías / tendrías que).
- **2026-11-16** · (1) Partes 2 completas: 21 (conectores de narración), 40 (donde / lo que separados), 55 y 56 (tiempos compuestos separados). Semana 27 ordenada (contraste indefinido vs. imperfecto + conectores avanzados; cuerpo y médico como vocabulario).
- **2026-11-17** · (2) Panel: pestañas Plan y Gramática en cada semana; cuadro de todo el curso en «Plan de estudios».
- **2026-11-17** · (1, 2) 3 ideas de título por parte en las 56 semanas (pestaña Plan). Carpeta privada `libros/` para los PDF de Anita.
- **2026-11-18** · (1) Anita explicó su dinámica de ciclos de 4 semanas (entrada en cualquier semana, corte mensual, repaso acumulado). Sus 4 libros «Aprender a enseñar español» ya están en `libros/`.
- **2026-11-19** · (1) Análisis de los libros 2–4 contra el plan: gramáticas que faltan + temas de México/turismo. Libro 1 pendiente (no se pudo leer).
- **2026-11-19** · (1, 2) Curso a 60 semanas en 15 meses con lo de los libros (4 semanas nuevas) y kit de bienvenida en el panel.
- **2026-11-19** · (1) Niveles C1 y C2: 24 semanas nuevas (84 en total, 21 meses).
- **2026-11-19** · (1) «Se» de los accidentes en la semana 37.
- **2026-11-20** · (1) Revisión del kit: pronunciación (parte 1) + ser (parte 2), con las frases de la semana 1. Siguiente: material de pronunciación de Anita y luego la semana 1.
- **2026-11-21** · (1, 2) Diapositivas del kit (15 + 5) con la portada como n.º 1 y motor de presentaciones funcionando. Siguiente: que Anita revise las presentaciones del kit; luego la semana 1.
