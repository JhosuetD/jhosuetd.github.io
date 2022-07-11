
 /* callback

 function saludar(saludo){
       saludo();
    }
   
   saludar(function(nombre) {
   console.log(`Hola ${nombre}`) })

 promesas
let x = 11
const p = new Promise((resolve, reject) =>{
if(x == 10){
resolve('La variable es igual a 10');
}else{
reject('La variable no es igual a 10');
}
});

*/
async function nombrar_pokemones() {
    for (let i = 1; i < 6; i++) {
    let pokemon = await obtener_pokemon(i);
    console.log(pokemon.name);
    }
}
