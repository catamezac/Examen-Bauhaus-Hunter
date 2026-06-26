# Examen Pensamiento Computacional

# Bauhaus Hunter

**Estudiante:** Catalina Meza


---

# Descripción general
**Bauhaus Hunter** es un videojuego interactivo desarrollado en **p5.js** como evolución de mi Solemne II.

El proyecto toma como base una composición inspirada en la Bauhaus y la transforma en una experiencia interactiva donde el usuario debe capturar círculos para aumentar su puntaje y avanzar entre distintos estados del sistema.

A medida que progresa el juego, la experiencia cambia incorporando la webcam como parte de su composición visual.

---

# Descripción objetiva

## ¿Qué es el proyecto?

Es un videojuego interactivo basado en una composición geométrica inspirada en la Bauhaus. El objetivo del jugador es capturar círculos para obtener el puntaje y completar el juego.

## ¿Qué se ve en la pantalla?

-Pantalla de inicio.

- Composición de círculos.

- Círculo objetivo.

- Puntaje del jugador.

- Webcam integrada al juego.

- Pantalla final.

## Elementos visuales

- Retícula de círculos.

- Texto.

- Círculo objetivo.

- Webcam.

- Composición final.

## Inputs

- Movimiento del mouse.

- Click del mouse.

- Tecla **ENTER**

- Tecla **R**

- Webcam.

## Outputs

- Movimiento de la retícula.

- Cambios de tamaño.

- Cambios de color.

- Actualización del puntaje.

- Cambio de estados.

- Integración de la webcam.

- Pantalla final.

---

# Descripción conceptual

## Idea central

La idea central fue transformar una composición en un sistema interactivo donde el usuario deja de ser un espectador y pasa a formar parte de la experiencia.

## Corriente o referente de diseño

**Bauhaus Dots 1919**

## Referentes visuales

- Bauhaus 

- Cartel conmemorativo que celebra los 100 años de la escuela Bauhaus 

- Diseño modular

- Solemne II

## Principios de diseño

- Repetición.

- Ritmo.

- Modulación.

- Geometría.

- Interactividad.

---

# Sistema computacional

## Inputs

El sistema recibe información desde:

- Mouse.

- Teclado.

- Webcam.

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

Juego con webcam

### Estado 3

Pantalla final.

Se muestra el puntaje obtenido y la opción de reiniciar el juego.

## Eventos

- Presionar **ENTER** inicia el juego.

- Hacer click con el mouse captura el objetivo.

- Al llegar a 10 puntos cambia al estado de webcam.

- Al llegar a 20 puntos aparece la pantalla final.

- Presiona **R** reinicia el juego.

## Outputs

- Composición interactiva.

- Puntaje actualizado.

- Cambios visuales.

- Webcam.

- Pantalla final.

---

# Explicación de la interacción.

## ¿Qué datos entran al sistema?

El sistema recibe información mediante el movimiento del mouse, los clics del usuario, las teclas presionadas y la imagen capturada por la webcam.

## ¿Cómo se procesan?

Toda la información se procesa continuamente dentro de la función draw().

El programa utiliza variables para almacenar datos, condicionales para controlar la lógica, funciones para organizar el código y bucles para generar la composición.

## ¿Cómo se transforman?

Los movimientos del mouse modifican la composición utilizando 'map()'. Los clicks aumentan el puntaje y generan una nueva posición aleatoria del objetivo mediante random().

## ¿Qué respuestas producen?

El sistema responde mediante cambios en la retícula, actualización del puntaje, cambios de estado e incorporación de la webcam como parte de la experiencia visual.

---

# Recursos de multimedia

## Tipo de recurso

- Webcam.

## Función dentro del proyecto

La webcam incorpora al usuario dentro del sistema interactivo. En el segundo nivel se integra a la composición utilizando transparencia y modos de mezcla para generar una nueva experiencia visual.

---

# Registro del proceso

## Referente

**Bauhaus Dots 1919**

![Imagen](referente.webp)

## Bocetos

![Imagen](boceto1.png)

![Imagen](boceto2.png)

## Iteraciones

**Iteración 1** 

Composición base Bauhaus interactiva

En la primera versión desarrollé una composición inspirada en la Bauhaus utilizando una retícula de círculos.

La estructura fue creada mediante un **loop anidado**, lo que permitió generar automáticamente las filas y columnas de la composición.

También incorporé map() para que el movimiento del mouse modificara el desplazamiento y el tamaño de los círculos, logrando una composición dinámica.

**Elementos incorporados**

- Retícula de círculos.
- Loop anidado.
- map().
- Condicionales para modificar los colores.
- Movimiento mediante sin (frameCount.
  
![Imagen](captura1.png)

**Iteración 2**

Objetivo, puntaje y clicks.

La segunda etapa consistió en transformar la composición en un videojuego.

Para ello agregué un círculo objetivo que el usuario debía capturar haciendo clic sobre él.

Cada captura aumenta el puntaje y el objetivo cambia de posición utilizando random().

También incorporé eventos de mouse para detectar cuándo el usuario logra capturar el objetivo.

**Mejoras realizadas**

- Variable de puntaje.
- Objeto "objetivo".
- Evento mousePressed.
- Detección mediante dist().
- Posiciones aleatorias con random.

![Imagen](captura2.png)

**Iteración 3**

Estados, menú y pantalla de inicio.

Después incorporé distintos estados para que el proyecto dejara de ser solamente una composición interactiva.

El programa quedó dividido en cuatro etapas:

- Pantalla de inicio.
- Juego.
- Juego con webcam.
- Pantalla final.

Cada estado tiene una lógica distinta y se controla mediante la variable estado.

**Mejoras realizadas**

- Variable estado.
- Condicionales if y else if.
- Pantallas independientes.
- Transición automática entre niveles.

![Imagen](captura3.png)

## Capturas del proyecto

![Imagen](imagen1.png)

![Imagen](imagen2.png)

![Imagen](imagen3.png)

![Imagen](imagen4.png)

![Imagen](imagen5.png)

![Imagen](imagen6.png)

![Imagen](imagen7.png)

![Imagen](imagen8.png)

![Imagen](imagen9.png)


### Pantalla de inicio

![Imagen](pantallainicio.png)


### Juego

![Imagen](juego.png)


### Pantalla final

![Imagen](pantallafinal.png)

---

# Reflexión final

Mi objetivo fue transformar la composición desarrollada en la Solemne II en un sistema interactivo más completo.

Decidí mantener la estética inspirada en la Bauhaus porque representaba el concepto inicial del proyecto, pero incorporando distintos estados, objetivos y multimedia para generar una experiencia más dinámica.

La principal dificultad fue organizar el código para que cada estado funcionara correctamente y lograr integrar la webcam sin perder la composición principal.

Este proyecto me permitió comprender mejor cómo estructurar un programa utilizando variables, funciones, objetos, condicionales y bucles, además de entender cómo un sistema interactivo responde constantemente a las acciones del usuario.


# Diagrama de flujo

![Imagen](diagrama.png)


# Enlaces

## Proyecto en p5.js

[Link editable](https://editor.p5js.org/catalina.meza3/sketches/G5C12R4AQ)


### Código

[Código fuente](sketch.js)


```javascript
function mousePressed() {

  let distancia = dist(
    mouseX,
    mouseY,
    objetivo.x,
    objetivo.y
  );

  if (distancia < objetivo.tam / 2) {

    puntaje++;

    objetivo.x = random(50, width - 50);
    objetivo.y = random(50, height - 50);

    colorObjetivo = !colorObjetivo;
  }
}
```


## Repositorio de GitHub

[Link GitHub](https://github.com/catamezac/Examen-Bauhaus-Hunter)





















