import Navigation from "../../../../components/navigation";
import styles from "../../page.module.css"

export default function Medicine() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>치료 약물</h1>
            </div>
        </main>
    );
}
