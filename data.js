// Bandas ilustrativas compartidas por T0 y T1; todos los cortes y colores se configuran aquí.
export const BANDS = Object.freeze([
  { id:'strong', min:80, label:'Fuerte', color:'#36806b', ink:'#225f4f', soft:'#e7f3ee' },
  { id:'consolidating', min:60, label:'En consolidación', color:'#c49a38', ink:'#795b15', soft:'#faf1d9' },
  { id:'attenuated', min:50, label:'Atenuado', color:'#b6785d', ink:'#854d37', soft:'#f6eae3' },
  { id:'weak', min:0, label:'Débil', color:'#d2958b', ink:'#895049', soft:'#faeeeb' }
]);

export const COMPETENCIES = [
  {
    code:'A1', short:'Comprensión e integración de información científica', t0:68, t1:82, uncertainty:6,
    focus:'Aprovechar esta fortaleza para integrar fuentes y abordar lecturas de mayor complejidad.',
    skills:'Comprensión lectora, identificación de ideas principales, selección de información pertinente, elaboración de inferencias e integración de conceptos entre fuentes.',
    action:'Elaborar una síntesis que conecte dos textos científicos, identifique coincidencias y diferencias, y explique su aportación conjunta a un problema psicológico.'
  },
  {
    code:'A2', short:'Evaluación de evidencia, argumentación y toma de decisiones fundamentadas', t0:65, t1:77, uncertainty:7,
    focus:'Consolidar la valoración de la evidencia y la justificación de conclusiones.',
    skills:'Valoración de fuentes, distinción entre datos e interpretaciones, análisis de argumentos y comparación de alternativas.',
    action:'Analizar un artículo mediante una pauta que distinga afirmaciones, datos, inferencias y limitaciones. Justificar qué conclusiones están respaldadas y cuáles requieren evidencia adicional.'
  },
  {
    code:'A3', short:'Razonamiento cuantitativo, lógico y analítico', t0:44, t1:44, uncertainty:8,
    focus:'Priorizar la interpretación de datos, relaciones e incertidumbre mediante práctica guiada.',
    skills:'Interpretación de magnitudes, proporciones, tablas y gráficas; reconocimiento de relaciones entre variables y razonamiento sobre variabilidad e incertidumbre.',
    action:'Resolver ejercicios breves con tablas y gráficas, apoyándose inicialmente en ejemplos resueltos. Explicar cada conclusión, distinguir asociación de causalidad y revisar los errores con un docente o tutor.'
  },
  {
    code:'A4', short:'Razonamiento metodológico y diagnóstico', t0:63, t1:55, uncertainty:7,
    focus:'Fortalecer la articulación entre preguntas, hipótesis, métodos y evidencia.',
    skills:'Formulación de preguntas e hipótesis, articulación entre teoría y método, identificación de sesgos y contraste de explicaciones alternativas.',
    action:'Reconstruir un estudio o caso psicológico identificando el problema, las hipótesis, el diseño y la evidencia disponible. Formular una conclusión justificada y una explicación alternativa, utilizando una guía de análisis.'
  },
  {
    code:'A5', short:'Juicio ético y responsabilidad profesional', t0:78, t1:86, uncertainty:5,
    focus:'Aplicar esta fortaleza a situaciones con principios en tensión y consecuencias diversas.',
    skills:'Reconocimiento de conflictos éticos, consideración de perspectivas, anticipación de consecuencias y ponderación de derechos, riesgos y responsabilidades.',
    action:'Analizar un dilema ético que involucre derechos, consentimiento o confidencialidad. Comparar alternativas, anticipar sus consecuencias y justificar una decisión considerando a las personas involucradas.'
  },
  {
    code:'A6', short:'Uso crítico de información y tecnologías digitales', t0:48, t1:48, uncertainty:8,
    focus:'Priorizar la verificación de información y el uso fundamentado de recursos digitales.',
    skills:'Búsqueda y selección de información, verificación de fuentes y resultados, detección de sesgos y supervisión del propio uso de herramientas digitales e inteligencia artificial.',
    action:'Contrastar una respuesta generada por inteligencia artificial con dos fuentes académicas verificables. Identificar errores, sesgos o afirmaciones sin respaldo y documentar las comprobaciones y correcciones realizadas con apoyo de una pauta.'
  }
];

export const VERSION = '2.0';
export const UPDATED = '22 de octubre de 2026';
export const MIN_GROUP_SIZE = 20;

export const COHORTS = {
  '2026': { n:842, morning:410, paired:716, interpretable:.88, coverage:.91, t0:[61,55,34,43,68,41], t1:[78,70,46,61,82,58], transitions:[.38,.31,.22,.09] },
  '2025': { n:806, morning:394, paired:684, interpretable:.87, coverage:.90, t0:[60,54,35,42,67,40], t1:[76,68,44,59,81,55], transitions:[.35,.32,.23,.10] },
  '2024': { n:768, morning:376, paired:641, interpretable:.86, coverage:.89, t0:[58,52,33,40,66,39], t1:[74,66,43,57,79,54], transitions:[.33,.32,.24,.11] }
};

export const TRANSITIONS = [
  { label:'Se consolida', color:'#36806b', definition:'Pasa de una banda de menor dominio a una superior en el ejemplo longitudinal.', action:'Reconocer el avance y promover su aplicación en nuevas tareas.' },
  { label:'Permanece alto', color:'#74a78c', definition:'Mantiene una clasificación alta en ambos momentos del seguimiento.', action:'Ofrecer oportunidades de profundización y transferencia.' },
  { label:'Permanece en proceso', color:'#c49a38', definition:'Continúa en bandas que requieren consolidación o fortalecimiento.', action:'Revisar metas, recursos y oportunidades de práctica.' },
  { label:'Disminuye o no concluyente', color:'#d2958b', definition:'La probabilidad disminuye o la información no permite una interpretación suficientemente precisa; son motivos distintos que requieren revisión.', action:'Contrastar las tareas, las condiciones de aplicación y el contexto con docentes o tutores.' }
];

export const DESCRIPTIONS = {
  A1:{ plain:'Comprender textos científicos y conectar sus ideas para explicar un problema psicológico.', observable:'Relacionas dos lecturas, distingues sus aportaciones y elaboras una síntesis con tus propias palabras.', guide:['Elige dos lecturas de una asignatura y escribe la idea central de cada una.','Identifica una coincidencia, una diferencia y las razones que las explican.','Redacta una síntesis de 150 palabras y revisa si cada conclusión puede rastrearse a las lecturas.'] },
  A2:{ plain:'Valorar la calidad de la información y justificar conclusiones con argumentos y datos pertinentes.', observable:'Distingues lo que un artículo encontró de lo que sus autores interpretan y señalas una limitación relevante.', guide:['Selecciona una conclusión de un artículo de clase.','Separa afirmación, datos que la respaldan, inferencia y limitación.','Reescribe la conclusión para que su alcance sea proporcional a la información disponible.'] },
  A3:{ plain:'Interpretar datos y relaciones numéricas para formular conclusiones justificadas.', observable:'Explicas qué muestra una gráfica, reconoces la variabilidad y distingues una asociación de una relación causal.', guide:['Compara este ejemplo: grupo A, media 12 y desviación estándar 3; grupo B, media 14 y desviación estándar 4.','Describe qué difiere y qué información adicional necesitarías para evaluar esa diferencia.','Explica por qué esas cifras, por sí solas, no demuestran causalidad. Revisa tu respuesta con un docente o tutor.'] },
  A4:{ plain:'Relacionar preguntas, teorías, métodos y resultados para construir explicaciones psicológicas justificadas.', observable:'Formulas una hipótesis, eliges un diseño pertinente y reconoces una explicación alternativa de los resultados.', guide:['Reconstruye un estudio de clase en cinco pasos: problema, hipótesis, diseño, resultados y conclusión.','Comprueba si el diseño permite sostener la conclusión.','Propón una explicación alternativa y describe qué información permitiría contrastarla.'] },
  A5:{ plain:'Reconocer dilemas y justificar decisiones considerando derechos, responsabilidades y consecuencias.', observable:'Comparas alternativas ante un conflicto de confidencialidad y justificas una decisión respetuosa de los derechos involucrados.', guide:['Imagina que un compañero solicita consultar respuestas individuales de una evaluación para preparar un trabajo.','Identifica a las personas afectadas, los derechos, los riesgos y las alternativas.','Justifica una respuesta que proteja la confidencialidad y permita atender el objetivo académico.'] },
  A6:{ plain:'Buscar y verificar información, y utilizar recursos digitales e inteligencia artificial con criterio.', observable:'Detectas una afirmación sin respaldo en una respuesta de IA y documentas cómo la verificaste y corregiste.', guide:['Selecciona una respuesta de IA sobre un tema de una asignatura, sin incluir información personal.','Comprueba dos afirmaciones con fuentes académicas verificables y revisa que las referencias existan.','Registra la instrucción utilizada, los errores encontrados, las verificaciones y los cambios que hiciste.'] }
};

export const PLAN = [
  { id:'quantitative', code:'A3', title:'Interpretar datos con apoyo', task:'Resuelve dos ejercicios con tablas o gráficas y explica tus conclusiones.', product:'Dos ejercicios comentados y una revisión con tu docente o tutor.' },
  { id:'digital', code:'A6', title:'Verificar información digital', task:'Contrasta una respuesta de IA con dos fuentes académicas y documenta tus correcciones.', product:'Una ficha de verificación con fuentes y cambios realizados.' },
  { id:'methods', code:'A4', title:'Revisar una decisión metodológica', task:'Reconstruye un estudio y conversa sobre una conclusión y una explicación alternativa.', product:'Un esquema del estudio y un acuerdo breve de seguimiento.' }
];

export const GLOSSARY = [
  ['Modelo de diagnóstico cognitivo (MDC)','Modelo que relaciona tus respuestas a varias tareas con combinaciones de conocimientos, habilidades o competencias. Estima perfiles y expresa la incertidumbre de esa interpretación.'],
  ['Matriz Q','Tabla que señala qué competencias requiere cada tarea para resolverse. Sus asignaciones deben justificarse con el contenido, los procesos de respuesta y los datos.'],
  ['Probabilidad de dominio (PD)','Grado de respaldo que las respuestas ofrecen al dominio de una competencia bajo el modelo utilizado. Un 80 % no significa que hayas aprendido el 80 % de esa competencia.'],
  ['Margen de incertidumbre','Rango que ayuda a valorar cuánta precisión tiene una estimación. Las franjas de este prototipo son ilustrativas y no son intervalos obtenidos de una calibración real.'],
  ['T0 y T1','T0 corresponde al ingreso a la licenciatura; T1, al cierre del cuarto semestre. Permiten describir el desarrollo durante la formación común.'],
  ['Perfil interpretable','Conjunto de resultados que reúne condiciones suficientes para ofrecer una lectura formativa. La incertidumbre sobre una banda no vuelve automáticamente ininterpretable todo el perfil.'],
  ['Evaluación de bajas consecuencias','Evaluación orientada a apoyar el aprendizaje y el acompañamiento. Sus resultados no determinan admisión, permanencia ni acreditación.'],
  ['Puntos porcentuales (pp)','Diferencia entre dos porcentajes: pasar de 68 % a 82 % equivale a +14 pp. No son puntos de calificación ni un porcentaje de aprendizaje adquirido.']
];

