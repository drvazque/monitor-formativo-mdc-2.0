# Monitor Formativo 2.0 - Paquete para GitHub Pages y otros alojamientos estáticos

Monitor Formativo 2.0 con el scorecard individual actualizado proporcionado por el autor. El botón Descargar diagnóstico personalizado entrega el PDF actualizado de tres páginas y diez campos rellenables. Autor: Dr. Ramsés Vázquez Lira, Computational Psychometrics Lab, Facultad de Psicología, UNAM.

Actualizado: 22 de octubre de 2026.

## Comienza aquí

Puedes abrir **GUIA_PUBLICACION.html** con doble clic para leer esta guía sin instalar nada. Para el monitor, utiliza el enlace de una publicación HTTP/HTTPS.

- Sin GitHub: carga la carpeta en Netlify o el ZIP/carpeta en Cloudflare Pages.
- Con repositorio: GitHub Pages, Vercel y Posit Connect Cloud ofrecen sus propios recorridos de publicación.

## Archivos

| Archivo | Función |
| --- | --- |
| `index.html` | Entrada principal del monitor |
| `styles.css` | Identidad visual y adaptación a pantallas |
| `app.js` | Vistas, interacciones y botón actualizado |
| `data.js` | Seis competencias, valores, bandas y orientaciones |
| `model.js` | Reglas compartidas de presentación y agregación |
| `assets/` | Logotipos y scorecard actualizado |
| `.nojekyll` | Publicación estática en GitHub Pages |
| `README.md` | Instrucciones resumidas y pasos por plataforma |
| `GUIA_PUBLICACION.html` | Guía que puedes abrir con doble clic |
| `CHECKSUMS.sha256` | Huella de los archivos incluidos |

## GitHub Pages

1. Descomprime este paquete. En GitHub crea un repositorio, por ejemplo monitor-formativo-mdc-unam-2-0, o abre el que ya utilizas para el monitor.
2. Para utilizar GitHub Pages con GitHub Free, el repositorio debe ser público. En Code > Add file > Upload files, sube el contenido de la carpeta descomprimida. Conserva assets y coloca index.html directamente en la raíz. Guarda el cambio en main. Si usas otra rama, intégrala en main antes de publicar.
3. Abre Settings > Pages. En Source elige Deploy from a branch. En Branch selecciona main y en la carpeta / (root). Pulsa Save.
4. Espera a que termine pages build and deployment en Actions y abre el enlace que aparezca en Settings > Pages.
5. Para actualizarlo, vuelve a cargar los archivos modificados en las mismas rutas y guarda el cambio en la rama publicada.

> Si no ves .nojekyll en Mac, usa Command + Shift + punto en Finder. Puedes crearlo en GitHub con Add file > Create new file, nombre .nojekyll y contenido Static site.

- [Configuración oficial de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Netlify

1. Descomprime el ZIP y conserva todos sus archivos dentro de una carpeta. Comprueba que index.html se encuentre directamente dentro de ella.
2. Crea una cuenta o entra a Netlify. Desde Projects utiliza la opción de despliegue manual o entra al área Netlify Drop.
3. Arrastra la carpeta que contiene index.html al área de carga. Este paquete está listo para servir sus archivos: no necesita una compilación.
4. Cuando el despliegue termine, configura la visibilidad pública si el proyecto se creó privado y copia la dirección mostrada por Netlify.
5. Para actualizar este mismo sitio, arrastra la carpeta actualizada al área de despliegues de ese proyecto; conserva el mismo proyecto para mantener su dirección.

> Si eliges importar desde un repositorio en lugar de arrastrar una carpeta, utiliza su raíz como directorio de publicación y deja vacío el comando de compilación. La disponibilidad y los límites dependen del plan de tu cuenta.

- [Carga manual en Netlify](https://docs.netlify.com/deploy/create-deploys/#drag-and-drop)

## Cloudflare Pages

1. Crea una cuenta o entra al panel de Cloudflare y abre Workers & Pages.
2. Selecciona Create application > Get started > Drag and drop your files, dentro de la opción de Pages. Los rótulos pueden variar ligeramente según el panel.
3. Asigna un nombre al proyecto. Carga este ZIP directamente o arrastra la carpeta descomprimida que contiene index.html.
4. Revisa que los archivos se hayan cargado y pulsa Deploy site o Save and Deploy. Abre la dirección que Cloudflare te proporcione.
5. Para actualizarlo, abre ese mismo proyecto, selecciona Create a new deployment, elige producción y carga el paquete actualizado.

> La opción Direct Upload permite carga manual sin GitHub. Si después deseas integración automática con Git, Cloudflare indica que debes crear un proyecto con ese tipo de integración.

- [Carga directa en Cloudflare Pages](https://developers.cloudflare.com/pages/get-started/direct-upload/)

## Vercel

1. Sube el contenido descomprimido a un repositorio Git. Para el recorrido desde el navegador, puedes utilizar el repositorio de GitHub preparado en la primera sección.
2. Entra a Vercel y crea un proyecto importando ese repositorio.
3. Usa la raíz del repositorio como Root Directory y selecciona Other si solicita Framework Preset. Deja vacíos los comandos de instalación y compilación; si solicita Output Directory, utiliza un punto (.) para indicar la raíz.
4. Pulsa Deploy y abre la dirección del despliegue. Comprueba el perfil y el enlace al scorecard.
5. Para posteriores cambios, actualiza la rama conectada del repositorio. La integración publicará los cambios según su configuración.

> Vercel también permite desplegar sin Git mediante su CLI. Esa ruta requiere instalar su herramienta, por lo que la importación desde un repositorio es la alternativa descrita aquí. El plan Hobby tiene condiciones de uso personal no comercial.

- [Métodos de despliegue de Vercel](https://vercel.com/docs/deployments)
- [Condiciones del plan Hobby](https://vercel.com/docs/plans/hobby)

## Posit Connect Cloud

1. Sube el contenido completo del paquete descomprimido a un repositorio de GitHub. En el plan gratuito de Connect Cloud, utiliza un repositorio público.
2. Entra a Posit Connect Cloud y pulsa Publish. Autoriza su integración con el repositorio si es necesario.
3. Selecciona Static Document como framework. Esta versión del monitor es una aplicación del navegador servida mediante archivos HTML, CSS y JavaScript.
4. Selecciona el repositorio y la rama que contienen el paquete. Como Primary file utiliza index.html. Conserva app.js, data.js, model.js, styles.css y assets dentro del contenido publicado.
5. Completa la publicación y abre el enlace generado. Prueba los módulos y el PDF. Para actualizarlo, cambia el repositorio y utiliza la republicación automática o Republish, según la configuración elegida.

> Publicar este paquete como Static Document no ejecuta modelos en R o Python en el servidor. Una futura versión con cálculo en Shiny requerirá su propio código y dependencias.

- [Archivos estáticos en Connect Cloud](https://docs.posit.co/connect-cloud/user/content/static.html)
- [Publicación desde GitHub](https://docs.posit.co/connect-cloud/user/publish/github.html)

## Comprobación final

- El encabezado individual muestra Ana María García Sánchez de Ibarra.
- En T1, A1-A6 muestran 82, 77, 44, 55, 86 y 48 %, respectivamente.
- El botón Descargar diagnóstico personalizado abre o descarga el scorecard actualizado. Revisa sus tres páginas; el nombre propuesto de descarga es Scorecard_individual_Monitor_Formativo_v2.pdf.
- Las ayudas por competencia y las guías de práctica abren correctamente.
- Una meta marcada permanece registrada al recargar en el mismo navegador.
- Los filtros institucionales funcionan y el grupo de 18 participantes oculta sus resultados.

## Notas para mantener la publicación

- Sube los archivos de la carpeta descomprimida a la raíz de tu repositorio cuando la plataforma publique desde / (root). No subas solo el ZIP a GitHub ni guardes index.html dentro de una carpeta adicional.
- El paquete no requiere R, Python, Node ni una compilación para servir el monitor. Los módulos JavaScript necesitan una dirección HTTP/HTTPS: abrir index.html con doble clic puede impedir su funcionamiento.
- Mantén los nombres y las mayúsculas de los archivos. La ruta estable del scorecard es assets/scorecard_reporte_individual.pdf y el enlace incorpora ?v=90ec56904b5a para distinguir esta actualización.
- El PDF incluido se conserva byte por byte. Su QR y sus hipervínculos siguen apuntando al Monitor 2.0 publicado en https://monitor-formativo-mdc-unam-2-0.drvazque.chatgpt.site. Si deseas que apunten a tu nueva dirección, deberás actualizar el PDF posteriormente.
- Los datos son ilustrativos. Las casillas de las metas se guardan en el navegador y no se sincronizan entre dispositivos ni usuarios. Los campos del PDF se guardan en el propio documento, por separado.
- Para un reporte institucional utiliza Imprimir / guardar PDF dentro de esa vista. Se habilita para grupos con al menos 20 participantes.
- Si tienes un despliegue anterior, utiliza el mismo proyecto o repositorio para mantener su enlace. Espera a que termine su publicación y recarga sin caché si ves contenido antiguo.
