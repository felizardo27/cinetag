import { createContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "Favorites"

export default function FavoritesProvider({ children }) {

    const [Favorites, setFavorites] = useState()

    return (
        <FavoritesContext.Provider value={{ Favorites, setFavorites }}>
            { children }
        </FavoritesContext.Provider>
    )
} 