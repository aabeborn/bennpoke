import { Url } from "url"

const BASE_URL = "https://pokeapi.co/api/v2"
const POKEMONS_PER_PAGE = 16


interface PokemonList {
    count:number; //total pokemons
    next:URL;
    results: Array<PokemonPreview>;
}

type PokemonPreview = {
    name: string;
    url:URL;
}


export async function getPokemons(
    key:string ,
    next: RequestInfo = `${BASE_URL}/pokemon/?limit=${POKEMONS_PER_PAGE}&offset=0`
) : Promise<PokemonList> {
    const res = await fetch(next)
    const list:PokemonList = await res.json()
    console.log(list)
    return list
}