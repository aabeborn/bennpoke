import * as React from "react"

const Loader: React.FC = () => {
    return (
        <div className="w-6 h-6 text-red-700 dark:text-yellow-600 rounded-full animate-shake relative overflow-hidden">
            <div className="h-1/2 w-full bg-red-500 dark:bg-yellow-400"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 rounded-full h-2 w-2 bg-white dark:bg-gray-800 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4  h-0.5 w-full bg-white dark:bg-gray-800 z-10"></div>
            <div className="h-1/2  translate-x-2/4 h-1.5 w-full bg-red-700 dark:bg-yellow-600"></div>
        </div>
    )
}

export default Loader