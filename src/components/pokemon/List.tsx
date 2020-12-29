import * as React from 'react'
import { useInfiniteQuery } from 'react-query'
import useIntersect from '../../hooks/useIntersect'
import { getPokemons } from '../../utils/api'
import Loader from '../loader'
import Card from './Card'

const List: React.FC = ({children}) => {
    const more = React.useRef<HTMLDivElement>(null)
    const {data, isFetching, isFetchingMore, fetchMore, canFetchMore, error} = useInfiniteQuery('pokemons', getPokemons, 
        {getFetchMore: (lastPage:PokemonList, allPages:PokemonList[]) => lastPage.next})
    useIntersect({
        target: more,
        onIntersect:fetchMore,
        enabled: canFetchMore
    })
    React.useEffect(() => console.log("list effect"))
    return (
        <div className="relative max-w-6xl w-full flex flex-wrap justify-center">
              {
                isFetching && (!data || data.length  <= 0) 
                ? <Loader />
                : (
                    <>
                            {
                                data?.map((item: PokemonList) => {
                                    return item.results?.map((pokemon :PokemonPreview , index: number) => {
                                        return <Card key={`pokemon-list-${index}`} name={pokemon.name} url={pokemon.url}></Card>
                                })})
                            }
                            {
                                isFetchingMore 
                                ?    <Loader />
                                : null
                            }                     
                    </>
                )
            }
             <div ref={more} ></div>
        </div>
    )
}

export default List