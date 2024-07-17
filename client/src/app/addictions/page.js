import Navigation from "../../../components/navigation";
import styles from "../page.module.css"

export default function Addictions() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>Addictions</h1>
            </div>
        </main>
    );
}
