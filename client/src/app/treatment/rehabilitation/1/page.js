'use client'
import Navigation from "../../../../../components/navigation";
import styles from "./rehabilitation1.module.css"
import Link from "next/link";


export default function Rehabilitation1() {

    return (
        <div className={styles['main-container']}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Treatment.</h1>
                        </div>
                        <div className={styles.link}>
                            <Link href="/treatment/rehabilitation/1">Treatment</Link>
                            <p>&gt;</p>
                            <Link href="/treatment/rehabilitation/1"><h4>중독 재활 치료</h4></Link>
                        </div>
                    </div>
                    <div className={styles.anotherLink}>
                        <Link href="/treatment/rehabilitation/1" className={styles.rightnow}><p>집단 치료</p></Link>
                        <p>|</p>
                        <Link href="/treatment/rehabilitation/2" className={styles.other}><p>개인 치료</p></Link>
                        <p>|</p>
                        <Link href="/treatment/rehabilitation/3" className={styles.other}><p>가족 치료</p></Link>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.medicine}>

                            <div className={styles.left}>
                                <div className={styles.box}>
                                    <h2>상담</h2>
                                    <div className={styles.textBox}>
                                        <p>전문적으로 훈련된 상담자의 지도와 동료들과의 교류를 통해 집단 내 자신을 성숙한 사람으로 향상시킵니다.
                                        </p>
                                    </div>

                                </div>

                            </div>
                            {/* <div className={styles.divider}></div> */}
                            <div className={styles.right}>
                                <div className={styles.box}>
                                    <h2>교육</h2>
                                    <div className={styles.textBox}>
                                        <p>약물 인식 교육 및 전염병 교육을 실시해 약물이 타인에게 미치는 문제를 교육합니다.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

