import Navigation from "../../../../../components/navigation";
import styles from "../../../page.module.css"

export default function Art() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>미술</h1>
            </div>
        </main>
    );
}
