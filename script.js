function carregar(){

var hora = new Date().getHours();

var horario = document.getElementById('horario');
horario.innerHTML = `Agora são ${hora} horas!`

var image = document.querySelector('#image');

if (hora >= 7 && hora <=12) {
image.src="image/dia.jpg"
document.body.style.background = '#ff0f00';
}else if (hora >= 13 && hora <=18) {
image.src="image/tarde.jpg"
document.body.style.background = '#00f000'
}else {
   image.src="image/noite.jpg"
  document.body.style.background = '#FF00FF'
}

}