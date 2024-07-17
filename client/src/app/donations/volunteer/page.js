import Navigation from "../../../../components/navigation";
import styles from "../../page.module.css"

export default function Volunteer() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>자원봉사</h1>
            </div>
        </main>
    );
}
