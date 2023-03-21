import { useFavoritesContext } from 'context/Favorites'
import styles from './Card.module.css'
import favoriteIcon from './favorite.png'
import unFavoriteIcon from './unfavorite.png'
import { Link } from 'react-router-dom'

const Card = ({ id, title, cover }) => {

  const { favorites, addFavorites } = useFavoritesContext()

  const isFavorite = favorites.some(fav => fav.id === id)

  const icon = isFavorite ? favoriteIcon : unFavoriteIcon

  return (
    <div className={styles.container}>
      <Link 
        className={styles.link} 
        to={`/${id}`}
      >
        <img 
          src={cover} 
          alt='Card cover'
          className={styles.cover}
        />
        <h2>{title}</h2>
      </Link>
      <img 
        src={icon} 
        alt='Favorite Icon'
        className={styles.favoriteIcon}
        onClick={() => addFavorites({id, title, cover})}
      />
    </div>
  )
}

export default Card
