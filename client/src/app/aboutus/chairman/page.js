import Navigation from "../../../../components/navigation";
import styles from "../../page.module.css"

export default function Chairman() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>이사장님 말씀</h1>
            </div>
        </main>
    );
}
