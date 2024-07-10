function carregar() {
var anonasc = document.getElementById('txtnascimento').value
  var anoAtual = new Date().getFullYear()
  var ano = anoAtual - anonasc
  var result = document.querySelector('.res')
 var sexo = document.getElementsByName('sexo')
var img = document.createElement('img')
if (sexo[0].checked ){
  result.innerHTML = `Você é um Homem de ${ano} ANOS`
  img.src = 'image/dia.jpg'
   result.appendChild(img) 
   
}else if (sexo[1].checked){
    result.innerHTML = `Você é um Mulher de ${ano} ANOS`
    img.src = 'image/tarde.jpg'
   result.appendChild(img) 
}else if(sexo[2].checked) {
  result.innerHTML = `Você é uma Crinaça de ${ano} ANOS`
  img.src = 'image/noite.jpg'
  result.appendChild(img) 
}
}