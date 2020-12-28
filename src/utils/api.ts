import { Url } from "url"

const BASE_URL = "https://pokeapi.co/api/v2"
const POKEMONS_PER_PAGE = 16


export async function getPokemons(
    key:string ,
    next: RequestInfo = `${BASE_URL}/pokemon/?limit=${POKEMONS_PER_PAGE}&offset=0`
) : Promise<PokemonList> {
    const res = await fetch(next)
    const list:PokemonList = await res.json()
    return list
}

export async function getPokemon(key:string, url: RequestInfo) {
    const res = await fetch(url)
    const element:PokemonCard = await res.json();
    const imageUrl = element.sprites.other["official-artwork"].front_default.toString()
    const imageBlob = await fetch(imageUrl)
    const image =  URL.createObjectURL(await imageBlob.blob())
    return {pokemon:element, sprite:image}
}