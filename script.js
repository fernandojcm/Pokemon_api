const pokemonApi = 'https://pokeapi.co/api/v2/pokemon/'; 

for (i = 1; i < 152; i++ ){
    fetch(pokemonApi + i)
    .then((response) =>{
        return response.json();
    })
    .then((pokemones) =>{
        console.log(pokemones);
    })
}