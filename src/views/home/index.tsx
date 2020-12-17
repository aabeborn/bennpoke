import * as React from "react"
import { useInfiniteQuery } from "react-query"
import {getPokemons} from "../../utils/api"
import useIntersect from '../../hooks/useIntersect'
import Card from "../../components/pokemon/Card"
import {List} from "../../components/pokemon"
import Loader from "../../components/loader"

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
        <div className="w-full flex-grow p-4 xl:p-8 bg-red-500">
            {isFetching && (!data || data.length  <= 0) 
                ? <Loader />
                : "content"
            }
            {/* {isFetching && !data
                ? "loading" 
                : (
                    <List>
                        {data?.map((item: PokemonList, key: number) => {
                            return item.results?.map((pokemon :PokemonPreview , index: number) => {
                                return <Card key={`pokemon-list-${index}`} name={pokemon.name} url={pokemon.url}></Card>
                            })
                        })}
                        <div ref={loadMoreRef}></div>
                        {isFetchingMore ? <span className="text-white">loading...</span>: null} 
                    </List>
                )
            }*/}
        </div>
    )
}

export default Home