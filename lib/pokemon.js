const fetch = require('node-fetch');
const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';

const getPokemon = async() =>{
    let data = await fetch(url);
    return await data.json();
}

module.exports = getPokemon;