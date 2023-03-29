import Banner from 'components/Banner'
import styles from './Player.module.css'
import Title from 'components/Title'
import { useParams } from 'react-router-dom'
import NotFound from 'pages/NotFound'
import { useState } from 'react'
import { useEffect } from 'react'

const Player = () => {

    const [video, setVideo] = useState()
    const params = useParams()
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/felizardo27/cinetag-api/videos?id=${params.id}`)
        .then(res => res.json())
        .then(data => {
            setVideo(...data)
        })
    }, [params.id])

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
