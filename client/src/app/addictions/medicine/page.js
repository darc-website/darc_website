import Navigation from "../../../../components/navigation";
import styles from "./medicine.module.css"
import Link from "next/link";

export default function Medicine() {
    return (
        <main className={styles.main}>
            <Navigation />
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>

                    </div>
                    <div className={styles.link}>
                        <Link href="/addictions"><h4>Addictions</h4></Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
