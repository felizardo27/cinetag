import Container from "components/Container"
import Footer from "components/Footer"
import Header from "components/Header"
import FavoritesProvider from "context/Favorites"
import Favorites from "pages/Favorites"
import Home from "pages/Home"
import Player from "pages/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/:id" element={<Player />} />
                    </Routes>
                </FavoritesProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes