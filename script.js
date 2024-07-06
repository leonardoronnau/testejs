//var hora = new Date().getHours();
var hora = 13
var horario = document.getElementById('horario');
horario.innerHTML = `Agora são ${hora} horas!`

var image = document.querySelector('#image');

if (hora >= 7 && hora <=12) {
image.src="image/dia.jpg"
}else if (hora >= 13 && hora <=18) {
image.src="image/tarde.jpg"
}else {
   image.src="image/noite.jpg"
}