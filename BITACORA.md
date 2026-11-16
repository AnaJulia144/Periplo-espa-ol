# Bitácora de Anita

> Aquí se anota **en qué va cada proyecto** y **dónde nos quedamos**.
> Al final de cada sesión, Claude actualiza el proyecto en el que trabajamos
> y agrega una línea en el *Registro de sesiones* (abajo).
> Al empezar una sesión, Claude lee esto primero.

---

## Los 5 proyectos

| # | Proyecto | Estado | Última vez |
|---|----------|--------|------------|
| 1 | Plan de estudios oficial | Base lista (sem. 1–19), falta reinventar 20 en adelante | 2026-11-16 |
| 2 | Hub de la maestra y portal del alumno | Hub listo y publicado en Vercel | 2026-11-16 |
| 3 | Código de los juegos (los "motores") | UNO funcionando en línea; falta probarlo en clase | 2026-11-16 |
| 4 | Versiones de los juegos (bibliotecas de contenido) | Idea definida, sin empezar | 2026-11-16 |
| 5 | Seguimiento de David | Va en la semana 19, modo experimental | 2026-11-16 |

---

## 1. Plan de estudios oficial

**Qué es:** el curso de Anita, de cero, para adultos angloparlantes que viajan por trabajo y turismo. Vive en `datos/curso.js`.

**Dónde me quedé:**
- Semanas 1–19 pasadas al archivo, con vocabulario, cultura e ideas de actividades.
- Comparadas con el Instituto Cervantes: semanas 1–17 = A1 completo; 18–19 = inicio de A2.
- Todo el vocabulario de las semanas 1–19 ya tiene **traducción al inglés** (1,101 palabras). Los números ahora van escritos con letra (`veintiuno = 21`).
- Semanas 20–56 están como **borrador**.

**Siguiente paso:** sesión dedicada a debatir la comparación con el Cervantes (Anita tiene muchas preguntas e ideas).

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

**Siguiente paso:** Anita juega una partida de prueba (dos dispositivos) y cuenta qué cambiar. Después: elegir el segundo juego.

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
