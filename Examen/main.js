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
    
}