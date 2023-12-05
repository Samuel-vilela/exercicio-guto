// 6. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

function mostrarresultado(){
    let salario = parseFloat(document.getElementById("salario").value) 
    let horas = parseFloat(document.getElementById("horas").value)
    
    let resultado = (salario * horas)

    document.getElementById("resultado").innerText = "salário no referido mês" + resultado ;

    document.getElementById("salario").value = "";
    document.getElementById("horas").value = "";
}