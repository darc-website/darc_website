import Navigation from "../../../../components/navigation";
import styles from "../../page.module.css"

export default function Mission() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>미션</h1>
            </div>
        </main>
    );
}
