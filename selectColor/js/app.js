// recuerda variables locales y globales

// declarando funcion
function cambioColor() {
    // querySelector 
    var color = document.querySelector("#color");
    // color.value : obtengo el valor del input con la propiedad value del elemento color --> es un elemento que obtengo por medio del querySelectoe mediante el DOM
    console.log(color.value);

    var texto = document.querySelector("#hexadecimal");

    texto.innerHTML = color.value;

    // podria utilizar tambien getElemetByClassName
    var div = document.querySelector(".colorDiv");

    div.style.backgroundColor = color.value;


// cambio de color del icono de la brochita
    var cambio = document.querySelector("#brocha");
    console.log(cambio);

    cambio.style.color = color.value;
}
// llamando o invocando funcion
cambioColor();


