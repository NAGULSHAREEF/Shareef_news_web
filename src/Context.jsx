import React, { useContext } from "react";
const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    return (
    <AppContext.Provider value={"shareef_news"}>
        {children}
        </AppContext.Provider>
)
}

const useGlobalContext = ()=>{
    return useContext(AppProvider);
}

export {AppContext,AppProvider,useGlobalContext}