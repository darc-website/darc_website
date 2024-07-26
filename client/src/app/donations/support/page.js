'use client'
import Navigation from "../../../../components/navigation";
import styles from "./support.module.css"
import Link from "next/link";


export default function Program1() {

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Donation.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/donations/volunteer">Donations</Link>
                            <p>&gt;</p>
                            <Link href="/donations/support"><h4>기부</h4></Link>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                        <h2>
                            당신의 기부가 중독자들을 치료합니다.
                        </h2>
                        <ul>
                            <li>후원은 마약중독자들에게 양질의 지원을 꾸준히 제공할 수 있게 해주는 중요한 원동력입니다.</li>
                            <li>많은 중독자들이 건강하게 사회에 복귀할 수 있도록 당신의 도움이 필요합니다.</li>
                        </ul>
                        <div className={styles.out}>
                            <div className={styles.just}>
                                <div className={styles.picture}>
                                    <h1>기업 <br />사진</h1>
                                </div>
                                <div className={styles.picturein}>

                                </div>
                            </div>
                            <div className={styles.just}>
                                <div className={styles.picture}>
                                    <h1>개인<br />사진</h1>
                                </div>
                                <div className={styles.picturein}>

                                </div>
                            </div>
                            <div className={styles.just}>
                                <div className={styles.picture}>
                                    <h1>단체<br />사진</h1>
                                </div>
                                <div className={styles.picturein}>

                                </div>
                            </div>
                        </div>


                        <div className={styles.application}>
                            <Link href="/donations/support/application"><button>Continue</button></Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

