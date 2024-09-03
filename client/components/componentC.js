import styles from "./component.module.css"

function ComponentC() {
    return (
        <div className={styles.whole}>
            <div className={styles.closed}>
                <div className={styles.cardC1}>

                </div>
                <div className={styles.cardC2}>
                </div>
            </div>
            <div className={styles.down}>
                <div className={styles.hiddenCard}>
                    <h2>[숙소] 전경</h2>
                </div>
                <div className={styles.hiddenCard}>
                    <h2>[숙소] </h2>
                </div>
            </div>
        </div>

    );
}

export default ComponentC;