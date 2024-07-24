import Navigation from "../../../../components/navigation";
import styles from "./recommend.module.css"
import Link from "next/link";

export default function Review() {
    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>추천서.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/">Home</Link>
                            <p>&gt;</p>
                            <Link href="/review">회복 수기</Link>
                            <p>&gt;</p>
                            <Link href="/review/recommend"><h4>추천서</h4></Link>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
