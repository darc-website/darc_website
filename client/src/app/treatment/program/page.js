import Navigation from "../../../../components/navigation";
import styles from "../../page.module.css"

export default function Program() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>프로그램</h1>
            </div>
        </main>
    );
}
