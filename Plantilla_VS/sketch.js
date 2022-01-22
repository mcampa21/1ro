//Declarar variables con objetos
var pelota; 
//Funcion de configuracion
function setup() {
  //Diseño de area de juego
  createCanvas(400,400);
  //Diseñoi de objeto 
  pelota=createSprite(200,200,50,50);
}

//Funcion de dibujo
function draw() 
{
  //Establecer color de fondo
  background(51);
  
  if (keyDown("d")) {
    pelota.position.x=pelota.position.x+5;
    background("red");
  }
  
  //Codigo para proyectar objetos
  if (keyDown("a")) {
    pelota.position.x=pelota.position.x-5;
    background("blue");
  }
  
  if (keyDown("w")) {
    pelota.position.y=pelota.position.y-5;
    background("yellow");
  }
  
  if (keyDown("s")) {
    pelota.position.y=pelota.position.y+5;
    background("green");
  }
  
  drawSprites();
}

