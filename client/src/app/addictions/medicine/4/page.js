import Navigation from "../../../../../components/navigation";
import styles from "../../../page.module.css"

export default function Forth() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>기타 약물</h1>
            </div>
        </main>
    );
}
