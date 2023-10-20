import { Menu } from "../menu";
import styles from "./styles.module.css";


export default function Formacao() {

    return (
        <>
            <Menu/>
            <div className={styles.formacao}>
                <h1 className={styles.header}>Minha formação acadêmica</h1>
                <h2 className={styles.header2}>Sou formada em Engenharia Elétrica pela Universidade de São Paulo.</h2>
                <h2 className={styles.header2}>Atualmente, estou no segundo ano do curso de Sistemas para Internet na FIAP.</h2>
                <h2 className={styles.header2}>Já realizei cursos livres em desenvolvimento Java, Spring Framework, HTML, CSS, JavaScript, Angular 2+ para complementar a minha formação.</h2>

            </div>
        </>
    )

}