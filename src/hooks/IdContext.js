import React, { useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [ids, setIds] = useState()
    const [single, setSingle] = useState()

    return (
    <AppContext.Provider
        value={{
            ids, 
            setIds,
            single, 
            setSingle,
            searchTerm,
            setSearchTerm,
        }}
    >
        { children}
    </AppContext.Provider>
    );
};