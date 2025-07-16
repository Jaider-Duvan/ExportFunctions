import { PI , IVA , Dias_Semana} from "./constantes.js";

let radio =5; 
let areaCirculo = PI * (radio * radio)

console.log("El area del circulo es: ",areaCirculo);

let precio = 100
let PrecioIVA =precio+ (precio * IVA);

console.log("El precio total es: ",PrecioIVA);

console.log("El tercer dia es:", Dias_Semana[2]);
//!  Ejercicio 2
import { sumar, restar, multiplicar,AreaCirculo } from "./operaciones-matematicass.js";

sumar(3,8);
restar(9,3);
multiplicar(5,4);
AreaCirculo(9);

//!  Ejercicio 3
import {CalcularTotal,aplicarImpuesto,aplicarDescuento } from "./operaciones-matematicass.js";

CalcularTotal(500,4)
CalcularTotal (600 , 10)
CalcularTotal(700,3)

