// 4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
function mostrarnota(){
    let nota1 = parseFloat(document.getElementById("nota1").value) 
    let nota2 = parseFloat(document.getElementById("nota2").value) 
    let nota3 = parseFloat(document.getElementById("nota3").value) 
    let nota4 = parseFloat(document.getElementById("nota4").value)
    
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4)){
    let soma = nota1 + nota2 + nota3 + nota4;
    let media = soma / 4; 
    document.getElementById("media").innerText = "A media final é: " + media;
    } else{
    document.getElementById("media").innerText = "Por favor digite numeros validos"
    } 

    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";

}