import Axios from 'axios'

function getPokemons() {
    return Axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.data.results)
}

function getPokemonData(pokemon){
    return Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.data)
}

export default {
    getPokemons,
    getPokemonData
}