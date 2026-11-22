// =====================================================================
//  DIAPOSITIVAS — convierte la explicación de una gramática en diapositivas.
//  Lo usan el panel (pestaña "Gramática") y el motor de presentaciones.
//
//  La diapositiva 1 siempre es la portada.
//  Cada diapositiva puede tener:
//    emoji       un emoji relacionado con el tema (opcional)
//    titulo      en español (regla de Anita)
//    traduccion  el título en inglés (al inicio del curso)
//    subtitulo   solo en la portada: gramática + vocabulario
//    texto       explicación en inglés (lista de renglones). Lo que va después
//                de " → " es un ejemplo en español y se resalta.
//    ejemplos    renglones en español, resaltados
//    tabla       { columnas: [...], filas: [[...], ...] }
//    letras      lista corta que se muestra como fichas (p. ej. el alfabeto)
// =====================================================================

(function () {
  const lista = v => (v == null || v === '' ? [] : Array.isArray(v) ? v : [v]);

  // Las 6 partes de la fórmula de Anita (cuando la explicación usa la fórmula).
  const FORMULA = [
    { id: 'funcion', titulo: '¿Para qué sirve?', traduccion: 'What is it for?', conEjemplos: true },
    { id: 'afirmacion', titulo: 'Afirmación', traduccion: 'Affirmative sentences' },
    { id: 'negacion', titulo: 'Negación', traduccion: 'Negative sentences' },
    { id: 'preguntaCerrada', titulo: 'Preguntas de sí o no', traduccion: 'Yes / no questions' },
    { id: 'preguntaInterrogativa', titulo: 'Preguntas con interrogativos', traduccion: 'Questions with question words', conInterrogativos: true },
  ];

  // s = una semana o el kit; parte = "parte1" | "parte2"
  window.armarDiapositivas = function (s, parte) {
    const e = (s.explicacion || {})[parte];
    if (!e) return [];
    if (e.formula === false) return e.pasos || [];

    const gramatica = ((s[parte] || {}).gramatica || []).join(' · ');
    const vocabulario = ((s[parte] || {}).vocabulario || []).join(', ');
    const tituloElegido = (s.titulos || {})[parte];
    const diapos = [{
      portada: true,
      titulo: e.titulo || tituloElegido || gramatica,
      traduccion: e.traduccion,
      subtitulo: e.subtitulo || ('Gramática: ' + gramatica + (vocabulario ? ' · Vocabulario: ' + vocabulario : '')),
    }];
    FORMULA.forEach(f => {
      const texto = lista(e[f.id]);
      const ejemplos = f.conEjemplos ? lista(e.ejemplos) : [];
      const letras = f.conInterrogativos ? lista(e.interrogativos) : [];
      if (texto.length || ejemplos.length || letras.length) {
        diapos.push({ titulo: f.titulo, traduccion: f.traduccion, texto, ejemplos, letras });
      }
    });
    return diapos;
  };

  // ¿Tiene contenido una diapositiva?
  window.diapositivaConContenido = function (d) {
    return !!(d && (d.portada || lista(d.texto).length || lista(d.ejemplos).length || lista(d.letras).length || (d.tabla && d.tabla.filas && d.tabla.filas.length)));
  };
})();
