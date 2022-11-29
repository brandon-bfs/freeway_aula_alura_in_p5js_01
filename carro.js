//y dos carros
let xCarros = [600,600,600,600,600,600]
let yCarros = [42,105,166,293,236,355];
let vCarros = [5.8,2.5,6,5,3.5,4.2,7]

//carrega imagens dos carros
function mostraCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i],xCarros[i],yCarros[i],50,50); 
  }
}

//movimenta os carros e retorna para o inicio
function moveCarro(){
  for (let i =0; i < imgCarros.length; i++){
    xCarros[i] -= vCarros[i]
  }

}
//retorna carros para inicio
function retorna(){
  for (let i=0; i < imgCarros.length; i++){
    if (xCarros[i] <- 40){
      xCarros[i] = 600;
    }
  }
}