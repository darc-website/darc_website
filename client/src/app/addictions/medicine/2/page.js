import Navigation from "../../../../../components/navigation";
import styles from "../../../page.module.css"

export default function Second() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>진정, 마취제</h1>
            </div>
        </main>
    );
}
