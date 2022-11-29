 
function setup() {
  createCanvas(600, 450);
  somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  moveCarro();
  moveAtor();
  retorna();
  verificaColisao(); 
  atravessou();
  ganhaPonto();
  //preLoadSound();
}