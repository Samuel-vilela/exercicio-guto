// 7. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.C = 5 * ((F-32) / 9).

function mosstrarresultado(){
    let graus = parseFloat(document.getElementById("graus").value) 

    let celsius = (graus - 32)/ 1.8 

    document.getElementById("celsius").innerText = "Celsius: " + celsius ;

    document.getElementById("graus").value = ""; 



}