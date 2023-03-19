import { Link } from 'react-router-dom'
import styles from './Link.module.css'

const LinkHeader = ({ url, children }) => {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  )
}

export default LinkHeader
