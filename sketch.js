let columnas = 15;
let filas = 20;

let estado = 0;
let puntaje = 0;

let cam;

let objetivo = {
  x: 200,
  y: 200,
  tam: 40
};

let colorObjetivo = true;

function setup() {
  createCanvas(700, 900);

  cam = createCapture(VIDEO);
  cam.size(width, height);
  cam.hide();
}

function draw() {

  if (estado == 0) {
    inicio();

  } else if (estado == 1) {
    juego();

  } else if (estado == 2) {
    juegoWebcam();

  } else if (estado == 3) {
    finalJuego();
  }
}

function inicio() {
  background(230, 225, 215);

  fill(0);
  textAlign(CENTER);

  textSize(40);
  text("BAUHAUS HUNTER", width / 2, height / 2 - 20);

  textSize(20);
  text("Presiona ENTER para comenzar", width / 2, height / 2 + 30);

  textSize(16);
  text("Atrapa los circulos rojos", width / 2, height / 2 + 60);
}

function juego() {
  background(230, 225, 215);

  composicion();

  dibujarObjetivo();

  fill(0);
  textSize(24);
  textAlign(LEFT);
  text("Puntaje: " + puntaje, 20, 40);
}

function juegoWebcam() {

  tint(255, 180);
  image(cam, 0, 0, width, height);
  noTint();

  blendMode(MULTIPLY);

  composicion();

  blendMode(BLEND);

  dibujarObjetivo();

  fill(255);
  textSize(24);
  textAlign(LEFT);
  text("Puntaje: " + puntaje, 20, 40);

  fill(255);
  textSize(18);
  text("Nivel Webcam", 20, 70);
}

function finalJuego() {
  background(0);

  fill(255);

  textAlign(CENTER);

  textSize(45);
  text("GANASTE", width / 2, height / 2 - 40);

  textSize(25);
  text("Puntaje Final: " + puntaje,
       width / 2,
       height / 2 + 10);

  textSize(18);
  text("Presiona R para reiniciar",
       width / 2,
       height / 2 + 60);

  push();

  translate(width / 2, height / 2 + 150);

  for (let i = 0; i < 8; i++) {
    rotate(PI / 4);

    fill(random(255), random(255), random(255));
    ellipse(50, 0, 40, 20);
  }

  fill(255, 255, 0);
  circle(0, 0, 40);

  pop();
}

function dibujarObjetivo() {

  if (colorObjetivo == true) {
    fill(255, 0, 0);
  } else {
    fill(255, 150, 0);
  }

  noStroke();

  circle(
    objetivo.x,
    objetivo.y,
    objetivo.tam
  );
}

function mousePressed() {

  if (estado == 1 || estado == 2) {

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

    if (puntaje >= 10) {
      estado = 2;
    }

    if (puntaje >= 20) {
      estado = 3;
    }
  }
}

function keyPressed() {

  if (keyCode === ENTER) {
    estado = 1;
  }

  if (key == "r" || key == "R") {

    puntaje = 0;

    estado = 0;

    objetivo.x = random(50, width - 50);
    objetivo.y = random(50, height - 50);
  }
}

function composicion() {

  let desplazamiento = map(
    mouseX,
    0,
    width,
    50,
    200
  );

  let tamañoInicial = map(
    mouseY,
    0,
    height,
    5,
    60
  );

  for (let y = 0; y < filas; y++) {

    for (let x = 0; x < columnas; x++) {

      let px = 50 + x * 45;
      let py = 100 + y * 40;

      let movimiento = map(
        abs(y - filas / 2),
        0,
        filas / 2,
        -desplazamiento,
        0
      );

      let onda =
        sin(frameCount * 0.03 +
            x * 0.5 +
            y * 0.2) * 15;

      px = px + movimiento + onda;

      let tam = map(
        x,
        0,
        columnas - 1,
        5,
        tamañoInicial
      );

      if (mouseX > width / 2) {
        fill(20);
      } else {
        fill(80);
      }

      if (tam > 30) {
        fill(0);
      }

      if (mouseY < height / 3) {
        fill(50);
      }

      noStroke();

      circle(px, py, tam);
    } 
  }
}