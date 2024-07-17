import Navigation from "../../../../components/navigation";
import styles from "../../page.module.css"

export default function Facility() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>시설안내</h1>
            </div>
        </main>
    );
}
