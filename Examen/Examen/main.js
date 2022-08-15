// API thedogapi
const urlApiDograndom = 'https://api.thedogapi.com/v1/images/search?limit=3api_key=1100b599-f09b-4b7f-a110-bb613a8299ea';

//favorite dogs
const urlApiDogFavorite = 'https://api.thedogapi.com/v1/favourites?3api_key=1100b599-f09b-4b7f-a110-bb613a8299ea';

//add dogs
const urlAddpiDogFavorite = 'https://api.thedogapi.com/v1/favourites?3api_key=1100b599-f09b-4b7f-a110-bb613a8299ea';

//remove dogs
const urlRemovepidogFavorite = 'https://api.thedogapi.com/v1/favourites/';
// Funcion obtener perros ramdomicos 
const getDogRandom = async () => {
    const response = await fetch(urlApiDogRandom);
    const data = await response.json();
    const div = document.querySelector('#getDogtRandon__dogs');
    const array = [];
    data.forEach(dog => {
        div.innerHTML= '';
        //creando mi imagen 
        const img = document.createElement('img');
        img.src = dog.url
        img.width = 200;
        img.height = 200;
        array.push(img)

        //creando mi button
        const button = document.createElement('button');
        button.innerHTML = "Agregar a favoritos";
        button.onclick = () =>{
            addDogsFavorite(dog.id);
        }
        array.push(button);
    });
    div.append(...array);
    console.log(data[0].id);

}
//funcion para perros favoritos 
const getDogsFavorite = async () => {
    const response = await fetch (urlApiDogFavorite);
    const data =await response.json();
    const div = document.querySelector('#getDogFavorite__dogs');
    const array = [];
    data.map(catg)

}