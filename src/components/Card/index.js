import styles from './Card.module.css'
import favoriteIcon from './unfavorite.png'

const Card = ({ id, title, cover }) => {
  return (
    <div className={styles.container}>
      <img 
        src={cover} 
        alt='Card cover'
        className={styles.cover}
      />
      <h2>{title}</h2>
      <img 
        src={favoriteIcon} 
        alt='Favorite Icon'
        className={styles.favoriteIcon}
      />
    </div>
  )
}

export default Card
