import Banner from 'components/Banner'
import styles from './Player.module.css'
import Title from 'components/Title'
import { useParams } from 'react-router-dom'
import videos from 'json/db.json'
import NotFound from 'pages/NotFound'

const Player = () => {

    const params = useParams()
    const video = videos.find(video => video.id === Number(params.id))
    console.log(video)

    if (!video) return <NotFound />

    return (
        <>
            <Banner imagem={'player'} />
            <Title>
                <h1>
                    Player
                </h1>
                <section className={styles.container}>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={video.link} 
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </section>
            </Title>
        </>
  )
}

export default Player
