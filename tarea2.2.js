/*Realizar el consumo de una API (la trabajada en clase) utilizando
Promesas y utilizando XMLHTTPREQUEST mostrar la misma
información de salida que se obtuvo con Promise y Callback.*/

const xhttp = new XMLHttpRequest();
const API = `https://rickandmortyapi.com/api`;
 
const fetchData = (urlAPi) => {
    return new Promise((resolved, reject) => {
        xhttp.open("GET", urlAPi, true);
        xhttp.onreadystatechange = (eve) => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolved(JSON.parse(xhttp.responseText));
                }else{
                    const error = new Error("Error "+urlAPi)
                    reject(error);
                }
            }
        }
        xhttp.send();
    })
}
 
fetchData(`${API}/character`)

    .then(res => {
         console.log(res)
})
