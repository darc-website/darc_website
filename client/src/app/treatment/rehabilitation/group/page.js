import Navigation from "../../../../../components/navigation";
import styles from "../../../page.module.css"

export default function Group() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>집단 치료</h1>
            </div>
        </main>
    );
}
