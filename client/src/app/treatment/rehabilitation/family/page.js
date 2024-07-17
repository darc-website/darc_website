import Navigation from "../../../../../components/navigation";
import styles from "../../../page.module.css"

export default function Family() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>가족 치료</h1>
            </div>
        </main>
    );
}
