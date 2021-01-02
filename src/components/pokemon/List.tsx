import * as React from "react"
import { useInfiniteQuery } from "react-query"
import useIntersect from "../../hooks/useIntersect"
import { getPokemons } from "../../utils/api"
import Loader from "../loader"
import Card from "./Card"

const List: React.FC = ({ children }) => {
	const more = React.useRef<HTMLDivElement>(null)
	const {
		data,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		error,
	} = useInfiniteQuery("pokemons", ({pageParam}) => getPokemons(pageParam), {
		getNextPageParam: (lastPage: PokemonList, allPages: PokemonList[]) =>
			lastPage.next,
	})
	useIntersect({
		target: more,
		onIntersect: fetchNextPage,
		enabled: hasNextPage,
	})
	React.useEffect(() => console.log("list effect"))
	return (
		<div className="relative max-w-6xl w-full flex flex-wrap justify-center">
			{isFetching && (!data || data.pages.length <= 0) ? (
				<Loader />
			) : (
				<>
					{data?.pages?.map((item: PokemonList) => {
						return item.results?.map(
							(pokemon: PokemonPreview, index: number) => {
								return (
									<Card
										key={`pokemon-list-${index}`}
										name={pokemon.name}
										url={pokemon.url}></Card>
								)
							},
						)
					})}
					{isFetchingNextPage ? <Loader /> : null}
				</>
			)}
			<div ref={more}></div>
		</div>
	)
}

export default List
