function calcular() {
    var resposta = document.querySelector('#textres')
    var resultado = document.querySelector('.res')
    
    var res = resposta.value
    if(res == 'muito de montao') {
      resultado.innerHTML = '<p>vamos fazer um neneco agora</p>'
    } else if(res == 'sim') {
        resultado.innerHTML =  '<p>vem me da um BeiJo </p>' 
    }
    else if(res == 'não') {
        resultado.innerHTML =  '<p>VA da o TOBA </p>' 
    }
}
