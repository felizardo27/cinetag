import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import FavoritesProvider from 'context/Favorites'
import React from 'react'
import { Outlet } from 'react-router-dom'

const BasePage = () => {
    return (
        <main>
            <Header />
                <Container>
                    <FavoritesProvider>
                        <Outlet />
                    </FavoritesProvider>
                </Container>
            <Footer />
        </main>
)
}

export default BasePage
