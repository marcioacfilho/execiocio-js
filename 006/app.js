function Somar(){

    let Valor1 = document.getElementById('n1').value
    let Valor2 = document.getElementById('n2').value

    let Coverter = parseFloat(Valor1) * parseFloat (Valor2)
  
    document.getElementById('resultado').innerHTML = Coverter
}