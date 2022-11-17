function Somar(){
    let valor1 = document.getElementById('nome').value
    let valor2 = document.getElementById('altura').value
    let valor3 = document.getElementById('sexo').value
    

    document.getElementById('resultado1').innerHTML = valor1
    document.getElementById('resultado2').innerHTML = valor2
    document.getElementById('resultado3').innerHTML = valor3

    document.getElementById("nome").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("sexo").value = "";

}