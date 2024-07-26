'use client'
import Navigation from "../../../../../components/navigation";
import styles from "./rehabilitation3.module.css"
import Link from "next/link";


export default function Rehabilitation3() {

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
                        <Link href="/treatment/rehabilitation/1" className={styles.other}><p>집단 치료</p></Link>
                        <p>|</p>
                        <Link href="/treatment/rehabilitation/2" className={styles.other}><p>개인 치료</p></Link>
                        <p>|</p>
                        <Link href="/treatment/rehabilitation/3" className={styles.rightnow}><p>가족 치료</p></Link>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.medicine}>

                            <div className={styles.left}>
                                <div className={styles.box}>
                                    <h2>상담</h2>
                                    <div className={styles.textBox}>
                                        <p>자신이 가족에게 미친 영향을 제대로 알 수 있도록 상담합니다.

                                        </p>
                                    </div>

                                </div>

                            </div>
                            {/* <div className={styles.divider}></div> */}
                            <div className={styles.right}>
                                <div className={styles.box}>
                                    <h2>교육</h2>
                                    <div className={styles.textBox}>
                                        <p>가족 구성원 전체가 하나로 융합될 수 있도록 돕습니다.

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

