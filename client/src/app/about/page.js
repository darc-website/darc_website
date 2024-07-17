import Navigation from "../../../components/navigation";
import styles from "../page.module.css"

export default function About() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>다르크란?</h1>
            </div>
        </main>
    );
}
