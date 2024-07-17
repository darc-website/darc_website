import Navigation from "../../../../components/navigation";
import styles from "../../page.module.css"

export default function Schedule() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>Schedule</h1>
            </div>
        </main>
    );
}
