import Navigation from "../../../../components/navigation";
import styles from "../../page.module.css"

export default function Law() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>사법지원</h1>
            </div>
        </main>
    );
}
