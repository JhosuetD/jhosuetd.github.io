/* 2 AÑO BICIESTO
Construir un programa que pida un año y luego determine si el
año es bisiesto o no. Tenga en cuenta que los años bisiestos son
los números múltiplos de 4, pero que no son múltiplos de 100 y si
son múltiplos de 100 y múltiplos de 400 sí son bisiestos.
*/

let anio;
anio = prompt ("Ingrese el año ");
anio = parseInt(anio)
if ((anio% 4==0) && (anio% 100 !=0 || anio%400 == 0 )){
    console.log( "EL año ES BICIESTO");

} else{
    console.log("EL año NO ES BICIESTO");
}
