import styles from "./component.module.css"

function ComponentB() {
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
        </div>

    );
}

export default ComponentB;