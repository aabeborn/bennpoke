type Sprite = {
    back_default: URL,
    back_shiny: URL,
    back_female?: URL,
    back_shiny_female ?: URL,
    other: OtherSprites,
    versions: VersionsSprites
}

type OtherSprites = {
    dreamWorld: {
        front_default:URL
    },
    "official-artwork": {
        front_default:URL
    }
}

type FrontDefaultSprite = {
    front_default: URL
}

type VersionsSprites = {
    "generation-i": GenerationISprite
    "generation-ii": GenerationIISprite
    "generation-iii": GenerationIIISprite
    "generation-iv": GenerationIVSprite
    "generation-v": GenerationVSprite
    "generation-vi": GenerationVISprite
    "generation-vii": GenerationVIISprite
    "generation-viii": GenerationVIIISprite
}

type GenerationISprite = {
    "red-blue": {
        back_default?:URL,
        back_gray?: URL,
        front_defaul?: URL,
        front_gray?: URL
    },
    yellow: {
        back_default?:URL,
        back_gray?: URL,
        front_defaul?: URL,
        front_gray?: URL
    }
}

type GenerationIISprite = {
    crystal: {
        back_default?:URL,
        back_shiny?: URL,
        front_defaul?: URL,
        front_shiny?: URL
    },
    gold: {
        back_default?:URL,
        back_shiny?: URL,
        front_defaul?: URL,
        front_shiny?: URL
    },
    silver: {
        back_default?:URL,
        back_shiny?: URL,
        front_defaul?: URL,
        front_shiny?: URL
    },
}

type GenerationIIISprite = {
    emerald: {
        front_defaul?: URL,
        front_shiny?: URL
        },
    "firered-leafgreen": {
        back_default?:URL,
        back_shiny?: URL,
        front_defaul?: URL,
        front_shiny?: URL
    },
    "ruby-sapphire": {
        back_default?:URL,
        back_shiny?: URL,
        front_defaul?: URL,
        front_shiny?: URL
    }
}

type GenerationIVSprite = {
    "diamond-pearl": {
        back_default?:URL,
        back_shiny?: URL,
        back_female?: URL,
        back_shiny_female?: URL,
        front_defaul?: URL,
        front_shiny?: URL,
        front_female?: URL,
        front_shiny_female?: URL
    },
    "heartgold-soulsilver": {
        back_default?:URL,
        back_shiny?: URL,
        back_female?: URL,
        back_shiny_female?: URL,
        front_defaul?: URL,
        front_shiny?: URL,
        front_female?: URL,
        front_shiny_female?: URL
    },
    "platinum": {
        back_default?:URL,
        back_shiny?: URL,
        back_female?: URL,
        back_shiny_female?: URL,
        front_defaul?: URL,
        front_shiny?: URL,
        front_female?: URL,
        front_shiny_female?: URL
    }
}

type GenerationVSprite = {
    "black-white": {
        animated: {
            back_default?:URL,
            back_shiny?: URL,
            back_female?: URL,
            back_shiny_female?: URL,
            front_defaul?: URL,
            front_shiny?: URL,
            front_female?: URL,
            front_shiny_female?: URL 
        }
        back_default?:URL,
        back_shiny?: URL,
        back_female?: URL,
        back_shiny_female?: URL,
        front_defaul?: URL,
        front_shiny?: URL,
        front_female?: URL,
        front_shiny_female?: URL
    }
}

type GenerationVISprite = {
    "omegaruby-alphasapphire": {
        front_defaul?: URL,
        front_shiny?: URL,
        front_female?: URL,
        front_shiny_female?: URL
    },
    "x-y": {
        front_defaul?: URL,
        front_shiny?: URL,
        front_female?: URL,
        front_shiny_female?: URL
    }
}

type GenerationVIISprite = {
    icons: {
        front_defaul?: URL,
        front_female?: URL,
    },
    "ultra-sun-ultra-moon": {
        front_defaul?: URL,
        front_shiny?: URL,
        front_female?: URL,
        front_shiny_female?: URL
    }
}

type GenerationVIIISprite = {
    icons: {
        front_defaul?: URL,
        front_female?: URL,
    } 
}



interface PokemonList {
    count:number; //total pokemons
    next:URL;
    results: Array<PokemonPreview>;
}

type PokemonPreview = {
    name: string;
    url:URL;
}

type PokemonCard = {
    id: number;
    name: string;
    sprites: Sprite
}

