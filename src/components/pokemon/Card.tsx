import clsx from 'clsx';
import * as React from 'react';
import { useQuery } from 'react-query';
import {getPokemon } from '../../utils/api';
interface Props {
    url: URL,
    name: string
}

const Card: React.FC<Props> = ({url, name}) => {
    const {data, isFetching, status, error} = useQuery([name, url], getPokemon);
    const [imageLoading,setImageLoading] = React.useState(true)
    return (
        <div className="relative block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pt-4 sm:pt-10 pb-2 px-4 mb-4  overflow-hidden">
            <div className="w-full bg-gray-100 dark:bg-gray-700  min-h-32 flex  p-4">
                { isFetching 
                    ? ( <>
                            <div className="w-1/3 max-w-md h-1/3 max-h-1/3 sm:w-25 sm:-top-0 sm:h-24 sm:ml-0 sm:absolute animate-pulse dark:bg-gray-500 bg-gray-400 rounded-md"></div>
                            <div className="sm:mt-11 relative w-full">
                            <div className="w-1/2 h-7 pt-7 animate-pulse dark:bg-gray-500 bg-gray-400 rounded-md relative"></div>
                            </div>
                        </>
                    )
                    :(<>
                        <PokeBackground />
                        <img 
                            src={data?.sprite} 
                            alt={`${data?.pokemon.id}-sprite`}
                            loading="lazy"
                            className="w-1/3 max-w-md h-auto sm:w-25 sm:absolute sm:top-0 sm:left-6"
                        />
                        <div className="sm:mt-11 w-full flex z-10">
                            <span className="text-2xl dark:text-white text-gray-900 capitalize flex-1 flex-shrink">{data?.pokemon.name}</span>
                            <span className="text-2xl dark:text-yellow-400 text-red-500 uppercase">#{data?.pokemon.id}</span>
                        </div>
                        </>
                    )
                }
                
            </div>
        </div>
    )
} 

const PokeBackground: React.FC = () => {
    return (
        <svg className="absolute h-auto w-1/2 right-4 bottom-2 rounded-md z-0" fill="none" width="132" height="120" viewBox="0 0 132 120" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path d="M51.844 30.9063C78.5236 12.9431 113.899 17.9795 134.315 41.4889L109.012 58.5256C98.1209 48.5686 81.3788 46.9924 68.5089 55.6576C55.639 64.3229 50.8019 80.4283 55.9309 94.2648L30.6275 111.302C16.5245 83.5415 25.1644 48.8696 51.844 30.9063Z" className="fill-current text-gray-200 dark:text-gray-500"/>
                <path d="M117.57 71.2358L142.873 54.1991C156.976 81.9591 148.336 116.631 121.657 134.594C94.9771 152.558 59.6017 147.521 39.1852 124.012L64.4887 106.975C75.3797 116.932 92.1219 118.508 104.992 109.843C117.862 101.178 122.699 85.0723 117.57 71.2358Z" className="fill-current text-gray-200 dark:text-gray-500"/>
                <path d="M98.2356 99.8086C107.727 93.418 110.28 80.6 103.937 71.1789C97.5933 61.7578 84.7566 59.3013 75.265 65.692C65.7734 72.0826 63.2209 84.9006 69.5641 94.3217C75.9073 103.743 88.744 106.199 98.2356 99.8086Z" className="fill-current text-gray-200 dark:text-gray-500"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="125" height="125" transform="translate(0 65.8127) rotate(-33.9522)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default Card