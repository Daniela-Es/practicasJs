
var reloj = document.getElementById("reloj");

// console.log(reloj);

// arquitecturas o esquemas de datos
// clases en js
// new Date --> clase tipo de fecha ya viene en el objeto global



// var anio = fecha.getFullYear();

// console.log(fecha.getFullYear());



function getHours() {
    var fecha = new Date();
    // console.log(fecha);

    // objetos
    var hora = {
        hora: fecha.getHours(),
        minutos: fecha.getMinutes(),
        segundos: fecha.getSeconds()
    }

    // console.log(hora);

    // template strings
    // notacion de punto de los objetos
    reloj.innerHTML = `${hora.hora} : ${hora.minutos} : ${hora.segundos}` 
}
// ejecuta fn en un intervalo determinado

// depreciado o viejo:
// setInterval(getHours,800);

// arrow function o funciones de flecha

setInterval(() => {
    getHours()  
}, 800);

