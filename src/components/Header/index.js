import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from './logo.png'
import LinkHeader from 'components/LinkHeader'

const Header = () => {
    return(
        <header className={styles.header}>
            <Link to={'/'}>
                <img src={logo} alt='Logo CineTag'/>
            </Link>
            <nav>
                <LinkHeader url={'/'}>
                    Home
                </LinkHeader>
                <LinkHeader url={'/favorites'}>
                    Favorites
                </LinkHeader>
            </nav>
        </header>
    )
}

export default Header