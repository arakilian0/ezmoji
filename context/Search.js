import React, { useContext, useState } from 'react'

export const params = { query: null }

export const SearchContext = React.createContext({
    query: null,
    setQuery: async (query) => null,
})

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({ children }) => {
    const [query, setQuery] = useState(params.query)

    return (
        <SearchContext.Provider 
            value={{ query, setQuery }}>
                {children}
        </SearchContext.Provider>
    )
}