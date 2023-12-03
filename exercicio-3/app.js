// 3. Faça um Programa que peça dois números e imprima a soma. 

function mostrarnumero() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let soma = numero1 + numero2;
        document.getElementById("resposta!").innerText = "A soma é: " + soma;
    } else {
        document.getElementById("resposta!").innerText = "Por favor, digite números válidos.";
    }

    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}