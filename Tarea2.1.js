/* Realizar el consumo de una API (la trabajada en clase) utilizando
Async y Await la cual permita mostrar la misma información de
salida que se obtuvo con Promise y Callback.
API: https://rickandmortyapi.com/api  */ 

import fetch from 'node-fetch'
const API = 'https://rickandmortyapi.com/api';

const fetchdata = (urlAPI) => {
    return fetch(urlAPI).then(res => res.json());
}
cost anotherfn = async () => {
    try {
        cost data1 = await fetchdata (`${API/character}`)     
        }
        
    } catch (error) {
        console.log(data1);  
 }

 
cost anotherfn = async () => {
    try {
        cost data2 = await fetchdata (`${API/character}`)     
        }
        
    } catch (error) {
        console.log(data2);  
 }
 
cost anotherfn = async () => {
    try {
        cost data3 = await fetchdata (`${API/character}`)     
        }
        
    } catch (error) {
        console.log(data3);  
 }




