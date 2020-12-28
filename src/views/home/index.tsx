import * as React from "react"
import {List} from "../../components/pokemon"


const Home : React.FC<{}> = () => {
    React.useEffect(() => console.log("home effect"))
    return (
        <div className="w-full flex-grow p-4 xl:p-8 flex justify-start items-center flex-col overflow-y-scroll">
            <List />
        </div>
    )
}

export default Home