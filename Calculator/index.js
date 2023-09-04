//variables para operaciones
var operandoA = 0;
var operandoB = 0;
var operacion;

function init() {
    //obtenemos variables
    var result = document.getElementById("resultado");
    var uno = document.getElementById("uno")
    var dos = document.getElementById("dos")
    var tres = document.getElementById("tres")
    var cuatro = document.getElementById("4")
    var cinco = document.getElementById("5")
    var seis = document.getElementById("6")
    var siete = document.getElementById("7")
    var ocho = document.getElementById("8")
    var nueve = document.getElementById("9")
    var cero = document.getElementById("0")
    var suma = document.getElementById("mas")
    var resta = document.getElementById("menos")
    var multiplicacion = document.getElementById("multi")
    var division = document.getElementById("divi")
    var igual = document.getElementById("igual")
    var cancelar = document.getElementById("cancelar")
    var punto = document.getElementById("punto")
    var raiz = document.getElementById("raiz")
    var cuadrado = document.getElementById("cuadrado")
    

    function limpiar() {
        result.textContent = "";
    }

    uno.onclick = function(e) {
        result.textContent = result.textContent + "1";
    }

    punto.onclick = function(e) {
        result.textContent = result.textContent + ".";
    }

    dos.onclick = function(e) {
        result.textContent = result.textContent + "2";
    }

    tres.onclick = function(e) {
        result.textContent = result.textContent + "3";
    }

    cuatro.onclick = function(e) {
        result.textContent = result.textContent + "4";
    }

    cinco.onclick = function(e) {
        result.textContent = result.textContent + "5";
    }

    seis.onclick = function(e) {
        result.textContent = result.textContent + "6";
    }

    siete.onclick = function(e) {
        result.textContent = result.textContent + "7";
    }

    ocho.onclick = function(e) {
        result.textContent = result.textContent + "8";
    }

    nueve.onclick = function(e) {
        result.textContent = result.textContent + "9";
    }

    cero.onclick = function(e) {
        result.textContent = result.textContent + "0";
       
    }

    cancelar.onclick = function(e) {
        reset();
    }

    suma.onclick = function(e) {
        operandoA = result.textContent;
        operacion = "+";
        limpiar(); 
    }

    resta.onclick = function(e) {
        operandoA = result.textContent;
        operacion = "-";
        limpiar();
    }

    multiplicacion.onclick = function(e) {
        operandoA = result.textContent;
        operacion = "*";
        limpiar();
    }

    division.onclick = function(e) {
        operandoA = result.textContent;
        operacion = "/";
        limpiar();
    }
    raiz.onclick = function(e) {
        operandoA = result.textContent;
        operacion = "raiz";
        limpiar();
    }

    cuadrado.onclick = function(e) {
        operandoA = result.textContent;
        operacion = "cuadrado";
        limpiar();
    }
    igual.onclick = function(e) {
        operandoB = result.textContent;
        resolver();
    }

    



function reset() {
    result.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch(operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;

        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;

        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
        case "raiz":
            res = Math.sqrt((parseFloat(operandoA)));
            break;
        case "cuadrado":
            res = parseFloat(operandoA) ** 2;
            break;


    }

    reset();
    result.textContent = res;
}
}

//square root on js
