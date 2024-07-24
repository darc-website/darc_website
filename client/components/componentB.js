import styles from "./component.module.css"

function ComponentB() {
    return (
        <div className={styles.whole}>
            <div className={styles.closed}>
                <div className={styles.card}>
                    <h1>사무실 사진</h1>
                </div>
                <div className={styles.card}>
                    <h1>사무실 사진</h1>
                </div>
            </div>
            <div className={styles.down}>
                <div className={styles.hiddenCard}>
                    <h2>[사무실] 전경</h2>
                </div>
                <div className={styles.hiddenCard}>
                    <h2>[사무실] 회의실</h2>
                </div>
            </div>
        </div>

    );
}

export default ComponentB;