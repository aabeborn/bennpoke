import * as React from "react"
import { useInfiniteQuery } from "react-query"
import {getPokemons} from "../../utils/api"
import useIntersect from '../../hooks/useIntersect'
import { Url } from "url"
import { Console } from "console"
// import {List} from "../../components/pokemon"

type PokemonPreview = {
    name: string;
    url:URL;
}
interface PokemonList {
    count:number; //total pokemons
    next: URL;
    results: Array<PokemonPreview>;

}



const Home : React.FC<{}> = () => {
    // const[filters, setFilters] = useState(new Filters())
    const loadMoreRef = React.useRef<HTMLDivElement>(null)
    const {status,data, isFetching, isFetchingMore, fetchMore, canFetchMore, error} = useInfiniteQuery('pokemons', getPokemons, {
        getFetchMore: (lastGroup, allGroups) => lastGroup.next
        
    })
    useIntersect({
        target: loadMoreRef,
        onIntersect:fetchMore,
        enabled: canFetchMore
    })
    return (
        <div className="flex flex-col items-center w-full p-4 xl:p-8">
            {isFetching && !data
                ? "loading" 
                : (
                    <div>
                        {data?.map((item: PokemonList, key: number) => {
                            return item.results?.map((pokemon :PokemonPreview , index: number) => {
                                return <div key={`pokemon-list-${index}`}>{pokemon.name}</div>
                            })
                        })}
                        <div ref={loadMoreRef}></div>
                        {isFetchingMore ? <span className="text-white">loading...</span>: null}
                    </div>
                )
            }
        </div>
    )
}

export default Home