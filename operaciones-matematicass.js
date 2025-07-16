import { IVA, PI, Descuento } from "./constantes.js";

export function sumar (a,b){
    let suma= a + b;
    console.log("La suma es: ",suma);
    
}

export function restar (a,b){
    let resta= a - b;
    console.log("La resta es: ",resta);
}
export function multiplicar (a,b){
    let multi= a * b;
    console.log("La multiplicacion es: ",multi);
}

export function AreaCirculo (radio){
    let Area= PI * (radio*radio)
    console.log("EL area es:",Area);
    
}

export function CalcularTotal (precio , cantidad) {
    let precioTotal = precio * cantidad;
    console.log("El precio total es: ", precioTotal);    
}

export function aplicarImpuesto (total){
    let impuesto = total + (total * IVA)
    console.log("El total con impuesto es: ",impuesto);
}

export function aplicarDescuento (total){
    let descuento = total - (total * Descuento)
    console.log("El precio con decuento es: ",descuento);
}
