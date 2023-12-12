import React from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [appState, setAppState] = React.useState({user: 'Duelist'})

    const providerValue = {
        ...appState,
        lastLoad: Date.now()
    };


    return <AppContext.Provider value={{providerValue}}>{ children }</AppContext.Provider>;
}

export default function useAppState() {
    return React.useContext(AppContext);
}