# Examen Pensamiento Computacional

# Bauhaus Hunter

**Estudiante:** Catalina Meza

[Link editable](https://editor.p5js.org/catalina.meza3/sketches/G5C12R4AQ)

[Sketch](sketch.js)




---

# Descripción general
**Bauhaus Hunter** es un videojuego interactivo desarrollado en **p5.js** como evolución de mi Solemne II.

El proyecto toma como base una composición inspirada en la Bauhaus y la transforma en una experiencia interactiva donde el usuario debe capturar círculos para aumentar su puntaje y avanzar entre distintos estados del sistema.

A medida que progresa el juego, la experiencia cambia incorporando la webcam como parte de su composición visual.

---

# Descripción objetiva

## ¿Qué es el proyecto?

Es un videojuego interactivo basado en una composición geometrica inspirada en la Bauhaus. El objetivo del jugador es capturar círculos para obtener el puntaje y completar el juego.

## ¿Qué se ve en la pantalla?

-Pantalla de inicio.

-Composición de círculos.

-Círculo objetivo.

-Puntaje del jugador.

-Webcam integrada al juego.

-Pantalla final.

## Elementos visuales

-Retícula de círculos.

-Texto.

-Círculo objetivo.

-Webcam.

-Composición final.

## Inputs

-Movimiento del mouse.

-Click del mouse.

-Tecla **ENTER**

-Tecla **R**

-Webcam.

## Outputs

-Movimiento de la retícula.

-Cambios de tamaño.

-Cambios de color.

-Actualización del puntaje.

-Cambio de estados.

-Integración de la webcam.

-Pantalla final.

---

# Descripción conceptual

## Idea central

La idea central fue transformar una composición en un sistema interactivo donde el usuario deja de ser un espectador y pasa a formar parte de la experiencia.

## Corriente o referente de diseño

**Bauhaus Dots 1919**

## Referentes visuales

-Bauhaus 

-Cartel conmemorativo que celebra los 100 años de la escuela Bauhaus 

-Diseño modular

-Solemne II

## Principios de diseño

-Repetición.

-Ritmo.

-Modulación.

-Geometría.

-Interactividad.

---

# Sistema computacional

## Inputs

El sistema recibe información desde:

-Mouse.

-Teclado.

-Webcam.

## Procesos

El programa interpreta constantemente las acciones del usuario mediante variables, funciones, condicionales y bucles.

Dependiendo del estado del sistema, modifica la composición visual, actualiza el puntaje, genera nuevas respuestas visuales.

## Estados

### Estado 0

Pantalla de inicio.

El usuario recibe las instrucciones para comenzar.

### Estado 1

Juego principal

El usuario debe capturar los círculos para aumentar su puntaje.

### Estado 2

Pantalla Final

Se muestra el puntaje obtenido y la opción de reiniciar el juego.

## Eventos

-Presionar **ENTER** inicia el juego.

-Hacer click con el mouse captura el objetivo.

-Al llegar a 10 puntos cambia al estado de webcam.

-Al llegar a 20 puntos aparece la pantalla final.

-Presiona **R** reinicia el juego.

## Outputs

-Composición interactiva.

-Puntaje actualizado.

-Cambios visuales.

-Webcam.

-Pantalla final.

---

# Explicación de la interacción.

## ¿Qué datos entran al sistema?

El sistema recibe información mediante el movimiento del mouse, los clicks del usuario, las teclas presionadas y la imagen capturada por la webcam.

## ¿Cómo se procesan?

Toda la información se procesa continuamente dentro de la función 'draw()'.

El programa utiliza variables para almacenar datos, condicionales para controlar la lógica, funciones para organizar el código y bucles para generar la composición.

## ¿Cómo se transforman?

Los movimientos del mouse modifican la composición utilizando 'map()'. Los clicks aumentan el puntaje y generan una nueva posición aleatoria del objetivo mediante 'random()'.

## ¿Qué respuestas producen?

El sistema responde mediante cambios en la retícula, actualización del puntaje, cambios de estado e incorporación de la webcam como parte de la experiencia visual.

---

# Recursos de multimedia

## Tipo de recurso

-Webcam.

## Función dentro del proyecto

La webcam incorpora al usuario dentro del sistema interactivo. En el segundo nivel se integra a la composición utilizando transparencia y modos de mezcla para generar una nueva experiencia visual.

---

# Registro del proceso

## Referentes
**Bauhaus Dots 1919**











