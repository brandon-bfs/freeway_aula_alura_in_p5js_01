//imagens
let imgEstrada;
let imgAtor;
let carUm;
let carDois;
let carTres;
//sons
let somTrilha;
let somPonto;
let somColisao;

function preload(){
  imgEstrada = loadImage('images/estrada.png');
  imgAtor = loadImage('images/ator-1.png');
  carUm = loadImage('images/carro-1.png');
  carDois = loadImage('images/carro-2.png');
  carTres = loadImage('images/carro-3.png');
  imgCarros = [carUm,carDois,carTres,carUm,carDois,carTres];
  
  somTrilha = loadSound('sounds/trilha.mp3');
  somPonto = loadSound('sounds/pontos.wav');
  somColisao = loadSound('sounds/colidiu.mp3');
}
