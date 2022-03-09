const pokemonApi = 'https://pokeapi.co/api/v2/pokemon/'; // Almaceno la URL de la API

const gallery = document.querySelector('[data-function="test"]');

//for (i = 1; i < 152; i++ ){
//    fetch(pokemonApi + i)
//    .then((response) =>{
//        return response.json();
//    })
//    .then((pokemones) =>{
//        console.log(pokemones);
//
//    })
//}

const getPokemons = async () => {
    for (i = 1; i < 152; i++){
        const rawData = await fetch(pokemonApi + i);
        const pokemonsData = await rawData.json();
        console.log(pokemonsData);

        printPokemons(pokemonsData);
    } 
}

const printPokemons = (pokemons) => { //Declaro la función que pintará los pokemones en el HTML.
    
        const figure$$ = document.createElement('figure');
        const name = document.createElement('h3');
        const image = document.createElement('img');

        name.textContent = pokemons.name; 
        image.src = pokemons.sprites.front_default;
        image.alt = pokemons.name;

        figure$$.appendChild(name);
        figure$$.appendChild(image);
        gallery.appendChild(figure$$);
    }

getPokemons()