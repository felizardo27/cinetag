import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "Favorites"

export default function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState([])

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            { children }
        </FavoritesContext.Provider>
    )
} 

export function useFavoritesContext() {

    const { favorites, setFavorites } = useContext(FavoritesContext)

    const addFavorites = (newFavorite) => {

        const repeatedFavorite = favorites.some(favorite => favorite.id === newFavorite.id)

        let newList = [...favorites]

        if (!repeatedFavorite) {
            newList.push(newFavorite)
            return setFavorites(newList)
        }

        newList = favorites.filter(favorite => favorite.id !== newFavorite.id)
        return setFavorites(newList)
    }

    return{
        favorites,
        addFavorites
    }        
    
}

