import Banner from 'components/Banner'
import styles from './Favorites.module.css'
import Title from 'components/Title'
import Card from 'components/Card'

const Favorites = () => {
  return (
    <>
      <Banner imagem={'favorites'}/>
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
      <Card 
        id='2' 
        title='Gato bonifácio' 
        cover={'https://thecatapi.com/api/images/get?format=src&type=png'}
      />           
      </section>
    </>
  )
}

export default Favorites
