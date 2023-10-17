import styles from "./styles.module.css";
import Image from 'next/image'
import dumbo from './dumbo.jpg';
import rome from './rome.png';



export default function Hobbies() {

    return (
        <>
            <div className={styles.hobbies}>
                <h1 className={styles.header}>Meus hobbies</h1>
                <h2 className={styles.header2}>Durante o meu tempo livre, eu gosto de viajar, conhecer culturas novas, aprender outros idiomas, ir ao cinema, ler livros, ...</h2>
                <div className={styles.images}>
                    <Image className={styles.dumboimg}
                        src={dumbo}
                        width={500}
                        height={650}
                        alt="Picture of dumbo"
                    />
                    <Image className={styles.romeimg}
                        src={rome}
                        width={500}
                        height={650}
                        alt="Picture of dumbo"
                    />
                </div>
            </div>
        </>
    )

}