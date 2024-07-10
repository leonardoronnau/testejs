function carregar() {
var anonasc = document.getElementById('txtnascimento').value
  var anoAtual = new Date().getFullYear()
  var ano = anoAtual - anonasc
  var result = document.querySelector('.res')
 var sexo = document.getElementsByName('sexo')

if (sexo[0].checked ){
  result.innerHTML = `Você é um Homem de ${ano} ANOS`
  
}else if (sexo[1].checked){
    result.innerHTML = `Você é um Mulher de ${ano} ANOS`
  
}else if(sexo[2].checked) {
  result.innerHTML = `Você é uma Crinaça de ${ano} ANOS`
}
}