const pokemons = [
    { nome: "Bulbassaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "agua" },
    { nome: "Psydyck", tipo: "agua" },
    
]

const callback = (pokemon, indice, array) => {
    if(pokemon.tipo === "grama"){
        return true
    } else {
        return false
    }
}

const algunsPokemons = pokemons.filter(callback)