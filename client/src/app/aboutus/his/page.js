import Navigation from "../../../../components/navigation";
import styles from "../../page.module.css"

export default function History() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>역사</h1>
            </div>
        </main>
    );
}
