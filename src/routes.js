import Footer from "components/Footer"
import Header from "components/Header"
import Home from "pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes