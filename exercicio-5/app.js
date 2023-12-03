function mostrarresultado(){
    let metros = parseFloat(document.getElementById("metros").value)

    if (!isNaN(metros)){
    let centimetros = metros * 100; 
    document.getElementById("resultado").innerText = "os metros convertidos em centimetros é: " + centimetros
    } else {
        document.getElementById("resultado").innerText = "Por favor digite numeros validos"
    }

    document.getElementById("metros").value = "";
    
    
}