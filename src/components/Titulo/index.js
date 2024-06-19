import styles from './Titulo.module.css';

function Titulo({ children }) {
    return (
        <h1 className={styles.texto}>
            {children}
        </h1>
    )
}

export default Titulo;