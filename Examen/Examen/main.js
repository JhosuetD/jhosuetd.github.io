// API thedogapi https://api.thedogapi.com/v1/images/search
const urlApiDogRandom = 'https://api.thedogapi.com/v1/images/search?limit=4&api_key=1100b599-f09b-4b7f-a110-bb613a8299ea';
//
//favorite dogs
const urlApiDogFavorite = 'https://api.thedogapi.com/v1/favourites?4api_key=1100b599-f09b-4b7f-a110-bb613a8299ea';


//add dogs
const urlAddpiDogFavorite = 'https://api.thedogapi.com/v1/favourites?4api_key=1100b599-f09b-4b7f-a110-bb613a8299ea';

//remove dogs
const urlRemovepidogFavorite = 'https://api.thedogapi.com/v1/favourites/';

//Funcion obtener perros ramdomicos 
const getDogRandom = async () => {
    const response = await fetch(urlApiDogRandom);
    const data = await response.json();

    const div = document.querySelector('#getDogRandon__dogs');
    const array = [];
    data.forEach(dog => {
        //div.innerHTML= '';
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
            addDogFavorite(dog.id);
        }
        array.push(button);
    });
    div.append(...array);
}



//funcion para perros favoritos 
const getDogFavorite = async () => {
    const response = await fetch (urlApiDogFavorite);
    const data = await response.json();
    const div = document.querySelector('#getDogFavorite__dogs');
    const array = [];
    data.map(catg => {
        const img = document.createElement('img');
        img.src = catg.image.url;
        img.alt = catg.user_id;
        img.className = "img-favorite";
        img.width = 200;
        img.height = 200;
        array.push(img);

        //creando mi button
        const button = document.createElement('button');
        button.innerHTML = "Eliminar a favoritos";
        button.onclick = () =>{
            removeDogFavorite(catg.id);
        }
        array.push(button);
    });
    div.append(...array);
}

// funcion para agregar los  Perros a favoritos 

const addDogFavorite = async (id) =>{
    const response = await fetch(urlAddpiDogFavorite, {
        method: "POST" ,
        headers: {
            "Content-Type" : 'application/json',
        },
        body:JSON.stringify({
            image_id: id,
        }),
    });
    getDogFavorite();
}
//funcion para eliminar de favoritos 
const removeDogFavorite = async (id) =>{
    const response = await fetch(`${urlRemovepidogFavorite}${id}?api_key=1100b599-f09b-4b7f-a110-bb613a8299ea`,{
        method: 'DELETE',
    });
    getDogFavorite();
}

getDogFavorite();

//getDogRandom();
