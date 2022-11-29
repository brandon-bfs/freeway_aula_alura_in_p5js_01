//var ator
let yAtor = 415
let xAtor = 300
let colidiu = false;
let comprimentoAtor = 40;
let alturaAtor = 30;
let pontuacao = 0;


function mostraAtor(){
  image(imgAtor,xAtor,yAtor,comprimentoAtor,alturaAtor);  
  }

function moveAtor(){
  if (keyIsDown(UP_ARROW)){
  yAtor -= 3;  
    }
  if (keyIsDown(DOWN_ARROW)){
    if(podeMoverY()){
     yAtor += 3;  
    }
  }
  
  if (keyIsDown(LEFT_ARROW)){
    if(podeMoverXN()){
      xAtor -= 3;  
    }
  }
    
  if (keyIsDown(RIGHT_ARROW)){
   if(podeMoverXP()){
     xAtor += 3; 
     }
    }
  }

function verificaColisao(){
  for (let i = 0; i < imgCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i],yCarros[i],comprimentoAtor,alturaAtor,xAtor,yAtor, 30);
    if(colidiu){
    restart();
      somColisao.play()
      if(pontuacao > 0){
        pontuacao -=1;
      }
    }
  }
}

function ganhaPonto(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,0))
  text(pontuacao, width / 5, 30);
}

function atravessou(){
  if (yAtor < 4){
    restart();
    pontuacao++;
    somPonto.play();
  }
}

function podeMoverY(){
  return yAtor < 414;
}
  
function podeMoverXP(){
  return xAtor < 560;
}

function podeMoverXN(){
  return xAtor > 1;
}

function restart(){
    xAtor = 300;
    yAtor = 415;
}

