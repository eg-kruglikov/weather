import { Children, createContext, useContext, useState } from "react";


const LoaderContext = createContext()

const LoaderContextProvider = ({ childen }) => {
    const [loader, setloader] = useState(false);

    const showLoader = () => {
        setloader(true)
    }

    const hideLoder = () => {
        setloader(false)
    }

    return (


        < LoaderContext.Provider value={{loader, showLoader, hideLoder}} >
            { Children}
        </LoaderContext.Provider >
    )

}

export default LoaderContextProvider

const useLoaderContext = () => useContext(LoaderContext)

export {
    useLoaderContext
}