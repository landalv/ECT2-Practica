"use strict";

function agregarRegistro() {
    //sacamos los elementos de los cuales vamos a sacar los datos
    let producto = document.getElementsByName("producto");
    let cantidad = document.getElementsByName("cantidad");
    let precioUnitario = document.getElementsByName("preciounitario");
    let descuento = document.getElementsByName("descuento");

    //almacenamos los datos para que sean mas facil de acceder
    let registro = {
        "producto": producto[0].value,
        "cantidad": cantidad[0].value,
        "precioUnitario": precioUnitario[0].value,
        "descuento": descuento[0].value
    };

    //mostramos por pantalla los elementos
    //console.log(producto);
    //console.log(cantidad);
    //console.log(precioUnitario);
    //console.log(descuento);

    //mostramos por pantalla los valores de cada elemenmto del formulario
    console.log(registro.producto);
    console.log(registro.cantidad);
    console.log(registro.precioUnitario);
    console.log(registro.descuento);
}

//asignamos la funcion a la accion click del "botton"
document.getElementById("agregarLinea").addEventListener("click", agregarRegistro);