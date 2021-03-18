
function saludar() {

    var texto = document.querySelector(".texto")
    console.log(texto);

    var hola = console.log(`hola 
    mundo`);
    texto.innerHTML = hola;
}
saludar();

function area() {

    var lado = document.querySelector("#lado");
    // console.log(lado.value);
    var area = lado.value * lado.value;
    // console.log(area);
    var resultado = document.querySelector(".resultado");
    resultado.innerHTML = area;
}
//invocando funcion area [!!!]
area();

function imc() {

    var peso = document.querySelector("#peso");
    console.log(peso.value);
    var altura = document.querySelector("#altura");
    console.log(altura.value);
    var imc = peso.value/(altura.value*altura.value);
    console.log(imc);
    var respuesta = document.querySelector(".imc");
    respuesta.innerHTML = imc.toFixed(2);
}
imc();

function numpar() {

    var numero = document.querySelector("#numero");
    // console.log(numero.value);
    var aux = numero.value % 2;
    // console.log(aux);

    if (aux == 0 || aux == -0) {
        var si = 'si'
        var res = document.querySelector(".res");
        res.innerHTML = si;
    } else {
        var no = 'no'
        var res = document.querySelector(".res");
        res.innerHTML = no;
    }
}
numpar();



