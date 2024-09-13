import styles from "./component.module.css"

function ComponentA() {
    return (
        <div className={styles.whole}>
            <div className={styles.closed}>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardB1}>

                    </div>
                    <h2>[사무실] 로고</h2>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardB2}>

                    </div>
                    <h2>[사무실] 생활 철학</h2>
                </div>
            </div>
            <div className={styles.closed}>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardB3}>

                    </div>
                    <h2>[사무실] 지도</h2>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardB4}>

                    </div>
                    <h2>[사무실] 전경</h2>
                </div>
            </div>
            <div className={styles.closed}>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardB5}>

                    </div>
                    <h2>[사무실] 회의 공간</h2>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.cardB6}>

                    </div>
                    <h2>[사무실] 상담 공간</h2>
                </div>
            </div>
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

export default ComponentA;