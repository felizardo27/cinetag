import Banner from "components/Banner"
import Card from "components/Card"
import Footer from "components/Footer"
import Header from "components/Header"
import Title from "components/Title"

const Home = () => {
  return (
    <>
      <Header />
      <Banner imagem='home' />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Card 
        id={'1'}
        title={'Random cat'}
        cover={'https://thecatapi.com/api/images/get?format=src&type=png'}
      />
      <Footer />
    </>
  )
}

export default Home
