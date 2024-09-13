import styles from "./component.module.css"

function ComponentC() {
    return (
        <div className={styles.whole}>
            <div className={styles.closed}>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardC1}>

                    </div>
                    <h2>[숙소] 2인실</h2>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardC2}>
                    </div>
                    <h2>[숙소] 1인실</h2>
                </div>
            </div>
            <div className={styles.closed}>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardC3}>

                    </div>
                    <h2>[숙소] 주방</h2>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardC4}>
                    </div>
                    <h2>[숙소] 1인실</h2>
                </div>
            </div>
        </div>

    );
}

export default ComponentC;