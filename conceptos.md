# VIEWPORT 

Es la parte visible del navegador en la que se puede ver el contenido de la página sin hacer scroll

## Medidas relativas
Una medida depende de su contexto
Una meidida varía y se adata en función del contexto
Dependiendo de qué medida elijamos será relativa a:
- el contenedor padre
- el tamaño de la fuente del sitio
- el tamaño de la fuente del padre
- el tamaño del viewport

### Porcentaje
Siempre estará en función del elemento padre
No es recomendable para el alto de un elemento

### EMS
Siempre relativo al tamaño de la fuente del elemento padre

### Viewport
vw_ relativo al ancho total del viewport
vh: relativo al alto total
50vw será equivalente al 50% del ancho de viewport

### Media Queries
Conjunto de reglas CSS para cambiar estilos en función del dispositivo
La mayoría de los estilos estará por fuera
Dentro de cada media querie solo lo que se necesita ajustar para ese breakpoint

min-width: desde este ancho hacia arriba
max-width: desde este ancho hacia abajo
orientation

Ejemplo
@media ( min-width: 460px)
