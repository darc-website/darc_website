export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import Navigation from "../../../components/navigation";
import styles from "../page.module.css"

export default function Donations() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div style={{ marginTop: '400px', textAlign: 'center' }}>
                <h1>Donations</h1>
            </div>
        </main>
    );
}
