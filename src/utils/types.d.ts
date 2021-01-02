type Sprite = {
	back_default: string
	back_shiny: string
	back_female?: string
	back_shiny_female?: string
	other: OtherSprites
	versions: VersionsSprites
}

type OtherSprites = {
	dreamWorld: {
		front_default: string
	}
	"official-artwork": {
		front_default: string
	}
}

type FrontDefaultSprite = {
	front_default: string
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
		back_default?: string
		back_gray?: string
		front_defaul?: string
		front_gray?: string
	}
	yellow: {
		back_default?: string
		back_gray?: string
		front_defaul?: string
		front_gray?: string
	}
}

type GenerationIISprite = {
	crystal: {
		back_default?: string
		back_shiny?: string
		front_defaul?: string
		front_shiny?: string
	}
	gold: {
		back_default?: string
		back_shiny?: string
		front_defaul?: string
		front_shiny?: string
	}
	silver: {
		back_default?: string
		back_shiny?: string
		front_defaul?: string
		front_shiny?: string
	}
}

type GenerationIIISprite = {
	emerald: {
		front_defaul?: string
		front_shiny?: string
	}
	"firered-leafgreen": {
		back_default?: string
		back_shiny?: string
		front_defaul?: string
		front_shiny?: string
	}
	"ruby-sapphire": {
		back_default?: string
		back_shiny?: string
		front_defaul?: string
		front_shiny?: string
	}
}

type GenerationIVSprite = {
	"diamond-pearl": {
		back_default?: string
		back_shiny?: string
		back_female?: string
		back_shiny_female?: string
		front_defaul?: string
		front_shiny?: string
		front_female?: string
		front_shiny_female?: string
	}
	"heartgold-soulsilver": {
		back_default?: string
		back_shiny?: string
		back_female?: string
		back_shiny_female?: string
		front_defaul?: string
		front_shiny?: string
		front_female?: string
		front_shiny_female?: string
	}
	platinum: {
		back_default?: string
		back_shiny?: string
		back_female?: string
		back_shiny_female?: string
		front_defaul?: string
		front_shiny?: string
		front_female?: string
		front_shiny_female?: string
	}
}

type GenerationVSprite = {
	"black-white": {
		animated: {
			back_default?: string
			back_shiny?: string
			back_female?: string
			back_shiny_female?: string
			front_defaul?: string
			front_shiny?: string
			front_female?: string
			front_shiny_female?: string
		}
		back_default?: string
		back_shiny?: string
		back_female?: string
		back_shiny_female?: string
		front_defaul?: string
		front_shiny?: string
		front_female?: string
		front_shiny_female?: string
	}
}

type GenerationVISprite = {
	"omegaruby-alphasapphire": {
		front_defaul?: string
		front_shiny?: string
		front_female?: string
		front_shiny_female?: string
	}
	"x-y": {
		front_defaul?: string
		front_shiny?: string
		front_female?: string
		front_shiny_female?: string
	}
}

type GenerationVIISprite = {
	icons: {
		front_defaul?: string
		front_female?: string
	}
	"ultra-sun-ultra-moon": {
		front_defaul?: string
		front_shiny?: string
		front_female?: string
		front_shiny_female?: string
	}
}

type GenerationVIIISprite = {
	icons: {
		front_defaul?: string
		front_female?: string
	}
}

type PokemonType = {
	slot: number
	type: {
		name: string
		string: string
	}
}

interface PokemonList {
	count: number //total pokemons
	next: string
	results: Array<PokemonPreview>
}

type PokemonPreview = {
	name: string
	url: string
}

type PokemonCard = {
	id: number
	name: string
	sprites: Sprite
	types: PokemonType[]
}
