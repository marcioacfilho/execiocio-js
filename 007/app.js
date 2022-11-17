function Somar(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    let valor3 = document.getElementById('n3').value
    let valor4 = document.getElementById('n4').value
    let valor5 = document.getElementById('n5').value
    
    let total1 = (parseFloat(valor1) * parseFloat (valor1))
    let total2 = (parseFloat(valor1) * parseFloat (valor2))
    let total3 = (parseFloat(valor1) * parseFloat (valor3))
    let total4 = (parseFloat(valor1) * parseFloat (valor4))
    let total5 = (parseFloat(valor1) * parseFloat (valor5))

    document.getElementById('resultado1').innerHTML = total1
    document.getElementById('resultado2').innerHTML = total2
    document.getElementById('resultado3').innerHTML = total3
    document.getElementById('resultado4').innerHTML = total4
    document.getElementById('resultado5').innerHTML = total5
}